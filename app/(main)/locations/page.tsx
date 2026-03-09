import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { Truck, Phone, MapPin, Clock, CheckCircle2, ChevronRight, Globe, Mountain, Zap, AlertTriangle, Car, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Recovery Locations Dubai | Towing All Areas UAE | 15-30 Min",
  description:
    "Fast car recovery across Dubai: Downtown, Marina, Palm Jumeirah, Business Bay, JBR, Al Barsha. Plus Abu Dhabi, Sharjah, Ajman, RAK. 15-30 min response. GPS tracked fleet.",
  keywords: [
    "car recovery Dubai areas",
    "towing service locations UAE",
    "Dubai Marina car recovery",
    "Downtown Dubai towing",
    "Sheikh Zayed Road car recovery",
    "Abu Dhabi car recovery",
    "Sharjah towing service",
    "UAE vehicle recovery",
    "Palm Jumeirah car recovery",
    "Business Bay towing",
    "JBR car recovery",
    "Al Barsha breakdown recovery",
    "Deira towing service",
    "recovery service near me",
    "towing all emirates UAE",
    "Ajman car recovery",
    "Ras Al Khaimah towing",
    "Fujairah vehicle recovery",
  ],
  openGraph: {
    title: "Service Locations - Car Recovery Coverage Areas in Dubai & UAE",
    description:
      "We cover all Dubai areas and UAE emirates. 15-30 min response time for car recovery and towing services.",
    url: "https://247uaerecovery.ae/locations",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/locations",
  },
};

const dubaiAreas = [
  {
    name: "Downtown Dubai",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain"],
    responseTime: "15-20 min",
  },
  {
    name: "Dubai Marina",
    landmarks: ["Marina Walk", "JBR Beach", "Marina Mall"],
    responseTime: "15-25 min",
  },
  {
    name: "Jumeirah",
    landmarks: ["Jumeirah Beach", "City Walk", "La Mer"],
    responseTime: "15-20 min",
  },
  {
    name: "Al Barsha",
    landmarks: ["Mall of Emirates", "Barsha Heights", "Al Barsha Park"],
    responseTime: "10-15 min",
  },
  {
    name: "Deira",
    landmarks: ["Gold Souk", "Deira City Centre", "Clock Tower"],
    responseTime: "20-25 min",
  },
  {
    name: "Business Bay",
    landmarks: ["Bay Square", "Executive Towers", "Canal Walk"],
    responseTime: "15-20 min",
  },
  {
    name: "Palm Jumeirah",
    landmarks: ["Atlantis", "The Pointe", "Nakheel Mall"],
    responseTime: "20-30 min",
  },
  {
    name: "JBR",
    landmarks: ["The Walk", "Bluewaters Island", "Ain Dubai"],
    responseTime: "15-25 min",
  },
  {
    name: "Al Quoz",
    landmarks: ["Alserkal Avenue", "Industrial Area", "Al Quoz Mall"],
    responseTime: "10-15 min",
  },
  {
    name: "Sheikh Zayed Road",
    landmarks: ["Emirates Towers", "DIFC", "World Trade Centre"],
    responseTime: "15-20 min",
  },
  {
    name: "Bur Dubai",
    landmarks: ["Meena Bazaar", "Dubai Frame", "Museum"],
    responseTime: "15-20 min",
  },
  {
    name: "Jebel Ali",
    landmarks: ["Free Zone", "Ibn Battuta Mall", "Dragon Mart"],
    responseTime: "20-30 min",
  },
];

const otherEmirates = [
  {
    name: "Sharjah",
    areas: ["Al Nahda", "Al Majaz", "Industrial Area", "University City"],
    responseTime: "25-40 min",
  },
  {
    name: "Ajman",
    areas: ["Al Nuaimiya", "Al Rashidiya", "Corniche", "City Centre"],
    responseTime: "30-45 min",
  },
  {
    name: "Abu Dhabi",
    areas: ["Khalifa City", "Yas Island", "Mussafah", "Al Reem Island"],
    responseTime: "60-90 min",
  },
  {
    name: "Ras Al Khaimah",
    areas: ["Al Nakheel", "Al Hamra", "Al Dhait", "RAK Free Zone"],
    responseTime: "60-90 min",
  },
  {
    name: "Fujairah",
    areas: ["Fujairah City", "Dibba", "Masafi", "Al Bidyah"],
    responseTime: "90-120 min",
  },
  {
    name: "Umm Al Quwain",
    areas: ["UAQ Marina", "Old Town", "Industrial Area", "Dreamland"],
    responseTime: "45-60 min",
  },
  {
    name: "Al Ain",
    areas: ["Central District", "Al Jimi", "Al Ain Mall Area", "Industrial"],
    responseTime: "90-120 min",
  },
];

