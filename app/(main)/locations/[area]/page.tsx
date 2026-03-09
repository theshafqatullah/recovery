import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Truck,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Star,
  Shield,
  Zap,
  MessageCircle,
  Mail,
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-orange-500 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900">
                24/7 UAE Recovery
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-zinc-600 hover:text-orange-500">Home</Link>
              <Link href="/services" className="text-zinc-600 hover:text-orange-500">Services</Link>
              <Link href="/locations" className="text-orange-500 font-medium">Locations</Link>
              <Link href="/about" className="text-zinc-600 hover:text-orange-500">About</Link>
              <Link href="/contact" className="text-zinc-600 hover:text-orange-500">Contact</Link>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
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
      <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
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
                Stranded near {area.landmarks[0]} or anywhere in {area.name}? Our recovery 
                trucks are strategically positioned across Dubai for rapid response.
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
                  src={images.locations.dubai}
                  alt={`Car Recovery Service in ${area.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">24/7 UAE Recovery</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Professional car recovery and towing services in {area.name} and all of Dubai.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-400 hover:text-orange-500">Home</Link>
                <Link href="/services" className="block text-zinc-400 hover:text-orange-500">Services</Link>
                <Link href="/locations" className="block text-zinc-400 hover:text-orange-500">Locations</Link>
                <Link href="/contact" className="block text-zinc-400 hover:text-orange-500">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{area.name} Services</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Car Recovery</p>
                <p>Flatbed Towing</p>
                <p>Battery Jump Start</p>
                <p>Flat Tyre Service</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {siteConfig.phoneFormatted}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {siteConfig.email}</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
            © 2026 24/7 UAE Recovery Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
