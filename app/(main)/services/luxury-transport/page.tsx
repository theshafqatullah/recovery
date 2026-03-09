import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Gem,
  CheckCircle2,
  Clock,
  ChevronRight,
  Car,
  Shield,
  Thermometer,
  Award,
  MapPin,
  Mail,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Car Transport Dubai - Enclosed Vehicle Transport | AED 400",
  description:
    "Premium enclosed transport for luxury, exotic & sports cars in Dubai. Climate-controlled, white-glove handling for Ferrari, Lamborghini, Porsche. Dealer-to-dealer service. From AED 400.",
  keywords: [
    "luxury car transport Dubai",
    "enclosed car transport UAE",
    "exotic car shipping Dubai",
    "Ferrari transport Dubai",
    "Lamborghini transport UAE",
    "sports car transport",
    "premium vehicle transport",
    "supercar transport Dubai",
    "dealer to dealer transport",
    "classic car transport UAE",
  ],
  openGraph: {
    title: "Luxury Car Transport Dubai - Enclosed Vehicle Transport",
    description:
      "Premium enclosed transport for luxury & exotic cars. Climate-controlled, white-glove handling. From AED 400!",
    url: "https://247uaerecovery.ae/services/luxury-transport",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/luxury-transport",
  },
};

export default function LuxuryTransportPage() {
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
              <Link href="/" className="text-zinc-600 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/services" className="text-orange-500 font-medium">Services</Link>
              <Link href="/locations" className="text-zinc-600 hover:text-orange-500 transition-colors">Locations</Link>
              <Link href="/about" className="text-zinc-600 hover:text-orange-500 transition-colors">About</Link>
              <Link href="/contact" className="text-zinc-600 hover:text-orange-500 transition-colors">Contact</Link>
            </div>
            <a
              href="tel:+971504645696"
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
            <Link href="/services" className="hover:text-orange-500">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900">Luxury Car Transport</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Gem className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-medium">
                  Premium White-Glove Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Exotic Car Deserves <span className="text-orange-500">Exotic Care</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Ferrari, Lamborghini, Rolls-Royce, Bentley - we transport the world&apos;s most 
                exclusive vehicles with the care they deserve. Enclosed, climate-controlled 
                transport with white-glove handling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get Quote
                </a>
                <a
                  href="https://wa.me/971504645696"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.luxuryTransport.hero}
                  alt="Luxury Car Transport in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">From AED 400</div>
                <p className="text-zinc-300">Enclosed luxury car transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <p className="text-white/70 text-sm">Enclosed Transport</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <p className="text-white/70 text-sm">Supercars Moved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <p className="text-white/70 text-sm">Damage Claims</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">AED 2M</div>
              <p className="text-white/70 text-sm">Insurance Cover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              The Premium Transport Experience
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Every detail matters when transporting high-value vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully Enclosed Transport",
                desc: "Your vehicle is completely protected from weather, debris, and prying eyes during transport",
              },
              {
                icon: Thermometer,
                title: "Climate Controlled",
                desc: "Temperature-regulated environment protects sensitive interiors and exteriors",
              },
              {
                icon: Award,
                title: "White-Glove Handling",
                desc: "Soft-touch loading, hydraulic lift gates, and wheel straps that don't touch paint",
              },
              {
                icon: Car,
                title: "Low-Clearance Capable",
                desc: "Specialized equipment for supercars with minimal ground clearance",
              },
              {
                icon: Clock,
                title: "Scheduled Transport",
                desc: "Book in advance for car shows, auctions, or dealer deliveries",
              },
              {
                icon: Star,
                title: "Insurance Included",
                desc: "Comprehensive coverage up to AED 2 million for peace of mind",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center hover:border-purple-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles We Transport */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Vehicles We Transport
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Ferrari",
              "Lamborghini",
              "Rolls-Royce",
              "Bentley",
              "Porsche",
              "McLaren",
              "Aston Martin",
              "Bugatti",
              "Mercedes AMG",
              "BMW M Series",
              "Audi RS",
              "Classic Cars",
            ].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-zinc-200">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              When to Use Our Luxury Transport
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Dealer to Dealer Transport", desc: "Move inventory between showrooms safely" },
              { title: "Auction Deliveries", desc: "Transport vehicles to/from auction houses" },
              { title: "Car Show Transport", desc: "Display-ready delivery to events & exhibitions" },
              { title: "Purchase Deliveries", desc: "Deliver your new purchase to your home" },
              { title: "Service Center Transfers", desc: "Move vehicles for specialist service work" },
              { title: "Inter-Emirate Relocation", desc: "Move your collection when you relocate" },
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Supercar, Our White-Glove Care
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a quote for enclosed luxury vehicle transport across UAE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp for Quote
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
                Premium car recovery and transport services in Dubai and UAE.
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
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Luxury Car Transport</p>
                <p>Flatbed Towing</p>
                <p>Car Recovery</p>
                <p>Long Distance Towing</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +971 50 464 5696</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@247uaerecovery.ae</p>
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
