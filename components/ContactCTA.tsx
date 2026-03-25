import Link from "next/link";
import { Phone, MessageCircle, ChevronRight } from "lucide-react";

interface ContactCTAProps {
  variant?: "default" | "emergency" | "minimal";
  title?: string;
  description?: string;
  showContactForm?: boolean;
}

export default function ContactCTA({
  variant = "default",
  title = "Need Help Right Now?",
  description = "Our team is ready to assist you 24/7. Call us or send a WhatsApp message for immediate help!",
  showContactForm = false,
}: ContactCTAProps) {
  if (variant === "emergency") {
    return (
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            🚨 Emergency Service Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stranded? We&apos;re On Our Way!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait on the roadside. Call us now and we&apos;ll be there in 30 minutes or less!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors animate-pulse"
            >
              <Phone className="w-6 h-6" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000?text=Emergency!%20I%20need%20vehicle%20recovery%20assistance"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section className="py-8 px-4 bg-zinc-100 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Available 24/7 across all UAE Emirates
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+971569773000"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/971569773000"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+971569773000"
            className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +971 56 977 3000
          </a>
          <a
            href="https://wa.me/971569773000?text=Hi%2C%20I%20need%20vehicle%20recovery%20assistance"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
        {showContactForm && (
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-white/20">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
            ⚡ 30-Min Response
          </span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
            🛡️ Insurance Approved
          </span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
            🌐 Multi-Language Support
          </span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
            📍 All 7 Emirates
          </span>
        </div>
      </div>
    </section>
  );
}
