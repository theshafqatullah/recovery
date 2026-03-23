import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  CheckCircle2,
  ChevronRight,
  Mountain,
  MapPin,
  RefreshCw,
  Wrench,
  Droplet,
  Car,
  Link2,
  FileText,
  Wind,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Off-Road & Desert Recovery Dubai - 4x4 Stuck? We'll Get You Out",
  description:
    "Specialized off-road and desert recovery service in Dubai & UAE. Vehicle stuck in sand? We have 4x4 recovery trucks with winches for remote locations. From AED 300. Available 24/7.",
  keywords: [
    "desert recovery Dubai",
    "off road recovery UAE",
    "stuck in sand recovery",
    "4x4 recovery service",
    "winch recovery Dubai",
    "desert towing",
    "sand extraction vehicle",
    "remote location recovery",
  ],
  openGraph: {
    title: "Off-Road & Desert Recovery Dubai - 4x4 Stuck? We'll Get You Out",
    description:
      "Specialized off-road and desert recovery service. Vehicle stuck in sand? We have 4x4 recovery trucks with winches. From AED 300.",
    url: "https://247uaerecovery.ae/services/off-road-recovery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/off-road-recovery",
  },
};

export default function OffRoadRecoveryPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-amber-900 via-amber-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-amber-300 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Mountain className="w-4 h-4" />
                Desert & Off-Road Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Buried in Sand? <span className="text-amber-400">We Extract.</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                Desert adventures don&apos;t always go as planned. When your 4x4 is axle-deep 
                in soft sand with no traction, our winch-equipped recovery vehicles pull 
                you out safely - no matter how remote your location.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Line
                </a>
                <a
                  href="https://wa.me/971504645696?text=Stuck%20in%20desert%20need%20recovery"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Share Location on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={servicePageImages.offRoadRecovery.hero}
                  alt="Off-Road Recovery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Starting From</h3>
                <div className="text-4xl font-bold text-amber-400 mb-4">AED 300</div>
                <ul className="space-y-3">
                  {[
                    "4x4 recovery vehicles",
                    "Heavy-duty winch system",
                    "Sand boards & extraction gear",
                    "Remote location access",
                    "GPS coordinate tracking",
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

      {/* Common Scenarios */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Common Off-Road Recovery Situations
            </h2>
            <p className="text-zinc-600">
              Desert adventures can go wrong - we&apos;re here to help
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Stuck in Sand", 
                desc: "Vehicle wheels buried in soft sand? We extract and recover safely.",
                Icon: Mountain
              },
              { 
                title: "Dune Rollover", 
                desc: "Vehicle overturned on dunes? We right and recover damaged vehicles.",
                Icon: RefreshCw
              },
              { 
                title: "Engine Failure", 
                desc: "Breakdown in a remote desert location? We reach you and tow back.",
                Icon: Wrench
              },
              { 
                title: "Wadi/Creek Stuck", 
                desc: "Vehicle stuck in a wadi or creek bed? Winch extraction available.",
                Icon: Droplet
              },
              { 
                title: "Mountain Trail", 
                desc: "Stuck on rocky terrain in Hatta or mountains? 4x4 access recovery.",
                Icon: Mountain
              },
              { 
                title: "Remote Breakdown", 
                desc: "Any remote location across UAE - we will find and reach you.",
                Icon: MapPin
              },
            ].map((scenario, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="p-3 bg-amber-100 rounded-xl w-fit mb-4"><scenario.Icon className="w-8 h-8 text-amber-600" /></div>
                <h3 className="font-bold text-zinc-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-zinc-600">{scenario.desc}</p>
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
              Specialized Equipment
            </h2>
            <p className="text-zinc-600">
              Purpose-built for UAE desert conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "4x4 Recovery Trucks", desc: "Heavy-duty vehicles that can navigate any terrain", Icon: Car },
              { name: "12,000 lb Winches", desc: "Powerful winch systems for extraction", Icon: Link2 },
              { name: "Sand Boards", desc: "Traction boards for sand recovery", Icon: FileText },
              { name: "Air Compressors", desc: "Adjust tyre pressure for sand conditions", Icon: Wind },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="p-3 bg-amber-100 rounded-xl w-fit mx-auto mb-4"><item.Icon className="w-8 h-8 text-amber-600" /></div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.name}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Desert & Off-Road Coverage Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { area: "Dubai Desert Conservation Reserve", time: "30-45 min" },
              { area: "Al Qudra / Al Marmoom", time: "25-40 min" },
              { area: "Lahbab & Big Red", time: "30-50 min" },
              { area: "Hatta Mountains", time: "45-60 min" },
              { area: "Fossil Rock Area", time: "40-55 min" },
              { area: "Liwa Desert (Abu Dhabi)", time: "60-90 min" },
            ].map((loc, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-zinc-900 font-medium">{loc.area}</span>
                </div>
                <span className="text-sm text-zinc-500">{loc.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              What To Do If Stuck in the Desert
            </h2>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <ol className="space-y-4">
              {[
                "Stay calm and don't spin your wheels - this digs you deeper",
                "Turn on your hazard lights and stay with your vehicle",
                "Share your GPS location via WhatsApp to us",
                "Stay hydrated and seek shade inside the vehicle",
                "Don't wander off - it's easy to get disoriented",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-700">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stuck in the Desert?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Share your location - we&apos;ll come get you out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Emergency!%20I%27m%20stuck%20in%20the%20desert"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MapPin className="w-5 h-5" /> Share Location on WhatsApp
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
