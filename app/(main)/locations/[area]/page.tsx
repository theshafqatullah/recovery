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
} from "lucide-react";
import { dubaiAreas, generateLocationMetadata, siteConfig } from "@/lib/seo";
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
    },
    alternates: {
      canonical: `${siteConfig.url}/locations/${area.slug}`,
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

  const services = [
    { name: "Car Recovery", price: "From AED 150", href: "/services/car-recovery" },
    { name: "Accident Recovery", price: "From AED 200", href: "/services/accident-recovery" },
    { name: "Flatbed Towing", price: "From AED 250", href: "/services/flatbed-towing" },
    { name: "Battery Jump Start", price: "From AED 80", href: "/services/battery-jumpstart" },
    { name: "Flat Tyre Service", price: "From AED 80", href: "/services/flat-tyre" },
    { name: "Fuel Delivery", price: "From AED 100", href: "/services/fuel-delivery" },
  ];

  // Get nearby areas
  const nearbyAreas = dubaiAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 4);

  // JSON-LD structured data for this location
  const locationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: `24/7 UAE Recovery - ${area.name}`,
        description: area.description,
        url: `${siteConfig.url}/locations/${area.slug}`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: area.name,
          addressRegion: "Dubai",
          addressCountry: "AE",
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
          { "@type": "ListItem", position: 3, name: area.name, item: `${siteConfig.url}/locations/${area.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <section className="pt-24 pb-4 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/locations" className="hover:text-orange-500">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900">{area.name}</span>
          </div>
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
                  {area.name} Coverage
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Car Recovery in <span className="text-orange-500">{area.name}</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-4">
                {area.description}
              </p>
              <div className="bg-zinc-800/50 rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  <span className="text-xl font-bold text-white">
                    {area.responseTime} Average Response Time
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Our nearest truck to {area.name} can reach you fast
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={images.locations[area.imageKey]}
                  alt={`Car Recovery Service in ${area.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/60" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Key Landmarks We Cover
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.landmarks.map((landmark, i) => (
                    <span key={i} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Services Available in {area.name}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              All our recovery and roadside assistance services are available in {area.name}, 
              with fast response times to get you back on the road.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-900">{service.name}</h3>
                  <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">{service.price}</span>
                  <span className="text-sm text-green-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {area.responseTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Area */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Why Choose Us for {area.name} Recovery?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: `${area.responseTime} Response`,
                desc: `Average arrival time in ${area.name}`,
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "We never close, including holidays",
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "RTA compliant with full coverage",
              },
              {
                icon: Star,
                title: "4.9/5 Rating",
                desc: "Trusted by thousands in Dubai",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="inline-flex p-3 bg-orange-100 rounded-xl mb-4">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              We Also Cover Nearby Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAreas.map((nearbyArea, i) => (
              <Link
                key={i}
                href={`/locations/${nearbyArea.slug}`}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-zinc-900">{nearbyArea.name}</h3>
                </div>
                <div className="text-sm text-green-600 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {nearbyArea.responseTime}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              View All Locations
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stranded in {area.name}? We&apos;re On Our Way.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our trucks are already positioned near {area.landmarks[0]}. 
            Call now for {area.responseTime} response time.
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
