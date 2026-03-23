import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  CheckCircle2,
  ChevronRight,
  Bus,
  Package,
  HardHat,
  Snowflake,
  Fuel,
  Forklift,
  Wind,
  Construction,
  MessageSquare,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Heavy Vehicle Recovery Dubai - Truck, Bus & Commercial Towing",
  description:
    "Heavy vehicle recovery service in Dubai & UAE. We recover trucks, buses, trailers, and commercial vehicles up to 25 tons. Heavy-duty equipment, professional team. From AED 500.",
  keywords: [
    "heavy vehicle recovery Dubai",
    "truck towing UAE",
    "bus recovery service",
    "commercial vehicle towing",
    "trailer recovery Dubai",
    "heavy duty towing",
    "lorry recovery UAE",
  ],
  openGraph: {
    title: "Heavy Vehicle Recovery Dubai - Truck, Bus & Commercial Towing",
    description:
      "Heavy vehicle recovery service for trucks, buses, and commercial vehicles up to 25 tons. From AED 500.",
    url: "https://247uaerecovery.ae/services/heavy-vehicle",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/heavy-vehicle",
  },
};

export default function HeavyVehicleRecoveryPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-500/20 text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Heavy Duty Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                25-Ton Trucks? <span className="text-orange-400">No Problem.</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                When a delivery truck breaks down on Sheikh Zayed Road at rush hour, you need 
                a team that moves fast and handles traffic management. We recover trucks, buses, 
                and trailers while keeping the road flowing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Line
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
                  src={servicePageImages.heavyVehicle.hero}
                  alt="Heavy Vehicle Recovery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Starting From</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">AED 500</div>
                <ul className="space-y-3">
                  {[
                    "Trucks up to 25 tons",
                    "Buses & coaches",
                    "Trailers & semi-trailers",
                    "Traffic management included",
                    "Police coordination",
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

      {/* Vehicle Types */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Heavy Vehicles We Recover
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Trucks & Lorries", weight: "Up to 25 tons", examples: "Delivery trucks, dump trucks, cargo trucks", Icon: Truck },
              { type: "Buses & Coaches", weight: "All sizes", examples: "City buses, tour coaches, school buses", Icon: Bus },
              { type: "Trailers", weight: "All types", examples: "Semi-trailers, flatbed trailers, container trailers", Icon: Package },
              { type: "Construction Vehicles", weight: "Various", examples: "Excavators, loaders, dozers (on trailer)", Icon: HardHat },
              { type: "Refrigerated Trucks", weight: "Up to 20 tons", examples: "Reefer trucks, cold storage transport", Icon: Snowflake },
              { type: "Tankers", weight: "Empty only", examples: "Water tankers, fuel tankers (empty)", Icon: Fuel },
            ].map((vehicle, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="p-3 bg-slate-100 rounded-xl w-fit mb-4"><vehicle.Icon className="w-8 h-8 text-slate-600" /></div>
                <h3 className="font-bold text-zinc-900 mb-1">{vehicle.type}</h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{vehicle.weight}</p>
                <p className="text-sm text-zinc-600">{vehicle.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Heavy-Duty Recovery Equipment
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Heavy Wrecker", desc: "60-ton rotator wrecker for large vehicle recovery", Icon: Forklift },
              { name: "Lowboy Trailer", desc: "Low deck trailer for heavy equipment transport", Icon: Truck },
              { name: "Air Cushion", desc: "Air cushion lifting system for overturned vehicles", Icon: Wind },
              { name: "Traffic Control", desc: "Cones, barriers, and warning lights for safety", Icon: Construction },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="p-3 bg-slate-200 rounded-xl w-fit mx-auto mb-4"><item.Icon className="w-8 h-8 text-slate-700" /></div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.name}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Traffic Management", desc: "We set up safety barriers and coordinate with RTA for highway incidents" },
                  { title: "Police Coordination", desc: "Direct coordination with Dubai Police for accident scenes" },
                  { title: "Cargo Handling", desc: "Assistance with cargo transfer if required (additional charges apply)" },
                  { title: "Scene Cleanup", desc: "Debris clearance and road cleanup after recovery" },
                  { title: "Insurance Documentation", desc: "Complete documentation for insurance claims" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-zinc-200">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Heavy Vehicle Pricing</h3>
              <div className="space-y-4">
                {[
                  { service: "Light Truck (3.5-7.5 tons)", price: "AED 500 - 800" },
                  { service: "Medium Truck (7.5-15 tons)", price: "AED 800 - 1,200" },
                  { service: "Heavy Truck (15-25 tons)", price: "AED 1,200 - 1,800" },
                  { service: "Bus Recovery", price: "AED 800 - 1,500" },
                  { service: "Trailer Recovery", price: "AED 600 - 1,000" },
                  { service: "Overturned Vehicle", price: "Quote on assessment" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-300 last:border-0">
                    <span className="text-zinc-700">{row.service}</span>
                    <span className="font-semibold text-orange-500">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Highway & Industrial Coverage
            </h2>
            <p className="text-zinc-600">
              Strategic positioning for fast response to incidents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sheikh Zayed Road (E11)",
              "Emirates Road (E611)",
              "Dubai-Al Ain Road (E66)",
              "Jebel Ali Industrial Area",
              "Dubai Industrial City",
              "Al Quoz Industrial Area",
              "Ras Al Khor Industrial",
              "Dubai Investment Park",
              "JAFZA (Jebel Ali Free Zone)",
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-3 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-zinc-900 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Heavy Vehicle Breakdown?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            Our heavy recovery team is ready 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20heavy%20vehicle%20recovery"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition-colors"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
