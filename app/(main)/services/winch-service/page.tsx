import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Anchor,
  CheckCircle2,
  ChevronRight,
  Car,
  Shield,
  Mountain,
  Waves,
  MapPin,
  Mail,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Winch Out Service Dubai - Vehicle Extraction & Recovery | AED 200",
  description:
    "Professional winch out service in Dubai & UAE. Extract vehicles from mud, sand, ditches & embankments. Heavy-duty winching equipment. 24/7 service. From AED 200.",
  keywords: [
    "winch out service Dubai",
    "vehicle extraction UAE",
    "car stuck in sand Dubai",
    "ditch recovery Dubai",
    "mud extraction service",
    "winch recovery UAE",
    "vehicle pullout service",
    "stuck car recovery Dubai",
  ],
  openGraph: {
    title: "Winch Out Service Dubai - Vehicle Extraction & Recovery",
    description:
      "Professional winch out service. Extract vehicles from mud, sand, ditches. From AED 200!",
    url: "https://247uaerecovery.ae/services/winch-service",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/winch-service",
  },
};

export default function WinchServicePage() {
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
            <span className="text-zinc-900">Winch Out Service</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">
                  Heavy-Duty Winch Recovery
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stuck? We&apos;ll Pull You Out <span className="text-orange-500">Safely</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Vehicle stuck in mud, sand, a ditch, or rolled off the road? Our heavy-duty 
                winch trucks can extract your vehicle safely without causing additional damage. 
                Available 24/7 across all UAE Emirates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971569773000"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
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
                  src={servicePageImages.winchService.hero}
                  alt="Winch Out Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">From AED 200</div>
                <p className="text-zinc-300">Professional winch extraction service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-black">25 ton</div>
              <p className="text-black/70 text-sm">Winch Capacity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">30 min</div>
              <p className="text-black/70 text-sm">Avg Response</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">24/7</div>
              <p className="text-black/70 text-sm">Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">AED 200</div>
              <p className="text-black/70 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Heavy-Duty Extraction Equipment
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Our winch trucks are equipped to handle any extraction situation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: "Powerful Winches",
                desc: "25-ton capacity winches can pull out even the heaviest vehicles",
              },
              {
                icon: Mountain,
                title: "Sand & Desert Recovery",
                desc: "Specialized in extracting vehicles stuck in UAE desert sand",
              },
              {
                icon: Waves,
                title: "Mud Extraction",
                desc: "Pull vehicles out of mud, marshes, and waterlogged areas",
              },
              {
                icon: AlertTriangle,
                title: "Ditch Recovery",
                desc: "Safely recover vehicles that have gone off-road or into ditches",
              },
              {
                icon: Car,
                title: "All Vehicle Types",
                desc: "Cars, SUVs, trucks, and commercial vehicles",
              },
              {
                icon: Shield,
                title: "Damage Prevention",
                desc: "Proper techniques to prevent additional damage during extraction",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center hover:border-amber-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations We Handle */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Situations We Handle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Vehicle stuck in desert sand",
              "Car slipped into a ditch",
              "Muddy construction site extraction",
              "Off-road adventure recovery",
              "Embankment retrieval",
              "Flooded area extraction",
              "Parking lot mishaps",
              "Rolled or overturned vehicles",
            ].map((situation, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-zinc-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-zinc-700">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              How We Extract Your Vehicle
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Call Us", desc: "Share your location and situation" },
              { step: "02", title: "Assessment", desc: "We assess the best extraction method" },
              { step: "03", title: "Safe Extraction", desc: "Controlled winching to minimize damage" },
              { step: "04", title: "Inspection", desc: "Check your vehicle before you drive away" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-amber-500 text-black font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Stuck Right Now? We&apos;ll Pull You Out!
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Don&apos;t try to force your way out and risk more damage. Call the professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000"
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
