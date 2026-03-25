import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Package,
  CheckCircle2,
  ChevronRight,
  Shield,
  MapPin,
  Mail,
  HardHat,
  Container,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cargo & Equipment Transport Dubai - Heavy Machinery Moving | AED 600",
  description:
    "Professional cargo and equipment transport in Dubai & UAE. Move construction equipment, containers, machinery, oversized loads. Licensed operators. From AED 600.",
  keywords: [
    "cargo transport Dubai",
    "equipment transport UAE",
    "heavy machinery moving Dubai",
    "construction equipment transport",
    "container transport UAE",
    "oversized load transport",
    "machinery moving service",
    "industrial transport Dubai",
  ],
  openGraph: {
    title: "Cargo & Equipment Transport Dubai - Heavy Machinery Moving",
    description:
      "Professional cargo and equipment transport. Construction machinery, containers, oversized loads. From AED 600!",
    url: "https://247uaerecovery.ae/services/cargo-transport",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/cargo-transport",
  },
};

export default function CargoTransportPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange-500">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900">Cargo & Equipment Transport</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
                <Package className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 text-sm font-medium">
                  Heavy Equipment & Cargo
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Heavy Equipment? <span className="text-orange-500">We Move It</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                From construction machinery to shipping containers, our heavy-duty flatbed 
                fleet handles oversized loads across the UAE. Licensed operators, proper 
                permits, and safe transport guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971569773000"
                  className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get Quote
                </a>
                <a
                  href="https://wa.me/971569773000"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.cargoTransport.hero}
                  alt="Cargo & Equipment Transport in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">From AED 600</div>
                <p className="text-zinc-300">Heavy equipment transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">40 ton</div>
              <p className="text-white/70 text-sm">Max Load Capacity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">All UAE</div>
              <p className="text-white/70 text-sm">Coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Licensed</div>
              <p className="text-white/70 text-sm">Operators</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">AED 600</div>
              <p className="text-white/70 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Transport */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What We Transport
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Our heavy-duty fleet handles a wide range of cargo and equipment
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                title: "Construction Equipment",
                desc: "Excavators, bulldozers, cranes, and all types of construction machinery",
              },
              {
                icon: Container,
                title: "Shipping Containers",
                desc: "20ft and 40ft container transport from ports to destinations",
              },
              {
                icon: Scale,
                title: "Oversized Loads",
                desc: "Extra-wide and extra-long loads with proper escort arrangements",
              },
              {
                icon: Truck,
                title: "Industrial Machinery",
                desc: "Factory equipment, generators, and industrial machinery",
              },
              {
                icon: Package,
                title: "Building Materials",
                desc: "Prefab structures, steel beams, and construction materials",
              },
              {
                icon: Shield,
                title: "Secured Transport",
                desc: "Proper strapping, padding, and securing for all cargo types",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center hover:border-indigo-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Construction Companies",
              "Oil & Gas Industry",
              "Manufacturing Plants",
              "Logistics Companies",
              "Event Management",
              "Real Estate Developers",
              "Port & Shipping",
              "Infrastructure Projects",
            ].map((industry, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-zinc-200">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Why Choose Our Cargo Transport
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Licensed & Insured", desc: "Fully licensed operators with comprehensive cargo insurance" },
              { title: "Permit Handling", desc: "We arrange all necessary permits for oversized loads" },
              { title: "Traffic Management", desc: "Escort vehicles and traffic coordination for large moves" },
              { title: "Route Planning", desc: "Optimal route selection considering load dimensions" },
              { title: "Loading/Unloading", desc: "Crane and forklift services available at extra cost" },
              { title: "24/7 Availability", desc: "Night moves available when traffic is lighter" },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Heavy Equipment Moved?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a quote for cargo and equipment transport across UAE. We handle the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-white text-indigo-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
