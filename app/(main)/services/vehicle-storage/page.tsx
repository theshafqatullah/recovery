import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Warehouse,
  CheckCircle2,
  ChevronRight,
  Car,
  Camera,
  Lock,
  MapPin,
  Mail,
  Calendar,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Storage Dubai - Secure Car Storage Facility | AED 50/day",
  description:
    "Secure vehicle storage facility in Dubai. 24/7 CCTV surveillance, covered parking, short & long term storage. Insurance coordination. From AED 50/day. Perfect after accident recovery.",
  keywords: [
    "vehicle storage Dubai",
    "car storage facility UAE",
    "secure car parking Dubai",
    "long term car storage",
    "accident vehicle storage",
    "covered car storage UAE",
    "vehicle impound Dubai",
    "car storage near me",
  ],
  openGraph: {
    title: "Vehicle Storage Dubai - Secure Car Storage Facility",
    description:
      "Secure vehicle storage. 24/7 CCTV, covered parking, insurance coordination. From AED 50/day!",
    url: "https://247uaerecovery.ae/services/vehicle-storage",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/vehicle-storage",
  },
};

export default function VehicleStoragePage() {
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
            <span className="text-zinc-900">Vehicle Storage</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-500/20 border border-slate-500/30 rounded-full px-4 py-2 mb-6">
                <Warehouse className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm font-medium">
                  Secure Storage Facility
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Vehicle, <span className="text-orange-500">Safe & Secure</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Need a safe place to store your vehicle after an accident or during extended travel? 
                Our secure storage facility offers 24/7 CCTV surveillance, covered parking, and 
                easy insurance coordination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
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
                  src={servicePageImages.vehicleStorage.hero}
                  alt="Secure Vehicle Storage in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">From AED 50/day</div>
                <p className="text-zinc-300">Secure vehicle storage facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <p className="text-white/70 text-sm">CCTV Surveillance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <p className="text-white/70 text-sm">Covered Parking</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Easy</div>
              <p className="text-white/70 text-sm">Insurance Claims</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">AED 50</div>
              <p className="text-white/70 text-sm">Per Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Comprehensive Storage Security
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Your vehicle is protected 24/7 with our state-of-the-art security measures
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "24/7 CCTV Surveillance",
                desc: "Round-the-clock video monitoring of all vehicles in our facility",
              },
              {
                icon: Lock,
                title: "Secure Access Control",
                desc: "Restricted entry with controlled access for authorized personnel only",
              },
              {
                icon: Warehouse,
                title: "Covered Parking",
                desc: "Protection from sun, rain, and dust with covered storage areas",
              },
              {
                icon: FileText,
                title: "Insurance Coordination",
                desc: "We work directly with insurance companies for seamless claims",
              },
              {
                icon: Calendar,
                title: "Flexible Duration",
                desc: "Short-term or long-term storage options to suit your needs",
              },
              {
                icon: Car,
                title: "Easy Vehicle Release",
                desc: "Quick and hassle-free release process when you need your vehicle",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center hover:border-slate-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Storage Options & Pricing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 text-center">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Short Term</h3>
              <p className="text-zinc-600 mb-4">1-7 days</p>
              <div className="text-4xl font-bold text-orange-500 mb-4">AED 50<span className="text-lg text-zinc-500">/day</span></div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Covered parking
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 CCTV
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Easy release
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Weekly</h3>
              <p className="text-zinc-600 mb-4">7-30 days</p>
              <div className="text-4xl font-bold text-orange-500 mb-4">AED 40<span className="text-lg text-zinc-500">/day</span></div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> All short-term features
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Weekly checks
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Photo updates
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 text-center">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Long Term</h3>
              <p className="text-zinc-600 mb-4">30+ days</p>
              <div className="text-4xl font-bold text-orange-500 mb-4">AED 900<span className="text-lg text-zinc-500">/month</span></div>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> All weekly features
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Battery maintenance
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Priority release
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              When to Use Vehicle Storage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "After accident - waiting for insurance assessment",
              "Extended travel or vacation",
              "Relocating and need temporary storage",
              "Waiting for vehicle repairs",
              "Seasonal vehicle storage",
              "Business inventory storage",
              "Second vehicle not in regular use",
              "Estate vehicle handling",
            ].map((situation, i) => (
              <div key={i} className="flex items-center gap-3 bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-zinc-700">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-600 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Secure Vehicle Storage?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us for availability and to book your storage space today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
