import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Car,
  Package,
  Wrench,
  Award,
  MessageSquare,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Long Distance Towing UAE - Inter-Emirate Vehicle Transport",
  description:
    "Long distance towing and vehicle transport across UAE. Dubai to Abu Dhabi, Sharjah, Al Ain, RAK & more. GPS-tracked, insured transport. Scheduled pickups. From AED 400.",
  keywords: [
    "long distance towing UAE",
    "Dubai to Abu Dhabi towing",
    "inter-emirate vehicle transport",
    "car transport Dubai to Sharjah",
    "vehicle relocation UAE",
    "cross-emirate towing",
    "nationwide vehicle transport",
  ],
  openGraph: {
    title: "Long Distance Towing UAE - Inter-Emirate Vehicle Transport",
    description:
      "Long distance towing across UAE emirates. GPS-tracked, insured transport. Scheduled pickups. From AED 400.",
    url: "https://247uaerecovery.ae/services/long-distance",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/long-distance",
  },
};

export default function LongDistanceTowingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                UAE-Wide Coverage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dubai to Abu Dhabi? <span className="text-blue-400">We&apos;ll Take Your Car.</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                Moving to a new emirate? Bought a car from another city? Need to get your 
                vehicle to a specialist mechanic in Al Ain? Our GPS-tracked flatbeds deliver 
                door-to-door, anywhere in the UAE.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get Quote
                </a>
                <a
                  href="https://wa.me/971504645696"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.longDistance.hero}
                  alt="Long Distance Towing Service in UAE"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Starting From</h3>
                <div className="text-4xl font-bold text-blue-400 mb-4">AED 400</div>
                <ul className="space-y-3">
                  {[
                    "All UAE emirates covered",
                    "GPS real-time tracking",
                    "Fully insured transport",
                    "Scheduled pickups",
                    "Door-to-door service",
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

      {/* Routes & Pricing */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Popular Routes & Pricing
            </h2>
            <p className="text-zinc-600">
              Transparent pricing for inter-emirate transport
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { route: "Dubai → Abu Dhabi", distance: "~140 km", price: "AED 400 - 550", time: "~1.5 hrs" },
              { route: "Dubai → Al Ain", distance: "~160 km", price: "AED 450 - 600", time: "~1.5 hrs" },
              { route: "Dubai → Sharjah", distance: "~30 km", price: "AED 200 - 300", time: "~45 min" },
              { route: "Dubai → Ajman", distance: "~45 km", price: "AED 250 - 350", time: "~1 hr" },
              { route: "Dubai → Ras Al Khaimah", distance: "~100 km", price: "AED 350 - 500", time: "~1.5 hrs" },
              { route: "Dubai → Fujairah", distance: "~120 km", price: "AED 400 - 550", time: "~2 hrs" },
              { route: "Dubai → Umm Al Quwain", distance: "~60 km", price: "AED 300 - 400", time: "~1 hr" },
              { route: "Abu Dhabi → Al Ain", distance: "~150 km", price: "AED 400 - 550", time: "~1.5 hrs" },
              { route: "Custom Route", distance: "Any destination", price: "Quote on request", time: "Varies" },
            ].map((route, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200 hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-2 text-blue-500 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">{route.route}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-zinc-500">Distance</p>
                    <p className="font-medium text-zinc-900">{route.distance}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">Est. Time</p>
                    <p className="font-medium text-zinc-900">{route.time}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <p className="text-zinc-500 text-sm">Price</p>
                  <p className="text-xl font-bold text-blue-500">{route.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-zinc-500 mt-8">
            * Prices are for standard sedans/SUVs. Luxury vehicles, heavy vehicles, and oversized loads may have different rates.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              When to Use Long Distance Towing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vehicle Purchase", desc: "Bought a car from another emirate? We'll deliver it to your doorstep.", Icon: Car },
              { title: "Relocation", desc: "Moving to a new city? Transport your vehicles safely.", Icon: Package },
              { title: "Service/Repair", desc: "Need authorized service in another emirate? We'll take your car there.", Icon: Wrench },
              { title: "Car Shows", desc: "Transporting your vehicle to events or exhibitions across UAE.", Icon: Award },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-4"><item.Icon className="w-8 h-8 text-blue-500" /></div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Why Choose Our Long Distance Service?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "GPS Real-Time Tracking", desc: "Track your vehicle's journey in real-time via WhatsApp updates" },
                  { title: "Fully Insured", desc: "Complete coverage for your vehicle during the entire transport" },
                  { title: "Scheduled Pickups", desc: "Book in advance for preferred date and time" },
                  { title: "Door-to-Door", desc: "We pick up and deliver exactly where you need" },
                  { title: "Flatbed Transport", desc: "Zero-drag flatbed trucks for safe long-distance transport" },
                  { title: "Regular Updates", desc: "Photo updates at pickup, during transit, and at delivery" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-zinc-200">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Get a Quote", desc: "Call or WhatsApp us with pickup/delivery locations" },
                  { step: "2", title: "Schedule Pickup", desc: "Choose your preferred date and time" },
                  { step: "3", title: "We Collect", desc: "Our truck arrives and safely loads your vehicle" },
                  { step: "4", title: "Track Transit", desc: "Follow your vehicle with GPS updates" },
                  { step: "5", title: "Delivery", desc: "Vehicle delivered safely to destination" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Note */}
      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-zinc-900 mb-2">
            Need Emergency Long Distance Recovery?
          </h3>
          <p className="text-zinc-600 mb-4">
            If your vehicle has broken down in another emirate and needs immediate recovery, 
            we offer emergency long-distance services with faster response times.
          </p>
          <a
            href="tel:+971504645696"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" />
            Emergency Line
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need to Transport Your Vehicle?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a quote for safe, insured transport across UAE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20a%20quote%20for%20long%20distance%20vehicle%20transport"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Get Quote on WhatsApp
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
    </div>
  );
}
