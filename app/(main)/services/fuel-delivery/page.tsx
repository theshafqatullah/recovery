import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Fuel,
  CheckCircle2,
  ChevronRight,
  Circle,
  Car,
  MapPin,
  Smartphone,
  Wrench,
  Mountain,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fuel Delivery Dubai - Emergency Petrol & Diesel Service",
  description:
    "Ran out of fuel in Dubai? We deliver petrol (Special 95, Super 98) and diesel to your location 24/7. Safe jerry can delivery. From AED 100 including fuel cost. Call now!",
  keywords: [
    "fuel delivery Dubai",
    "emergency petrol delivery",
    "diesel delivery UAE",
    "ran out of fuel Dubai",
    "24/7 fuel service",
    "roadside fuel delivery",
    "petrol delivery service",
  ],
  openGraph: {
    title: "Fuel Delivery Dubai - Emergency Petrol & Diesel Service",
    description:
      "Ran out of fuel in Dubai? We deliver petrol and diesel to your location 24/7. Safe jerry can delivery. From AED 100.",
    url: "https://247uaerecovery.ae/services/fuel-delivery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/fuel-delivery",
  },
};

export default function FuelDeliveryPage() {
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
            <span className="text-zinc-900">Fuel Delivery</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <Fuel className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">
                  Emergency Fuel Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Watched the Fuel Light? <span className="text-orange-500">We&apos;ve All Been There.</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                That empty tank feeling - we eliminate it fast. Call us with your 
                location, and we&apos;ll bring 10 liters of petrol or diesel. Enough to 
                reach the nearest ADNOC or ENOC station.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971569773000"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Order Fuel
                </a>
                <a
                  href="https://wa.me/971569773000"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-white/20"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.fuelDelivery.hero}
                  alt="Fuel Delivery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">From AED 100</div>
                <p className="text-zinc-300">Emergency fuel delivery service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Petrol or Diesel - Delivered Fast
            </h2>
            <p className="text-zinc-600">
              We carry UAE official fuel grades at standard station prices, plus delivery fee.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border-2 border-red-200">
              <div className="p-3 bg-red-200 rounded-xl w-fit mx-auto mb-4"><Circle className="w-8 h-8 text-red-500 fill-red-500" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Super 98</h3>
              <p className="text-zinc-600 text-sm mb-4">Premium petrol</p>
              <p className="text-2xl font-bold text-red-500">AED 3.15/L</p>
              <p className="text-xs text-zinc-500 mt-2">+ Delivery fee</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border-2 border-green-200">
              <div className="p-3 bg-green-200 rounded-xl w-fit mx-auto mb-4"><Circle className="w-8 h-8 text-green-500 fill-green-500" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Special 95</h3>
              <p className="text-zinc-600 text-sm mb-4">Regular petrol</p>
              <p className="text-2xl font-bold text-green-500">AED 3.03/L</p>
              <p className="text-xs text-zinc-500 mt-2">+ Delivery fee</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border-2 border-yellow-200">
              <div className="p-3 bg-yellow-200 rounded-xl w-fit mx-auto mb-4"><Circle className="w-8 h-8 text-yellow-500 fill-yellow-500" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Diesel</h3>
              <p className="text-zinc-600 text-sm mb-4">For diesel vehicles</p>
              <p className="text-2xl font-bold text-yellow-600">AED 3.23/L</p>
              <p className="text-xs text-zinc-500 mt-2">+ Delivery fee</p>
            </div>
          </div>
          <p className="text-center text-sm text-zinc-500 mt-8">
            * Fuel prices are based on official UAE rates and may vary. Delivery fee starts from AED 100.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            How Fuel Delivery Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", Icon: Phone, title: "Call or WhatsApp", desc: "Tell us your location and fuel type needed" },
              { step: "2", Icon: Truck, title: "We Dispatch", desc: "Our fuel van is sent to your location" },
              { step: "3", Icon: Fuel, title: "Fuel Delivered", desc: "We fill your tank safely and professionally" },
              { step: "4", Icon: Car, title: "Drive Away", desc: "Continue your journey - no towing needed!" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <div className="p-3 bg-green-100 rounded-xl w-fit mx-auto mb-3"><item.Icon className="w-6 h-6 text-green-600" /></div>
                <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Service */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why Choose Our Fuel Delivery?
              </h2>
              <div className="space-y-4">
                {[
                  "Faster than walking to a station and back",
                  "No need to leave your vehicle unattended",
                  "Safe and professional fuel handling",
                  "Fair pricing at official UAE rates",
                  "Available 24/7 anywhere in Dubai",
                  "We bring enough fuel to get you to a station",
                  "No membership or subscription required",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">
                Typical Delivery Amounts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-zinc-600">Emergency (5L)</span>
                  <span className="font-semibold text-zinc-900">Get to nearest station</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-zinc-600">Standard (10L)</span>
                  <span className="font-semibold text-zinc-900">~100km range</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-zinc-600">Full Service (20L)</span>
                  <span className="font-semibold text-zinc-900">~200km range</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
            Tips to Avoid Running Out of Fuel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Fuel, tip: "Refuel when your tank reaches 1/4 full" },
              { Icon: MapPin, tip: "Know where fuel stations are on your route" },
              { Icon: Car, tip: "Check your fuel gauge regularly" },
              { Icon: Smartphone, tip: "Use navigation apps that show nearby stations" },
              { Icon: Wrench, tip: "Get your fuel gauge checked if it seems inaccurate" },
              { Icon: Mountain, tip: "Fill up before long desert or highway drives" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-200"
              >
                <div className="p-2 bg-green-100 rounded-lg"><item.Icon className="w-5 h-5 text-green-600" /></div>
                <span className="text-zinc-700">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Out of Fuel? Don&apos;t Panic!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us now and we&apos;ll bring fuel to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-white text-green-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000?text=Hi%2C%20I%27ve%20run%20out%20of%20fuel%20and%20need%20delivery"
              className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              <Fuel className="w-5 h-5" /> WhatsApp Location
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
