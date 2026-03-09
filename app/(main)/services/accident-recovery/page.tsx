import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  ChevronRight,
  Camera,
  Car,
  Zap,
  Mountain,
  RefreshCw,
  MapPin,
  Mail,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accident Recovery Dubai - Emergency Vehicle Recovery Service",
  description:
    "Emergency accident recovery service in Dubai. Police-coordinated, insurance-friendly. We handle scene safety, documentation & vehicle transport. Priority response. Call +971 50 464 5696.",
  keywords: [
    "accident recovery Dubai",
    "car accident towing",
    "emergency accident recovery UAE",
    "crash recovery service",
    "collision vehicle recovery",
    "insurance accident towing",
    "RTA accident recovery",
  ],
  openGraph: {
    title: "Accident Recovery Dubai - Emergency Vehicle Recovery Service",
    description:
      "Emergency accident recovery service in Dubai. Police-coordinated, insurance-friendly. Priority response available 24/7.",
    url: "https://247uaerecovery.ae/services/accident-recovery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/accident-recovery",
  },
};

export default function AccidentRecoveryPage() {
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
              <Link href="/services" className="text-orange-500 font-medium">
                Services
              </Link>
              <Link
                href="/locations"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
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

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange-500">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900">Accident Recovery</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-900 via-red-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-medium">
                  Emergency Accident Recovery
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Just Had an Accident? <span className="text-orange-500">Stay Calm.</span> We&apos;ll Handle It.
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                The scene is chaotic. Police are involved. Your car is damaged. 
                We&apos;ll coordinate with authorities, document everything for insurance, 
                and safely remove your vehicle while you focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Call
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
                  src={servicePageImages.accidentRecovery.hero}
                  alt="Accident Recovery Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">From AED 200</div>
                <p className="text-zinc-300">Emergency accident recovery service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-4 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-medium flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Been in an accident? Stay safe, call us immediately. We coordinate with police and handle everything.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              From Scene to Storage - Full Accident Support
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We don&apos;t just tow your car. We help navigate the entire post-accident process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Emergency Response",
                desc: "Priority dispatch to accident scenes with fastest possible response time.",
                icon: Clock,
              },
              {
                title: "Police Coordination",
                desc: "We work with Dubai Police and traffic authorities for proper procedures.",
                icon: Shield,
              },
              {
                title: "Damage Documentation",
                desc: "Photo documentation of vehicle damage for insurance purposes.",
                icon: Camera,
              },
              {
                title: "Insurance Support",
                desc: "We provide all necessary documentation for your insurance claim.",
                icon: FileText,
              },
              {
                title: "Safe Recovery",
                desc: "Special equipment for recovering severely damaged vehicles safely.",
                icon: Truck,
              },
              {
                title: "Secure Storage",
                desc: "Secure storage facility available if needed while you sort out claims.",
                icon: CheckCircle2,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="p-3 bg-red-100 rounded-xl w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-red-500" />
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

      {/* What To Do After Accident */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What To Do After an Accident
            </h2>
            <p className="text-zinc-600">
              Follow these steps to stay safe and protect your insurance claim
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Ensure Safety First",
                desc: "Check yourself and passengers for injuries. If possible, move to a safe location away from traffic.",
              },
              {
                step: "2",
                title: "Call Emergency Services",
                desc: "Call 999 for police/ambulance if there are injuries. For non-injury accidents, call 901 for police report.",
              },
              {
                step: "3",
                title: "Document the Scene",
                desc: "Take photos of the accident scene, vehicle damage, license plates, and exchange details with other parties.",
              },
              {
                step: "4",
                title: "Call Us for Recovery",
                desc: "Contact 24/7 UAE Recovery. We'll coordinate with authorities and safely recover your vehicle.",
              },
              {
                step: "5",
                title: "Get Police Report",
                desc: "Obtain the police report number - essential for insurance claims.",
              },
              {
                step: "6",
                title: "Contact Your Insurance",
                desc: "Notify your insurance company. We can help with documentation they require.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 bg-white rounded-xl p-6 border border-zinc-200"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Accidents */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              We Handle All Types of Accidents
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Minor Collisions", Icon: Car, desc: "Fender benders and minor impacts" },
              { type: "Major Accidents", Icon: Zap, desc: "Severe damage requiring special recovery" },
              { type: "Multi-Vehicle", Icon: Car, desc: "Pile-ups and multiple car accidents" },
              { type: "Highway Accidents", Icon: MapPin, desc: "Fast response to highway incidents" },
              { type: "Rollovers", Icon: RefreshCw, desc: "Specialized recovery for overturned vehicles" },
              { type: "Hit & Run", Icon: AlertTriangle, desc: "Recovery with police documentation" },
              { type: "Off-Road Accidents", Icon: Mountain, desc: "Desert and off-road recovery" },
              { type: "Commercial Vehicles", Icon: Truck, desc: "Vans and light commercial recovery" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 text-center"
              >
                <div className="p-3 bg-red-100 rounded-xl w-fit mx-auto mb-3"><item.Icon className="w-8 h-8 text-red-500" /></div>
                <h3 className="font-semibold text-zinc-900 mb-1">{item.type}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Accident Recovery?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Stay calm. Call us now. We&apos;ll handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Emergency!%20I%20need%20accident%20recovery"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <AlertTriangle className="w-5 h-5" /> WhatsApp Emergency
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
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Car Recovery</p>
                <p>Accident Recovery</p>
                <p>Flatbed Towing</p>
                <p>Battery Jump Start</p>
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
