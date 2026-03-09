import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Shield,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Mail,
  MapPin,
  FileText,
  Clock,
  Zap,
  Building2,
  BadgeCheck,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Partners | Approved Recovery Service | 24/7 UAE Recovery",
  description:
    "We partner with all major UAE insurance companies. Direct billing, hassle-free claims, and approved recovery services. AXA, RSA, Oman Insurance, Noor Takaful & more.",
  keywords: [
    "insurance approved towing Dubai",
    "car recovery insurance claim",
    "insurance partner recovery service",
    "AXA approved towing UAE",
    "RSA car recovery Dubai",
    "Oman Insurance towing",
    "direct billing recovery",
    "insurance claim assistance",
  ],
  openGraph: {
    title: "Insurance Partners | Approved Recovery Service",
    description: "Partnered with all major UAE insurance companies for hassle-free claims.",
    url: "https://247uaerecovery.ae/partners",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/partners",
  },
};

const insurancePartners = [
  {
    name: "AXA Insurance",
    logo: "AXA",
    description: "Major international insurer with comprehensive UAE coverage",
    services: ["Direct billing", "Accident recovery", "Roadside assistance"],
  },
  {
    name: "RSA Insurance",
    logo: "RSA",
    description: "Leading motor insurance provider in the UAE market",
    services: ["24/7 support", "Direct claims", "Priority dispatch"],
  },
  {
    name: "Oman Insurance",
    logo: "OICO",
    description: "One of the oldest and largest insurers in the GCC region",
    services: ["Direct billing", "Comprehensive coverage", "Fast claims"],
  },
  {
    name: "Noor Takaful",
    logo: "NT",
    description: "Sharia-compliant insurance solutions for UAE residents",
    services: ["Takaful approved", "Direct billing", "Full coverage"],
  },
  {
    name: "Orient Insurance",
    logo: "OIC",
    description: "Trusted insurance partner with extensive UAE network",
    services: ["Direct settlement", "Accident support", "Recovery services"],
  },
  {
    name: "Dubai Insurance",
    logo: "DIC",
    description: "Local insurer with deep understanding of UAE market",
    services: ["Priority service", "Direct billing", "Local expertise"],
  },
  {
    name: "Salama Insurance",
    logo: "SIC",
    description: "Islamic insurance company serving UAE motorists",
    services: ["Takaful compliant", "24/7 support", "Direct claims"],
  },
  {
    name: "Watania Insurance",
    logo: "WIC",
    description: "National insurance provider with comprehensive motor coverage",
    services: ["Fast processing", "Direct billing", "Priority recovery"],
  },
];

const benefits = [
  {
    icon: FileText,
    title: "Direct Billing",
    description: "We handle all paperwork and bill your insurance directly. No out-of-pocket expenses for covered services.",
  },
  {
    icon: Clock,
    title: "Fast Claims Processing",
    description: "Our dedicated team works with insurance adjusters to expedite your claims approval.",
  },
  {
    icon: Shield,
    title: "Full Documentation",
    description: "We provide complete incident documentation, photos, and reports required for insurance claims.",
  },
  {
    icon: Zap,
    title: "Priority Dispatch",
    description: "Insurance customers receive priority dispatch for faster response times.",
  },
];

const process = [
  {
    step: "01",
    title: "Call Us",
    description: "Contact our 24/7 hotline and inform us you have insurance coverage.",
  },
  {
    step: "02",
    title: "Share Policy Details",
    description: "Provide your insurance company name and policy number.",
  },
  {
    step: "03",
    title: "We Handle Everything",
    description: "We coordinate with your insurer, arrange recovery, and handle documentation.",
  },
  {
    step: "04",
    title: "No Hassle Settlement",
    description: "Services billed directly to insurance. You sign and go.",
  },
];

export default function PartnersPage() {
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
              <Link href="/" className="text-zinc-600 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/services" className="text-zinc-600 hover:text-orange-500 transition-colors">Services</Link>
              <Link href="/partners" className="text-orange-500 font-medium">Insurance</Link>
              <Link href="/locations" className="text-zinc-600 hover:text-orange-500 transition-colors">Locations</Link>
              <Link href="/about" className="text-zinc-600 hover:text-orange-500 transition-colors">About</Link>
              <Link href="/contact" className="text-zinc-600 hover:text-orange-500 transition-colors">Contact</Link>
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
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Insurance Approved</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Partnered with
                <span className="text-orange-500"> All Major</span> UAE Insurers
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                We work directly with your insurance company. No paperwork hassle, no upfront payment. 
                Just fast, professional recovery covered by your policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  File Insurance Claim
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-white/20"
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold text-white">Insurance Benefits</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Direct billing to your insurance",
                    "No upfront payment required",
                    "Complete documentation provided",
                    "Fast claims processing",
                    "24/7 insurance coordination",
                    "All major insurers accepted",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Our Insurance Partners
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We are an approved service provider for all major insurance companies in the UAE.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurancePartners.map((partner, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="w-16 h-16 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-zinc-600 mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.services.map((service, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-zinc-500">
              Don't see your insurance company? We work with all UAE insurers. <Link href="/contact" className="text-orange-500 font-medium hover:underline">Contact us</Link> to confirm coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Why Choose an Insurance-Approved Service?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Working with an approved recovery service means faster claims, no hassle, and better coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="bg-orange-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-zinc-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              How Insurance Claims Work
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We make the insurance claim process simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 text-center h-full">
                  <div className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Step {step.step}
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-600">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Insurance Companies */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-sm font-medium">For Insurance Companies</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partner With Us
              </h2>
              <p className="text-zinc-300 mb-8">
                Looking to add a reliable recovery service to your network? We offer:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Competitive corporate rates",
                  "Dedicated account manager",
                  "24/7 priority dispatch",
                  "Real-time GPS tracking reports",
                  "Digital documentation & invoicing",
                  "SLA-backed response times",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:partnerships@247uaerecovery.ae"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                partnerships@247uaerecovery.ae
              </a>
            </div>
            <div className="bg-zinc-800 rounded-3xl p-8 border border-zinc-700">
              <h3 className="text-xl font-bold mb-6">Request Partnership Info</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                    placeholder="Your insurance company"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Contact Person</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  Submit Partnership Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Insurance? We've Got You Covered.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us now and we'll coordinate directly with your insurance company.
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
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
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
                Insurance-approved car recovery and towing services in Dubai and UAE.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-400 hover:text-orange-500">Home</Link>
                <Link href="/services" className="block text-zinc-400 hover:text-orange-500">Services</Link>
                <Link href="/partners" className="block text-zinc-400 hover:text-orange-500">Insurance</Link>
                <Link href="/about" className="block text-zinc-400 hover:text-orange-500">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Insurance Partners</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>AXA Insurance</p>
                <p>RSA Insurance</p>
                <p>Oman Insurance</p>
                <p>+ All UAE Insurers</p>
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
            <p>&copy; {new Date().getFullYear()} 24/7 UAE Recovery. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
