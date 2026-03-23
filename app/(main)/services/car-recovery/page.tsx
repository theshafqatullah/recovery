import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Car,
  CheckCircle2,
  Clock,
  Shield,
  MapPin,
  ChevronRight,
  Mail,
  MessageSquare,
  Battery,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Car Recovery Service Dubai - 24/7 Vehicle Recovery & Towing",
  description:
    "Professional car recovery service in Dubai. We recover all vehicle types - sedans, SUVs, vans & more. 30-min response, GPS-tracked fleet. From AED 150. Call +971 50 464 5696.",
  keywords: [
    "car recovery Dubai",
    "vehicle recovery service",
    "car breakdown recovery",
    "24/7 car recovery UAE",
    "emergency vehicle recovery",
    "car rescue Dubai",
    "stuck car recovery",
  ],
  openGraph: {
    title: "Car Recovery Service Dubai - 24/7 Vehicle Recovery & Towing",
    description:
      "Professional car recovery service in Dubai. We recover all vehicle types. 30-min response, GPS-tracked fleet. From AED 150.",
    url: "https://247uaerecovery.ae/services/car-recovery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/car-recovery",
  },
};

export default function CarRecoveryPage() {
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
            <span className="text-zinc-900">Car Recovery</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Car className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-sm font-medium">
                  Professional Recovery Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Broken Down? We&apos;ll Be There in <span className="text-orange-500">30 Minutes</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Engine won&apos;t start. Transmission failed. Car simply won&apos;t move. 
                Whatever caused your breakdown, our flatbed trucks safely transport 
                your vehicle without causing additional damage.
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
                  src={servicePageImages.carRecovery.hero}
                  alt="Car Recovery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">From AED 150</div>
                <p className="text-zinc-300">Starting price for car recovery in Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              From Pickup to Dropoff - We Handle Everything
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Here&apos;s exactly what happens when you call for car recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "24/7 Availability",
                desc: "Round-the-clock service, 365 days a year. We're always ready when you need us.",
                icon: Clock,
              },
              {
                title: "All Vehicle Types",
                desc: "We recover sedans, SUVs, sports cars, vans, and light commercial vehicles.",
                icon: Car,
              },
              {
                title: "Safe Handling",
                desc: "Professional equipment and trained staff ensure zero damage to your vehicle.",
                icon: Shield,
              },
              {
                title: "GPS Tracked Fleet",
                desc: "Real-time tracking so you know exactly when help will arrive.",
                icon: MapPin,
              },
              {
                title: "Insurance Approved",
                desc: "We work with all major insurance companies in the UAE.",
                icon: CheckCircle2,
              },
              {
                title: "Fast Response",
                desc: "Average 20-30 minute response time within Dubai city limits.",
                icon: Truck,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                When Do You Need Car Recovery?
              </h2>
              <p className="text-zinc-600 mb-8">
                Our car recovery service is designed for various situations where your 
                vehicle cannot be driven safely.
              </p>
              <div className="space-y-4">
                {[
                  "Engine failure or mechanical breakdown",
                  "Dead battery that won't jump start",
                  "Transmission problems",
                  "Overheating issues",
                  "Electrical system failures",
                  "Flat tyre with no spare",
                  "Keys locked in the car",
                  "Vehicle stuck in sand or mud",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                Quick Recovery Steps
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Call Us", desc: "Dial our 24/7 hotline" },
                  { step: "2", title: "Share Location", desc: "Send us your GPS location" },
                  { step: "3", title: "We Arrive", desc: "Our truck reaches you fast" },
                  { step: "4", title: "Vehicle Secured", desc: "Safe recovery guaranteed" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
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

      {/* Coverage Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Areas We Cover
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Downtown Dubai",
              "Dubai Marina",
              "JBR",
              "Palm Jumeirah",
              "Deira",
              "Bur Dubai",
              "Business Bay",
              "DIFC",
              "Al Barsha",
              "Jumeirah",
              "Al Quoz",
              "Sheikh Zayed Road",
              "Jebel Ali",
              "Sharjah",
              "Ajman",
            ].map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Car Recovery Now?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us now and we&apos;ll be there in 30 minutes or less!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20car%20recovery%20assistance"
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

      {/* Other Services */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
            Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Flatbed Towing", href: "/services/flatbed-towing", Icon: Truck },
              { title: "Battery Jump Start", href: "/services/battery-jumpstart", Icon: Battery },
              { title: "Accident Recovery", href: "/services/accident-recovery", Icon: AlertTriangle },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4"><service.Icon className="w-8 h-8 text-orange-500" /></div>
                <h3 className="font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