const highways = [
  "Sheikh Zayed Road (E11)",
  "Emirates Road (E311)",
  "Al Khail Road (E44)",
  "Mohammed Bin Zayed Road (E311)",
  "Dubai-Al Ain Road (E66)",
  "Dubai-Hatta Road (E44)",
  "Jumeirah Beach Road",
  "Dubai Bypass Road",
];

export default function LocationsPage() {
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
              <Link
                href="/"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link href="/locations" className="text-orange-500 font-medium">
                Locations
              </Link>
              <Link
                href="/about"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.hero.locations}
            alt="Vehicle Recovery Service Locations in Dubai & UAE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Help Within <span className="text-orange-500">30 Minutes</span>, Anywhere in UAE
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Downtown Dubai or deep in the Al Qudra desert - our GPS-tracked fleet knows exactly where you are. Just share your location.
          </p>
        </div>
      </section>

      {/* Dubai Areas */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Every Dubai Neighborhood - Covered
            </h2>
            <p className="text-zinc-600">
              From Marina to Mirdif, Palm Jumeirah to Al Quoz - our trucks are already nearby.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dubaiAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-zinc-200 hover:border-orange-500 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">
                      {area.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-green-600 mb-2">
                      <Clock className="w-3 h-3" />
                      {area.responseTime}
                    </div>
                    <p className="text-xs text-zinc-500">
                      {area.landmarks.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highways Coverage */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Stranded on the Highway? We Handle That Daily.
              </h2>
              <p className="text-zinc-600 mb-8">
                Highway breakdowns are stressful and dangerous. Our trucks carry warning triangles, 
                reflective cones, and high-visibility gear to keep you safe while we load your vehicle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highways.map((highway, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-zinc-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{highway}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-[400px]">
                <Image
                  src={images.locations.highway}
                  alt="Highway Recovery Service UAE"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Highway Breakdown?
                </h3>
                <p className="text-zinc-300 mb-6">
                  We provide fast highway recovery service with proper safety measures
                </p>
                <a
                  href="tel:+971504645696"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Emirates */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Beyond Dubai: All 7 Emirates Served
            </h2>
            <p className="text-zinc-600">
              Need recovery in Abu Dhabi? Sharjah? Even Fujairah? We&apos;ll dispatch from our nearest hub.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherEmirates.map((emirate, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-zinc-200"
              >
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {emirate.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-green-600 mb-4">
                  <Clock className="w-4 h-4" />
                  Response: {emirate.responseTime}
                </div>
                <div className="space-y-2">
                  {emirate.areas.map((area, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-zinc-600"
                    >
                      <MapPin className="w-3 h-3 text-orange-500" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-3xl p-12 text-center border border-zinc-300">
            <div className="p-4 bg-orange-100 rounded-xl w-fit mx-auto mb-4">
              <Globe className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              Complete UAE Coverage
            </h3>
            <p className="text-zinc-600 max-w-lg mx-auto mb-6">
              We cover all 7 Emirates with GPS-tracked fleet. From Dubai to Abu Dhabi, 
              Sharjah to Fujairah - no location is too far!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map(
                (city, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                  >
                    {city}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Desert & Off-Road Areas */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Mountain className="w-4 h-4" /> Specialty Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Desert & Off-Road Recovery
              </h2>
              <p className="text-zinc-600 mb-6">
                Stuck in the desert? Our specialized off-road recovery units are equipped 
                to rescue vehicles from sand dunes, wadis, and remote desert areas.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Al Qudra Desert", "Lahbab Dunes", "Hatta Mountains", "Liwa Desert", "Big Red Dunes", "Fossil Rock"].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-700">
                    <Mountain className="w-4 h-4 text-amber-500" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/off-road-recovery"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Learn About Desert Recovery
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 border border-amber-200 text-center">
              <div className="p-4 bg-amber-200 rounded-xl w-fit mx-auto mb-4">
                <Mountain className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                Off-Road Specialists
              </h3>
              <p className="text-zinc-600 mb-4">
                Winch recovery • Sand extraction • Wadi rescue
              </p>
              <p className="text-amber-600 font-semibold">
                Starting from AED 300
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Our Response Time Promise
              </h2>
              <p className="text-zinc-600 mb-8">
                We understand that being stranded is stressful. That&apos;s why we&apos;ve 
                positioned our recovery trucks strategically across the UAE to ensure 
                the fastest possible response times.
              </p>
              <div className="space-y-4">
                {[
                  { area: "Central Dubai", time: "15-20 mins", color: "green" },
                  { area: "Outer Dubai Areas", time: "20-30 mins", color: "yellow" },
                  { area: "Sharjah & Ajman", time: "25-45 mins", color: "orange" },
                  { area: "Abu Dhabi & Al Ain", time: "60-90 mins", color: "orange" },
                  { area: "RAK & Fujairah", time: "60-120 mins", color: "orange" },
                  { area: "Desert Areas", time: "45-90 mins", color: "amber" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-200"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="font-medium text-zinc-900">{item.area}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.color === "green" 
                        ? "bg-green-100 text-green-600"
                        : item.color === "yellow"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-orange-100 text-orange-600"
                    }`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white text-center">
              <div className="p-4 bg-white/20 rounded-xl w-fit mx-auto mb-4">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">30 Min</h3>
              <p className="text-white/90 text-lg mb-2">Average Response Time</p>
              <p className="text-white/70 text-sm">
                Within Dubai city limits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Popular Recovery Routes
            </h2>
            <p className="text-zinc-600">
              Common routes we serve for vehicle transport and recovery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: "Dubai Marina", to: "Al Quoz Garage", time: "20 min" },
              { from: "Downtown Dubai", to: "Sharjah", time: "35 min" },
              { from: "JBR", to: "Business Bay", time: "15 min" },
              { from: "Palm Jumeirah", to: "Al Barsha", time: "25 min" },
              { from: "Deira", to: "Abu Dhabi", time: "75 min" },
              { from: "Sheikh Zayed Road", to: "Jebel Ali", time: "30 min" },
            ].map((route, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-xl p-5 border border-zinc-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500">From</p>
                    <p className="font-medium text-zinc-900">{route.from}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-500" />
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500">To</p>
                    <p className="font-medium text-zinc-900">{route.to}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Est. {route.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips When Stranded */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What To Do When Stranded
            </h2>
            <p className="text-zinc-600">
              Stay safe while waiting for our team to arrive
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "alert",
                title: "Move to Safety",
                desc: "If possible, move your vehicle to the side of the road away from traffic.",
              },
              {
                icon: "warning",
                title: "Turn on Hazards",
                desc: "Activate your hazard lights to alert other drivers of your presence.",
              },
              {
                icon: "mappin",
                title: "Share Location",
                desc: "Send us your live location via WhatsApp for faster response.",
              },
              {
                icon: "car",
                title: "Stay in Vehicle",
                desc: "On highways, it's safer to stay in your vehicle with seatbelt on until help arrives.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white rounded-xl border border-zinc-200"
              >
                <div className="p-3 bg-orange-100 rounded-xl">
                  {tip.icon === "alert" && <AlertTriangle className="w-6 h-6 text-orange-500" />}
                  {tip.icon === "warning" && <AlertTriangle className="w-6 h-6 text-orange-500" />}
                  {tip.icon === "mappin" && <MapPin className="w-6 h-6 text-orange-500" />}
                  {tip.icon === "car" && <Car className="w-6 h-6 text-orange-500" />}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-zinc-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stranded Somewhere?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us your location and we&apos;ll be there in no time!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              Share Location on WhatsApp
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
                Professional car recovery and towing services in Dubai and UAE.
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
              <h4 className="font-semibold mb-4">Coverage</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Dubai</p>
                <p>Sharjah</p>
                <p>Ajman</p>
                <p>Abu Dhabi</p>
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
