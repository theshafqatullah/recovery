import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  ChevronRight,
  Bike,
  Car,
  Mountain,
  Search,
  MapPin,
  Lock,
  MessageSquare,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Motorcycle Recovery Dubai - 24/7 Bike Towing & Transport",
  description:
    "Professional motorcycle recovery service in Dubai. We handle all bike types - sports bikes, cruisers, scooters. Proper wheel chocks & secure strapping. From AED 120. Call now!",
  keywords: [
    "motorcycle recovery Dubai",
    "bike towing UAE",
    "sports bike transport",
    "motorcycle breakdown service",
    "scooter recovery Dubai",
    "superbike towing",
    "two wheeler recovery",
  ],
  openGraph: {
    title: "Motorcycle Recovery Dubai - 24/7 Bike Towing & Transport",
    description:
      "Professional motorcycle recovery service in Dubai. All bike types handled with care. From AED 120.",
    url: "https://247uaerecovery.ae/services/motorcycle-recovery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/motorcycle-recovery",
  },
};

export default function MotorcycleRecoveryPage() {
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
              <Link href="/services" className="text-orange-500 font-medium">Services</Link>
              <Link href="/locations" className="text-zinc-600 hover:text-orange-500">Locations</Link>
              <Link href="/contact" className="text-zinc-600 hover:text-orange-500">Contact</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Bike className="w-4 h-4" />
                Specialized Recovery
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bikes Get Special <span className="text-purple-400">Treatment</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                Your motorcycle isn&apos;t just another vehicle - it&apos;s your passion. 
                We use proper wheel chocks, soft straps, and careful loading techniques 
                that protect your paint, chrome, and fairings.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/971504645696"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.motorcycleRecovery.hero}
                  alt="Motorcycle Recovery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Starting From</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">AED 120</div>
                <ul className="space-y-3">
                  {[
                    "All motorcycle types",
                    "Proper wheel chocks",
                    "Secure tie-down straps",
                    "Careful loading & unloading",
                    "Track day transport",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Types */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Motorcycles We Recover
            </h2>
            <p className="text-zinc-600">
              All types of two-wheelers, handled with specialized equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Sports Bikes", examples: "Ducati, Kawasaki Ninja, Yamaha R1, Honda CBR", Icon: Bike },
              { type: "Cruisers", examples: "Harley-Davidson, Indian, Honda Shadow, Yamaha V-Star", Icon: Bike },
              { type: "Adventure Bikes", examples: "BMW GS, KTM Adventure, Honda Africa Twin", Icon: Mountain },
              { type: "Scooters & Mopeds", examples: "Vespa, Honda PCX, Yamaha NMAX, Electric scooters", Icon: Bike },
            ].map((category, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="p-3 bg-purple-100 rounded-xl w-fit mb-4"><category.Icon className="w-8 h-8 text-purple-500" /></div>
                <h3 className="font-bold text-zinc-900 mb-2">{category.type}</h3>
                <p className="text-sm text-zinc-600">{category.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Our Motorcycle Recovery Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "We assess the bike condition and best loading approach", Icon: Search },
              { step: "2", title: "Positioning", desc: "Carefully position the wheel chock for secure fitting", Icon: MapPin },
              { step: "3", title: "Securing", desc: "Multiple tie-down straps to prevent any movement", Icon: Lock },
              { step: "4", title: "Transport", desc: "Safe transport with constant monitoring", Icon: Truck },
            ].map((item, i) => (
              <div key={i} className="relative bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div className="p-3 bg-purple-100 rounded-xl w-fit mb-4"><item.Icon className="w-6 h-6 text-purple-500" /></div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Motorcycle Recovery Pricing
            </h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-500 text-white">
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-left py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Scooter/Moped Recovery (within Dubai)", price: "AED 120 - 180" },
                  { service: "Standard Motorcycle Recovery", price: "AED 150 - 250" },
                  { service: "Sports/Heavy Bike Recovery", price: "AED 200 - 350" },
                  { service: "Track Day Transport (scheduled)", price: "AED 250 - 400" },
                  { service: "Inter-Emirate Motorcycle Transport", price: "AED 350 - 600" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-100">
                    <td className="py-4 px-6 text-zinc-700">{row.service}</td>
                    <td className="py-4 px-6 text-purple-500 font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bike Broken Down?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We&apos;ll recover your motorcycle safely. Call us now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20motorcycle%20recovery%20assistance"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4" />
          </Link>
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
                Professional vehicle recovery services in Dubai and UAE.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-400 hover:text-orange-500">Home</Link>
                <Link href="/services" className="block text-zinc-400 hover:text-orange-500">Services</Link>
                <Link href="/pricing" className="block text-zinc-400 hover:text-orange-500">Pricing</Link>
                <Link href="/contact" className="block text-zinc-400 hover:text-orange-500">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="/services/car-recovery" className="block text-zinc-400 hover:text-orange-500">Car Recovery</Link>
                <Link href="/services/flatbed-towing" className="block text-zinc-400 hover:text-orange-500">Flatbed Towing</Link>
                <Link href="/services/motorcycle-recovery" className="block text-zinc-400 hover:text-orange-500">Motorcycle Recovery</Link>
                <Link href="/services/battery-jumpstart" className="block text-zinc-400 hover:text-orange-500">Battery Jump Start</Link>
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
