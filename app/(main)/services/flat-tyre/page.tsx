import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Wrench,
  CheckCircle2,
  Clock,
  ChevronRight,
  CircleDot,
  Car,
  Search,
  MapPin,
  Mail,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flat Tyre Service Dubai - 24/7 Tyre Change & Repair",
  description:
    "Got a flat tyre in Dubai? We provide 24/7 tyre change, spare fitting, puncture repair & new tyre installation. Roadside service anywhere in Dubai. From AED 80. Call now!",
  keywords: [
    "flat tyre service Dubai",
    "tyre change Dubai",
    "puncture repair UAE",
    "roadside tyre service",
    "24/7 tyre help Dubai",
    "spare tyre fitting",
    "emergency tyre service",
  ],
  openGraph: {
    title: "Flat Tyre Service Dubai - 24/7 Tyre Change & Repair",
    description:
      "Got a flat tyre in Dubai? We provide 24/7 tyre change, spare fitting, puncture repair & new tyre installation. From AED 80.",
    url: "https://247uaerecovery.ae/services/flat-tyre",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/flat-tyre",
  },
};

export default function FlatTyrePage() {
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
            <span className="text-zinc-900">Flat Tyre Change</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Wrench className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-sm font-medium">
                  Roadside Assistance
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flat Tyre on the Highway? <span className="text-orange-500">Stay in Your Car.</span> We&apos;ll Come to You.
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Changing a tyre on a busy Dubai road is dangerous. Our technicians 
                bring the tools, fit your spare or repair the puncture, and get you 
                rolling safely - all while you stay comfortable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971569773000"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
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
                  src={servicePageImages.flatTyre.hero}
                  alt="Flat Tyre Change Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">From AED 80</div>
                <p className="text-zinc-300">On-site flat tyre change service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Multiple Solutions for Your Tyre Problem
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Spare Tyre Fitting",
                desc: "We'll fit your spare tyre so you can continue to the nearest garage.",
                price: "From AED 80",
                Icon: Wrench,
              },
              {
                title: "Puncture Repair",
                desc: "On-site puncture repair using professional plug kit for minor punctures.",
                price: "From AED 50",
                Icon: CircleDot,
              },
              {
                title: "New Tyre Supply",
                desc: "We can supply and fit a new tyre if your spare isn't available.",
                price: "From AED 200",
                Icon: CircleDot,
              },
              {
                title: "Run-Flat Service",
                desc: "Special handling for run-flat tyres common in luxury vehicles.",
                price: "From AED 100",
                Icon: Car,
              },
              {
                title: "TPMS Reset",
                desc: "Reset your tyre pressure monitoring system after tyre change.",
                price: "Included",
                Icon: CheckCircle2,
              },
              {
                title: "Tyre Inspection",
                desc: "Check all tyres and provide recommendations for safety.",
                price: "Free",
                Icon: Search,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4"><service.Icon className="w-8 h-8 text-orange-500" /></div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-sm mb-4">
                  {service.desc}
                </p>
                <p className="text-orange-500 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Call Us", desc: "Share your location and tyre issue", Icon: Phone },
              { step: "2", title: "We Come to You", desc: "Technician dispatched immediately", Icon: Truck },
              { step: "3", title: "Tyre Changed", desc: "Professional tyre change on-site", Icon: Wrench },
              { step: "4", title: "You're Off!", desc: "Back on the road safely", Icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <div className="p-3 bg-orange-100 rounded-xl w-fit mx-auto mb-2"><item.Icon className="w-6 h-6 text-orange-500" /></div>
                <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What To Do With a Flat Tyre
            </h2>
            <p className="text-zinc-600">
              Stay safe while waiting for assistance
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Pull Over Safely",
                desc: "Move to a safe location away from traffic. Turn on hazard lights.",
              },
              {
                title: "Don't Drive on a Flat",
                desc: "Driving on a flat tyre can damage your wheel rim and be dangerous.",
              },
              {
                title: "Check for Spare",
                desc: "Let us know if you have a spare tyre or if you need us to bring one.",
              },
              {
                title: "Stay in Vehicle",
                desc: "On highways, it's safer to stay inside until help arrives.",
              },
              {
                title: "Share Location",
                desc: "Send us your live location via WhatsApp for fastest response.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-zinc-50 rounded-xl border border-zinc-200"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-zinc-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-3xl font-bold text-white">15-25</span>
              </div>
              <p className="text-white/80">Min Response Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">10</div>
              <p className="text-white/80">Min Tyre Change</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <p className="text-white/80">Always Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">AED 80</div>
              <p className="text-white/80">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got a Flat Tyre? We&apos;ll Fix It!
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Don&apos;t struggle with a spare tyre on the roadside. Call us and we&apos;ll handle it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000?text=Hi%2C%20I%20have%20a%20flat%20tyre%20and%20need%20help"
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
