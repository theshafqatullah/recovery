import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Shield,
  Zap,
  MessageCircle,
  CheckCircle2,
  Truck,
  AlertTriangle,
  Fuel,
  Battery,
  Key,
  Wrench,
  HelpCircle,
  Navigation,
  Car,
} from "lucide-react";
import { dubaiAreas, generateLocationMetadata, siteConfig, getAreaType } from "@/lib/seo";
import { images } from "@/lib/images";

// Generate static params for all Dubai areas
export function generateStaticParams() {
  return dubaiAreas.map((area) => ({
    area: area.slug,
  }));
}

// Generate metadata for each area
export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = dubaiAreas.find((a) => a.slug === areaSlug);
  
  if (!area) {
    return {
      title: "Location Not Found",
    };
  }

  const meta = generateLocationMetadata(area);
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteConfig.url}/locations/${area.slug}`,
      images: ["/og-image.jpg"],
      type: "website",
      locale: "en_AE",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/locations/${area.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
  const area = dubaiAreas.find((a) => a.slug === areaSlug);

  if (!area) {
    notFound();
  }

  const areaType = getAreaType(area.slug);

  const allServices = [
    { name: "Car Recovery", price: "From AED 150", href: "/services/car-recovery", icon: Car, desc: `Fast car recovery service in ${area.name}. We pick up sedans, SUVs, and all passenger vehicles.` },
    { name: "Accident Recovery", price: "From AED 200", href: "/services/accident-recovery", icon: AlertTriangle, desc: `Post-accident vehicle recovery in ${area.name}. We coordinate with police and insurance on-site.` },
    { name: "Flatbed Towing", price: "From AED 250", href: "/services/flatbed-towing", icon: Truck, desc: `Flatbed towing for safe transport from ${area.name}. Ideal for luxury, low-clearance, and damaged vehicles.` },
    { name: "Battery Jump Start", price: "From AED 80", href: "/services/battery-jumpstart", icon: Battery, desc: `Dead battery in ${area.name}? We arrive fast with professional jump start equipment.` },
    { name: "Flat Tyre Service", price: "From AED 80", href: "/services/flat-tyre", icon: Wrench, desc: `Flat tyre assistance in ${area.name}. We change your tyre roadside or tow to the nearest garage.` },
    { name: "Fuel Delivery", price: "From AED 100", href: "/services/fuel-delivery", icon: Fuel, desc: `Ran out of fuel in ${area.name}? We deliver petrol or diesel directly to your location.` },
    { name: "Key Lockout", price: "From AED 120", href: "/services/key-lockout", icon: Key, desc: `Locked out of your car in ${area.name}? Our technicians can help you regain access quickly.` },
    { name: "Off-Road Recovery", price: "From AED 300", href: "/services/off-road-recovery", icon: Navigation, desc: `Stuck off-road near ${area.name}? Our winch-equipped trucks handle sand, mud, and rough terrain.` },
    { name: "Heavy Vehicle Recovery", price: "From AED 500", href: "/services/heavy-vehicle", icon: Truck, desc: `Truck, bus, or heavy vehicle breakdown in ${area.name}? We have heavy-duty recovery equipment.` },
    { name: "Long Distance Towing", price: "From AED 400", href: "/services/long-distance", icon: MapPin, desc: `Vehicle transport from ${area.name} to anywhere in UAE. Inter-emirate towing available.` },
    { name: "Motorcycle Recovery", price: "From AED 150", href: "/services/motorcycle-recovery", icon: Car, desc: `Motorcycle or scooter recovery in ${area.name}. Safe bike transport on our specialized ramps.` },
    { name: "Luxury Car Transport", price: "From AED 350", href: "/services/luxury-transport", icon: Shield, desc: `Premium enclosed transport for luxury vehicles from ${area.name}. White-glove handling guaranteed.` },
  ];

  // Pick services most relevant to area type
  const primaryServices = areaType === "desert"
    ? allServices.filter(s => ["Car Recovery", "Off-Road Recovery", "Fuel Delivery", "Flat Tyre Service", "Long Distance Towing", "Battery Jump Start"].includes(s.name))
    : areaType === "industrial"
    ? allServices.filter(s => ["Car Recovery", "Heavy Vehicle Recovery", "Flatbed Towing", "Battery Jump Start", "Fuel Delivery", "Accident Recovery"].includes(s.name))
    : areaType === "highway"
    ? allServices.filter(s => ["Car Recovery", "Accident Recovery", "Flatbed Towing", "Flat Tyre Service", "Fuel Delivery", "Battery Jump Start"].includes(s.name))
    : allServices.slice(0, 6);

  // Get nearby areas (geographically close based on position in the array)
  const currentIndex = dubaiAreas.findIndex(a => a.slug === area.slug);
  const nearbyAreas = dubaiAreas
    .filter((a) => a.slug !== area.slug)
    .sort((a, b) => {
      const aIndex = dubaiAreas.findIndex(x => x.slug === a.slug);
      const bIndex = dubaiAreas.findIndex(x => x.slug === b.slug);
      return Math.abs(aIndex - currentIndex) - Math.abs(bIndex - currentIndex);
    })
    .slice(0, 6);

  // Location-specific FAQ
  const faqs = [
    {
      q: `How fast can you reach ${area.name}?`,
      a: `Our average response time to ${area.name} is ${area.responseTime}. We have GPS-tracked recovery trucks positioned strategically across Dubai to ensure the fastest possible response. Once you call, we dispatch the nearest available truck immediately.`,
    },
    {
      q: `What types of vehicles do you recover in ${area.name}?`,
      a: `We recover all vehicle types in ${area.name}: sedans, SUVs, 4x4s, vans, luxury cars, sports cars, motorcycles, and even heavy commercial vehicles. Our fleet includes flatbed trucks for safe transport and winch-equipped units for stuck vehicles.`,
    },
    {
      q: `How much does car recovery in ${area.name} cost?`,
      a: `Car recovery in ${area.name} starts from AED 150 for standard vehicles. The exact price depends on the vehicle type, condition, and transport distance. We provide an upfront quote before dispatch — no hidden charges. Call ${siteConfig.phoneFormatted} for an instant quote.`,
    },
    {
      q: `Do you provide 24/7 service in ${area.name}?`,
      a: `Yes! We operate 24 hours a day, 7 days a week, 365 days a year — including public holidays, weekends, and during Ramadan. Whether it's 3 AM or noon, our team is ready to help you in ${area.name}.`,
    },
    {
      q: `Can you tow my car from ${area.name} to a garage or dealership?`,
      a: `Absolutely. We tow vehicles from ${area.name} to any garage, dealership, or destination across the UAE. We work with all major dealerships and authorized service centres. Just tell us where you'd like the vehicle delivered.`,
    },
    ...(areaType === "desert" ? [
      {
        q: `Can you recover a car stuck in sand near ${area.name}?`,
        a: `Yes, desert and sand recovery is our specialty. Our trucks are equipped with heavy-duty winches, sand ladders, and off-road tyres designed for the ${area.name} terrain. We regularly rescue vehicles from deep sand and dune areas.`,
      },
    ] : []),
    ...(areaType === "industrial" ? [
      {
        q: `Do you recover trucks and heavy vehicles in ${area.name}?`,
        a: `Yes, we provide heavy vehicle recovery in ${area.name}'s industrial areas. Our heavy-duty recovery trucks can handle buses, trucks, trailers, and commercial vehicles up to 25 tonnes. Call us for industrial zone breakdowns.`,
      },
    ] : []),
    {
      q: `Is your service licensed and insured?`,
      a: `Yes, 24/7 UAE Recovery is fully licensed by the RTA and carries comprehensive insurance. All our drivers are professionally trained and our vehicles are regularly inspected. Your vehicle is in safe hands.`,
    },
    {
      q: `How do I get help in ${area.name} right now?`,
      a: `The fastest way is to call us at ${siteConfig.phoneFormatted} — a dispatcher will answer within seconds. You can also send your live location via WhatsApp to ${siteConfig.phoneFormatted} for the quickest possible response. We accept cash, card, and bank transfer.`,
    },
  ];

  // Common breakdown scenarios for this area type
  const breakdownScenarios = areaType === "desert" ? [
    { title: "Stuck in Sand", desc: `Vehicles get stuck in soft sand around ${area.name}'s desert terrain. Our winch trucks extract you safely.` },
    { title: "Overheating in Heat", desc: `Extreme desert temperatures near ${area.name} cause engine overheating. We tow you to the nearest service centre.` },
    { title: "Flat Tyre on Desert Roads", desc: `Sharp rocks and rough terrain around ${area.name} cause punctures. We change tyres on the spot.` },
    { title: "Out of Fuel", desc: `Running out of fuel on the long stretches near ${area.name} is common. We deliver fuel to your location.` },
  ] : areaType === "industrial" ? [
    { title: "Heavy Vehicle Breakdown", desc: `Trucks and commercial vehicles break down in ${area.name}'s industrial areas. We have heavy-duty equipment.` },
    { title: "Parking Lot Recovery", desc: `Vehicles stuck in warehouse parking or loading docks in ${area.name}. Our compact units handle tight spaces.` },
    { title: "Battery Failure", desc: `Vehicles left parked for long periods in ${area.name} often have dead batteries. Quick jump start service.` },
    { title: "Accident on Industrial Roads", desc: `Industrial traffic in ${area.name} can lead to collisions. We provide fast accident recovery.` },
  ] : areaType === "highway" ? [
    { title: "Highway Breakdown", desc: `Breaking down on ${area.name} is dangerous. We arrive with safety equipment and reflective barriers.` },
    { title: "Multi-Vehicle Accident", desc: `High-speed collisions on ${area.name} require professional accident recovery. We coordinate with police.` },
    { title: "Tyre Blowout", desc: `High temperatures cause tyre blowouts on ${area.name}. We change tyres or tow to safety.` },
    { title: "Running Out of Fuel", desc: `Traffic jams on ${area.name} can drain your tank. We deliver fuel roadside.` },
  ] : areaType === "suburban" ? [
    { title: "Dead Battery in Parking", desc: `Residential parking in ${area.name} means batteries die from being stationary. Quick jump start available.` },
    { title: "Locked Out of Car", desc: `Locked your keys inside? Common in ${area.name}'s residential areas. Our lockout service helps fast.` },
    { title: "Flat Tyre at Home", desc: `Wake up to a flat tyre in ${area.name}? We come to your building's parking to change or inflate.` },
    { title: "Vehicle Won't Start", desc: `Starter motor or alternator failure in ${area.name}. We diagnose on-site or tow to the nearest garage.` },
  ] : [
    { title: "Underground Parking Recovery", desc: `Many ${area.name} buildings have tight underground parking. Our compact recovery units fit where others can't.` },
    { title: "Traffic Accident", desc: `Busy ${area.name} roads see frequent accidents. We provide fast on-scene recovery and police coordination.` },
    { title: "Dead Battery in the Heat", desc: `Dubai's heat kills batteries faster. If yours dies in ${area.name}, we jump start or replace it.` },
    { title: "Luxury Car Breakdown", desc: `${area.name}'s premium area has many luxury vehicles. We use flatbed towing for safe, scratch-free transport.` },
  ];

  // Reviews/testimonials
  const reviews = [
    { name: "Ahmed K.", rating: 5, text: `Called them when my car broke down near ${area.landmarks[0]}. They arrived in under ${area.responseTime.split("-")[0]} minutes! Very professional.`, date: "2 weeks ago" },
    { name: "Sarah M.", rating: 5, text: `Best recovery service in ${area.name}. Fair pricing and the driver was very careful with my car. Highly recommend!`, date: "1 month ago" },
    { name: "Mohammed R.", rating: 5, text: `Fast and reliable. They towed my SUV from ${area.name} to the dealership without any issues. Will use again.`, date: "3 weeks ago" },
  ];

  // JSON-LD structured data
  const locationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/locations/${area.slug}/#business`,
        name: `24/7 UAE Recovery - ${area.name}`,
        description: area.description,
        url: `${siteConfig.url}/locations/${area.slug}`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: images.locations[area.imageKey],
        priceRange: "AED 80 - AED 2000",
        address: {
          "@type": "PostalAddress",
          addressLocality: area.name,
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.2048",
          longitude: "55.2708",
        },
        areaServed: {
          "@type": "Place",
          name: area.name,
        },
        parentOrganization: {
          "@id": `${siteConfig.url}/#business`,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "420",
          bestRating: "5",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Recovery Services in ${area.name}`,
          itemListElement: primaryServices.map(s => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.desc,
            },
            price: s.price.replace("From AED ", ""),
            priceCurrency: "AED",
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
          { "@type": "ListItem", position: 3, name: area.name, item: `${siteConfig.url}/locations/${area.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-zinc-500">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/locations" className="hover:text-orange-500">Locations</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><span className="text-zinc-900">{area.name}</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-sm font-medium">
                  {area.name} Coverage Area
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Car Recovery &amp; Towing in <span className="text-orange-500">{area.name}</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-4">
                {area.description}
              </p>
              <p className="text-zinc-400 mb-6">
                Professional 24/7 vehicle recovery, towing, and roadside assistance covering all of {area.name} and surrounding areas. Licensed by the RTA, GPS-tracked fleet, and fully insured.
              </p>
              <div className="bg-zinc-800/50 rounded-xl p-4 mb-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  <div>
                    <span className="text-xl font-bold text-white">{area.responseTime}</span>
                    <p className="text-zinc-500 text-xs">Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <span className="text-xl font-bold text-white">4.9/5</span>
                    <p className="text-zinc-500 text-xs">Customer Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <div>
                    <span className="text-xl font-bold text-white">RTA Licensed</span>
                    <p className="text-zinc-500 text-xs">Fully Insured</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={images.locations[area.imageKey]}
                  alt={`Car Recovery and Towing Service in ${area.name}, Dubai`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-xl font-bold text-white mb-3">
                  Key Landmarks We Cover in {area.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {area.landmarks.map((landmark, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/10">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-orange-500 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-3xl font-bold">{area.responseTime.split("-")[0]}<span className="text-lg">min</span></p>
            <p className="text-white/80 text-sm">Fastest Response</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-white/80 text-sm">Always Available</p>
          </div>
          <div>
            <p className="text-3xl font-bold">AED 80</p>
            <p className="text-white/80 text-sm">Starting Price</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4.9★</p>
            <p className="text-white/80 text-sm">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Services Available in This Area */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Recovery &amp; Roadside Services in {area.name}
            </h2>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              Every service you need when your vehicle breaks down in {area.name}. All services include fast dispatch, professional handling, and transparent pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-orange-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <service.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">{service.name}</h3>
                  <ChevronRight className="w-5 h-5 text-zinc-400 ml-auto group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-zinc-600 mb-4">{service.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-200">
                  <span className="text-orange-500 font-bold">{service.price}</span>
                  <span className="text-sm text-green-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {area.responseTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              View All 15 Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Breakdown Scenarios */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Common Breakdown Situations in {area.name}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We handle these situations in {area.name} every day. Whatever your vehicle emergency, we have the right equipment and experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {breakdownScenarios.map((scenario, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-zinc-200">
                <div className="p-3 bg-orange-100 rounded-xl h-fit">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{scenario.title}</h3>
                  <p className="text-sm text-zinc-600">{scenario.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Having a Breakdown? Call {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Area */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why {area.name} Residents Trust Us
              </h2>
              <p className="text-zinc-600 mb-8">
                We know {area.name} inside out. Our drivers are familiar with every road, shortcut, and parking structure in the area — which means faster arrival and smoother recovery.
              </p>
              <div className="space-y-4">
                {[
                  { title: `${area.responseTime} Response to ${area.name}`, desc: "Our trucks are pre-positioned near your area for the fastest possible arrival." },
                  { title: "No Hidden Charges", desc: "We quote a price before dispatch. What we quote is what you pay — guaranteed." },
                  { title: "All Vehicle Types Covered", desc: "From a Toyota Yaris to a Rolls Royce, motorcycles to 25-tonne trucks." },
                  { title: "Insurance-Approved Service", desc: "We work with all major UAE insurance companies for hassle-free claims." },
                  { title: "GPS-Tracked Fleet", desc: "Track your recovery truck in real-time. Know exactly when help arrives." },
                  { title: "Professional, Trained Drivers", desc: "All drivers are RTA certified with years of Dubai road experience." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: area.responseTime, desc: "Response Time", color: "bg-green-100 text-green-600" },
                { icon: Clock, title: "24/7/365", desc: "Always Open", color: "bg-blue-100 text-blue-600" },
                { icon: Shield, title: "RTA Licensed", desc: "Fully Insured", color: "bg-purple-100 text-purple-600" },
                { icon: Star, title: "4.9/5 Stars", desc: "420+ Reviews", color: "bg-yellow-100 text-yellow-600" },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center">
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xl font-bold text-zinc-900">{item.title}</p>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What {area.name} Customers Say
            </h2>
            <p className="text-zinc-600">
              Real reviews from customers we&apos;ve helped in {area.name}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-zinc-900">{review.name}</span>
                  <span className="text-zinc-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              How Car Recovery Works in {area.name}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              From your call to vehicle delivery — here&apos;s exactly what happens when you need recovery in {area.name}.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Call or WhatsApp", desc: `Call ${siteConfig.phoneFormatted} or send your live location via WhatsApp. A dispatcher answers within seconds.` },
              { step: "2", title: "Instant Dispatch", desc: `We locate the nearest truck to ${area.name} and dispatch it immediately. You get an ETA right away.` },
              { step: "3", title: "Professional Recovery", desc: `Our trained driver arrives, assesses the situation, and safely loads or fixes your vehicle on-site.` },
              { step: "4", title: "Safe Delivery", desc: `Your vehicle is transported to your chosen destination — garage, home, or dealership. Job done!` },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Frequently Asked Questions — {area.name}
            </h2>
            <p className="text-zinc-600">
              Quick answers to common questions about car recovery in {area.name}
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-zinc-200 group">
                <summary className="flex items-center gap-3 p-6 cursor-pointer list-none">
                  <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-semibold text-zinc-900 flex-1">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-zinc-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-0 pl-14">
                  <p className="text-zinc-600">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Also Serving Areas Near {area.name}
            </h2>
            <p className="text-zinc-600">
              We cover all of Dubai. Here are areas close to {area.name} where we also provide fast recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAreas.map((nearbyArea, i) => (
              <Link
                key={i}
                href={`/locations/${nearbyArea.slug}`}
                className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={images.locations[nearbyArea.imageKey]}
                    alt={`Car Recovery ${nearbyArea.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors">{nearbyArea.name}</h3>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {nearbyArea.responseTime}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 flex-shrink-0" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              View All {dubaiAreas.length} Locations
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Area Content for SEO */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto prose prose-zinc prose-orange max-w-none">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            About Car Recovery Services in {area.name}
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            {area.name} is one of the key areas we serve in Dubai with our 24/7 car recovery and towing service. Whether you&apos;re a resident, a commuter passing through, or a tourist visiting the area, vehicle breakdowns can happen at any time — and when they do, you need a recovery service that responds fast and handles your vehicle with care.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Our recovery trucks serving {area.name} are equipped with flatbed carriers, hydraulic winches, jump start equipment, and basic roadside repair tools. We recover all vehicle types including sedans, SUVs, luxury cars, motorcycles, vans, trucks, and heavy commercial vehicles.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            We cover all major landmarks in {area.name} including {area.landmarks.join(", ")}. Our average response time to {area.name} is {area.responseTime}, making us one of the fastest recovery services available in this area.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 mb-3">
            Services We Offer in {area.name}
          </h3>
          <ul className="text-zinc-600 space-y-2 mb-4">
            <li>Car recovery and breakdown assistance</li>
            <li>Flatbed towing for safe vehicle transport</li>
            <li>Accident and collision recovery</li>
            <li>Battery jump start and replacement</li>
            <li>Flat tyre change and repair</li>
            <li>Emergency fuel delivery (petrol &amp; diesel)</li>
            <li>Key lockout assistance</li>
            {areaType === "desert" && <li>Desert and off-road sand recovery with winch</li>}
            {areaType === "industrial" && <li>Heavy vehicle and truck recovery</li>}
            <li>Motorcycle and scooter recovery</li>
            <li>Luxury and exotic car enclosed transport</li>
            <li>Long-distance inter-emirate towing</li>
          </ul>
          <p className="text-zinc-600 leading-relaxed">
            For immediate help in {area.name}, call us at <a href={`tel:${siteConfig.phone}`} className="text-orange-500 font-semibold">{siteConfig.phoneFormatted}</a> or send your live location via <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-green-600 font-semibold">WhatsApp</a>. We accept cash, credit/debit cards, and bank transfers.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stranded in {area.name}? Help is Minutes Away.
          </h2>
          <p className="text-white/90 text-lg mb-4">
            Our trucks are already positioned near {area.landmarks[0]}. Call now for {area.responseTime} response.
          </p>
          <p className="text-white/70 text-sm mb-8">
            Available 24/7 • No hidden charges • All vehicle types • RTA licensed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Share Location on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
