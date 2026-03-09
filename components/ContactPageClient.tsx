"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Globe,
} from "lucide-react";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

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
              <Link href="/contact" className="text-orange-500 font-medium">
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
            src={images.hero.contact}
            alt="Contact 24/7 UAE Recovery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We&apos;re <span className="text-orange-500">Always Here</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Stranded at 3 AM? Locked out of your car? Whatever your situation, a real person answers - not a voicemail. Call or message us now.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-8 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
            >
              <div className="p-3 bg-white/20 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-sm">Call Us</p>
                <p className="text-white font-semibold">+971 50 464 5696</p>
              </div>
            </a>
            <a
              href="https://wa.me/971504645696"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
            >
              <div className="p-3 bg-white/20 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-sm">WhatsApp</p>
                <p className="text-white font-semibold">Chat with Us</p>
              </div>
            </a>
            <a
              href="mailto:info@247uaerecovery.ae"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
            >
              <div className="p-3 bg-white/20 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-sm">Email Us</p>
                <p className="text-white font-semibold">info@247uaerecovery.ae</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                Not an Emergency? Request a Callback
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a service</option>
                    <option value="car-recovery">Car Recovery</option>
                    <option value="accident-recovery">Accident Recovery</option>
                    <option value="flatbed-towing">Flatbed Towing</option>
                    <option value="battery-jumpstart">Battery Jump Start</option>
                    <option value="flat-tyre">Flat Tyre Service</option>
                    <option value="fuel-delivery">Fuel Delivery</option>
                    <option value="motorcycle-recovery">Motorcycle Recovery</option>
                    <option value="off-road-recovery">Desert/Off-Road Recovery</option>
                    <option value="heavy-vehicle">Heavy Vehicle Recovery</option>
                    <option value="long-distance">Long Distance Transport</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">
                        Phone
                      </p>
                      <a
                        href="tel:+971504645696"
                        className="text-zinc-600 hover:text-orange-500"
                      >
                        +971 50 464 5696
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@247uaerecovery.ae"
                        className="text-zinc-600 hover:text-orange-500"
                      >
                        info@247uaerecovery.ae
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">
                        Location
                      </p>
                      <p className="text-zinc-600">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">
                        Working Hours
                      </p>
                      <p className="text-zinc-600">
                        24 Hours / 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Stranded Right Now?</h3>
                <p className="text-white/90 mb-4">
                  Skip the form. Call us directly and we&apos;ll dispatch a truck in minutes.
                </p>
                <a
                  href="tel:+971504645696"
                  className="inline-flex items-center gap-2 bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Send Your Location via WhatsApp</h3>
                <p className="text-white/90 mb-4">
                  Drop a pin and type your problem. Our dispatcher will confirm ETA instantly.
                </p>
                <a
                  href="https://wa.me/971504645696"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-3xl p-12 text-center border border-zinc-300">
            <div className="p-4 bg-orange-100 rounded-xl w-fit mx-auto mb-4">
              <MapPin className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              Coverage Across All 7 Emirates
            </h3>
            <p className="text-zinc-600 max-w-lg mx-auto mb-6">
              Our GPS-tracked recovery fleet is positioned strategically across 
              the UAE for fast response. We serve Dubai, Abu Dhabi, Sharjah, 
              Ajman, RAK, Fujairah, and Umm Al Quwain.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white px-3 py-1 rounded-full text-sm text-zinc-700 flex items-center gap-1"><Globe className="w-3 h-3" /> Arabic</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-zinc-700 flex items-center gap-1"><Globe className="w-3 h-3" /> English</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-zinc-700 flex items-center gap-1"><Globe className="w-3 h-3" /> Hindi</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-zinc-700 flex items-center gap-1"><Globe className="w-3 h-3" /> Urdu</span>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <MapPin className="w-5 h-5" />
              View Coverage Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                We&apos;re Always Open
              </h2>
              <p className="text-zinc-600 mb-8">
                Vehicle breakdowns don&apos;t follow office hours, and neither do we. 
                Our team is available 24 hours a day, 365 days a year to help you.
              </p>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "24 Hours", status: "open" },
                  { day: "Saturday", hours: "24 Hours", status: "open" },
                  { day: "Sunday", hours: "24 Hours", status: "open" },
                  { day: "Public Holidays", hours: "24 Hours", status: "open" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-200"
                  >
                    <span className="font-medium text-zinc-900">{item.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600">{item.hours}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                        OPEN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white text-center">
              <div className="p-4 bg-white/20 rounded-xl w-fit mx-auto mb-4">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-white/90 text-lg mb-4">Emergency Service</p>
              <p className="text-white/80 mb-6">
                No matter what time it is, we&apos;re ready to help.
              </p>
              <a
                href="tel:+971504645696"
                className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Serving All of UAE
            </h2>
            <p className="text-zinc-600">
              Quick response times across all 7 Emirates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { emirate: "Dubai", areas: "Downtown, Marina, JBR, Palm, Deira" },
              { emirate: "Abu Dhabi", areas: "City, Al Ain, Yas Island" },
              { emirate: "Sharjah", areas: "City, Al Majaz, Industrial" },
              { emirate: "Ajman", areas: "City, Industrial, Highway" },
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-xl p-4 border border-zinc-200"
              >
                <h4 className="font-semibold text-zinc-900 mb-1">{loc.emirate}</h4>
                <p className="text-sm text-zinc-600">{loc.areas}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Ras Al Khaimah",
              "Fujairah",
              "Umm Al Quwain",
              "All Major Highways",
              "Desert Areas",
              "Inter-Emirate Routes",
            ].map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-orange-500 font-semibold hover:underline"
            >
              View all coverage areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Contact FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What's the fastest way to get help?",
                a: "For emergencies, calling our hotline at +971 50 464 5696 is the fastest. For non-urgent requests, WhatsApp or the contact form works great.",
              },
              {
                q: "Do I need to pay upfront?",
                a: "No upfront payment required. Our driver will provide you with a quote before starting any work, and you pay after the service is complete.",
              },
              {
                q: "Can you help with insurance claims?",
                a: "Yes! We provide all necessary documentation for insurance claims, including photos, reports, and receipts.",
              },
              {
                q: "What if I'm stranded on a remote road?",
                a: "Our trucks cover all areas including remote roads and highways. Just share your live location via WhatsApp and we'll find you.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-zinc-200"
              >
                <h3 className="font-semibold text-zinc-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
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
                <Link href="/about" className="block text-zinc-400 hover:text-orange-500">About</Link>
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
