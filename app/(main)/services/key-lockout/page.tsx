import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Key,
  CheckCircle2,
  Clock,
  ChevronRight,
  Car,
  Shield,
  Lock,
  Unlock,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Car Lockout Service Dubai - 24/7 Key Lock Out Help | AED 100",
  description:
    "Locked out of your car in Dubai? 24/7 car lockout service across UAE. Non-destructive entry, all car makes & models. Professional locksmiths. From AED 100. 20-min response!",
  keywords: [
    "car lockout Dubai",
    "locked keys in car UAE",
    "car locksmith Dubai",
    "emergency car unlock",
    "locked out of car Dubai",
    "24/7 car unlock service",
    "vehicle lockout help",
    "smart key lockout Dubai",
  ],
  openGraph: {
    title: "Car Lockout Service Dubai - 24/7 Key Lock Out Help",
    description:
      "Locked out of your car in Dubai? 24/7 car lockout service. Non-destructive entry for all makes & models. From AED 100!",
    url: "https://247uaerecovery.ae/services/key-lockout",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/key-lockout",
  },
};

export default function KeyLockoutPage() {
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
            <span className="text-zinc-900">Key Lockout Service</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Key className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">
                  Professional Locksmith Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Locked Out? We&apos;ll Get You In <span className="text-orange-500">Without Damage</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                Keys locked in the car? Smart key not working? Our trained technicians use 
                professional tools to unlock your vehicle without causing any damage. 
                Available 24/7 across all UAE Emirates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
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
                  src={servicePageImages.keyLockout.hero}
                  alt="Car Lockout Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">From AED 100</div>
                <p className="text-zinc-300">Non-destructive car unlock service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">20 min</div>
              <p className="text-white/70 text-sm">Average Response</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <p className="text-white/70 text-sm">No Damage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <p className="text-white/70 text-sm">Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">AED 100</div>
              <p className="text-white/70 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Professional Car Unlock Solutions
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Our trained locksmiths handle all types of vehicle lockouts safely
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Traditional Locks",
                desc: "Standard key lockouts for older vehicles with traditional lock systems",
              },
              {
                icon: Key,
                title: "Smart Key Systems",
                desc: "Modern keyless entry and smart key vehicle unlock services",
              },
              {
                icon: Unlock,
                title: "All Car Makes",
                desc: "BMW, Mercedes, Toyota, Honda, Nissan - we unlock them all",
              },
              {
                icon: Shield,
                title: "No Damage Guarantee",
                desc: "Professional tools ensure zero damage to your vehicle",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "Average arrival time of 20 minutes across Dubai",
              },
              {
                icon: Car,
                title: "Any Location",
                desc: "Parking lots, malls, highways - we come to you anywhere",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center hover:border-blue-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Common Lockout Situations We Handle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Keys locked inside the car",
              "Lost car keys",
              "Broken key stuck in lock",
              "Smart key battery dead",
              "Child or pet locked in car (emergency)",
              "Key fob not working",
              "Trunk lockout",
              "Ignition key problems",
            ].map((situation, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-zinc-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-zinc-700">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Locked Out Right Now? We Can Help!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Don&apos;t panic. Call us now and our technician will be on their way in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
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
