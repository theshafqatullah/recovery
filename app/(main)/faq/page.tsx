import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Phone,
  ChevronDown,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Car Recovery Services",
  description:
    "Find answers to common questions about our car recovery and towing services in Dubai. Learn about service areas, pricing, payment options, response times, and more.",
  keywords: [
    "car recovery FAQ Dubai",
    "towing questions UAE",
    "recovery service help",
    "towing service information",
    "roadside assistance questions",
    "car breakdown FAQ",
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions About Car Recovery Services",
    description:
      "Find answers to common questions about our car recovery and towing services in Dubai. Service areas, pricing, payment options, and more.",
    url: "https://247uaerecovery.ae/faq",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/faq",
  },
};

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What areas do you serve?",
        a: "We provide car recovery and towing services across all of Dubai and neighboring emirates including Sharjah, Ajman, Abu Dhabi, and Ras Al Khaimah.",
      },
      {
        q: "Are you available 24/7?",
        a: "Yes! We operate 24 hours a day, 7 days a week, 365 days a year. Whether it's 3 AM or a public holiday, we're here to help.",
      },
      {
        q: "How quickly can you reach me?",
        a: "Our average response time within Dubai is 20-30 minutes. For areas outside Dubai, response times vary based on distance.",
      },
      {
        q: "Do I need to pay upfront?",
        a: "No upfront payment required. We provide a quote before dispatch, and you pay after the service is completed.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit/debit cards, and bank transfers. Payment is due upon completion of service.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "What types of vehicles do you recover?",
        a: "We recover all types of vehicles including sedans, SUVs, sports cars, luxury vehicles, vans, and light commercial vehicles up to 3.5 tons.",
      },
      {
        q: "Do you handle luxury and exotic cars?",
        a: "Yes! We have specialized flatbed trucks for luxury and exotic vehicles. Your car is transported without any wheels touching the road.",
      },
      {
        q: "Can you recover vehicles after an accident?",
        a: "Absolutely. We provide emergency accident recovery services and coordinate with police and insurance companies.",
      },
      {
        q: "Do you offer battery replacement?",
        a: "Yes, if your battery can't be jump-started, we can supply and install a new battery on the spot.",
      },
      {
        q: "Can you deliver fuel to my location?",
        a: "Yes! We deliver petrol (Super 98 and Special 95) and diesel to your location at official UAE fuel prices plus a delivery fee.",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "How much does car recovery cost?",
        a: "Car recovery starts from AED 150 within Dubai. Final price depends on your location, vehicle type, and service needed. We provide an exact quote before dispatch.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees. The price we quote is the price you pay. We're transparent about all costs upfront.",
      },
      {
        q: "Is there a night-time surcharge?",
        a: "No! Our prices are the same 24/7. Whether you call at 3 AM or 3 PM, you pay the same rate.",
      },
      {
        q: "Do you charge extra for holidays?",
        a: "No, we do not charge extra for public holidays or weekends.",
      },
      {
        q: "Is there a cancellation fee?",
        a: "If you cancel before our truck is dispatched, there's no fee. Once dispatched, a callout fee may apply.",
      },
    ],
  },
  {
    category: "Insurance & Safety",
    questions: [
      {
        q: "Are you licensed and insured?",
        a: "Yes, we are fully licensed by the RTA (Roads and Transport Authority) and carry comprehensive insurance coverage.",
      },
      {
        q: "Is my vehicle insured during transport?",
        a: "Absolutely. Your vehicle is fully insured from pickup to delivery. We provide liability coverage for complete peace of mind.",
      },
      {
        q: "Do you provide documentation for insurance claims?",
        a: "Yes, we provide all necessary documentation including photos, reports, and receipts for your insurance claims.",
      },
      {
        q: "What if my vehicle gets damaged during recovery?",
        a: "Our professional equipment and trained staff ensure zero damage. In the unlikely event of any damage, our insurance covers it fully.",
      },
    ],
  },
  {
    category: "During Service",
    questions: [
      {
        q: "Can I stay with my vehicle during towing?",
        a: "For safety reasons, passengers cannot ride in the towed vehicle. However, you're welcome to accompany our driver in the recovery truck.",
      },
      {
        q: "Where will you take my vehicle?",
        a: "We can take your vehicle anywhere you specify - home, garage, service center, or any other location. Just tell us the destination.",
      },
      {
        q: "What should I do while waiting for the recovery truck?",
        a: "Stay safe! Turn on hazard lights, move to a safe location away from traffic, and stay inside your vehicle on highways. Share your live location via WhatsApp.",
      },
      {
        q: "Can you unlock my car if I've locked my keys inside?",
        a: "Basic lockout assistance may be available. For modern cars with complex systems, we recommend a specialized locksmith. We can recover the vehicle if needed.",
      },
    ],
  },
];

export default function FAQPage() {
  // Build FAQ JSON-LD from question data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Questions, <span className="text-orange-500">Answered</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about calling for recovery - from pricing to what happens when we arrive.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((cat, i) => (
              <a
                key={i}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, i) => (
            <div
              key={i}
              id={category.category.toLowerCase().replace(/\s+/g, "-")}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 pb-2 border-b border-zinc-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, j) => (
                  <details
                    key={j}
                    className="group bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-zinc-900 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 text-zinc-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Can&apos;t Find Your Answer?
          </h2>
          <p className="text-zinc-600 mb-8">
            Our dispatchers are happy to answer any questions. Call us - we pick up in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-zinc-200 hover:bg-zinc-300:bg-zinc-700 text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
