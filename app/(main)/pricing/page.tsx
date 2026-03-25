import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  Info,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Car Recovery & Towing Service Rates Dubai",
  description:
    "Transparent pricing for car recovery and towing services in Dubai. Car recovery from AED 150, battery jump start from AED 80, flat tyre from AED 80. No hidden fees!",
  keywords: [
    "car recovery price Dubai",
    "towing cost UAE",
    "recovery service rates",
    "towing fees Dubai",
    "roadside assistance cost",
    "car breakdown price",
    "affordable towing Dubai",
  ],
  openGraph: {
    title: "Pricing - Car Recovery & Towing Service Rates Dubai",
    description:
      "Transparent pricing for car recovery and towing services in Dubai. Car recovery from AED 150. No hidden fees!",
    url: "https://247uaerecovery.ae/pricing",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/pricing",
  },
};

const services = [
  {
    name: "Car Recovery",
    price: "150",
    unit: "Starting from",
    features: ["24/7 availability", "All vehicle types", "Within Dubai", "GPS tracked"],
    popular: true,
  },
  {
    name: "Accident Recovery",
    price: "200",
    unit: "Starting from",
    features: ["Emergency response", "Police coordination", "Insurance docs", "Scene cleanup"],
    popular: false,
  },
  {
    name: "Flatbed Towing",
    price: "250",
    unit: "Starting from",
    features: ["Zero damage", "Luxury car safe", "AWD compatible", "Long distance"],
    popular: true,
  },
  {
    name: "Battery Jump Start",
    price: "80",
    unit: "Starting from",
    features: ["On-site service", "All battery types", "Free battery test", "No towing needed"],
    popular: false,
  },
  {
    name: "Flat Tyre Change",
    price: "80",
    unit: "Starting from",
    features: ["Spare fitting", "Puncture repair", "TPMS reset", "Tyre inspection"],
    popular: false,
  },
  {
    name: "Fuel Delivery",
    price: "100",
    unit: "Delivery fee",
    features: ["Petrol & diesel", "Any location", "Quick delivery", "+ fuel cost"],
    popular: false,
  },
  {
    name: "Motorcycle Recovery",
    price: "120",
    unit: "Starting from",
    features: ["All bike types", "Wheel chocks", "Secure straps", "Track transport"],
    popular: false,
  },
  {
    name: "Off-Road Recovery",
    price: "300",
    unit: "Starting from",
    features: ["Desert recovery", "4x4 vehicles", "Winch service", "Remote access"],
    popular: false,
  },
  {
    name: "Heavy Vehicle",
    price: "500",
    unit: "Starting from",
    features: ["Trucks up to 25 tons", "Buses & trailers", "Traffic management", "Police coord."],
    popular: false,
  },
];

const distanceRates = [
  { zone: "Within Dubai (0-30km)", rate: "Included in base price" },
  { zone: "Extended Dubai (30-50km)", rate: "+AED 50 - 100" },
  { zone: "Sharjah / Ajman", rate: "+AED 100 - 200" },
  { zone: "Ras Al Khaimah / Fujairah", rate: "+AED 200 - 350" },
  { zone: "Abu Dhabi / Al Ain", rate: "+AED 300 - 450" },
  { zone: "Liwa / Remote Areas", rate: "Quote on request" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know the Cost <span className="text-orange-500">Before We Arrive</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We believe in honest pricing. Tell us your location and problem, and we&apos;ll give you the exact cost - locked in before we dispatch.
          </p>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Straightforward Rates for Every Service
            </h2>
            <p className="text-zinc-600">
              Starting prices in AED. Final quote depends on your exact location and situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 border-2 ${
                  service.popular
                    ? "border-orange-500"
                    : "border-zinc-200"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {service.name}
                </h3>
                <div className="mb-4">
                  <span className="text-sm text-zinc-500">{service.unit}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-orange-500">AED {service.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+971569773000"
                  className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                    service.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-zinc-100 hover:bg-zinc-200:bg-zinc-700 text-zinc-900"
                  }`}
                >
                  Call to Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distance Rates */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Location Affects Your Price
            </h2>
            <p className="text-zinc-600">
              Closer to our Dubai hub means lower costs. Here&apos;s what to expect.
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="text-left py-4 px-6 font-semibold text-zinc-900">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      Zone
                    </div>
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-zinc-900">
                    Additional Charge
                  </th>
                </tr>
              </thead>
              <tbody>
                {distanceRates.map((rate, i) => (
                  <tr key={i} className="border-t border-zinc-200">
                    <td className="py-4 px-6 text-zinc-700">{rate.zone}</td>
                    <td className="py-4 px-6 text-right font-medium text-zinc-900">
                      {rate.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Time-Based Surcharges */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Fair Pricing, Always
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-50 rounded-2xl p-6 text-center border border-zinc-200">
              <div className="p-3 bg-green-100 rounded-xl w-fit mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-zinc-600">
                The price we quote is the price you pay. No surprises.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-6 text-center border border-zinc-200">
              <div className="p-3 bg-orange-100 rounded-xl w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Same Rate 24/7</h3>
              <p className="text-sm text-zinc-600">
                No night surcharges. Same price at 3 AM as 3 PM.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-6 text-center border border-zinc-200">
              <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Fully Insured</h3>
              <p className="text-sm text-zinc-600">
                Your vehicle is protected throughout the service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">Important Notes</h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• All prices are indicative and may vary based on specific circumstances</li>
                  <li>• Final price is confirmed before dispatch and agreed upon by customer</li>
                  <li>• Payment accepted: Cash, Card, Bank Transfer</li>
                  <li>• Prices include standard recovery within Dubai city limits</li>
                  <li>• Heavy vehicles (above 3.5 tons) may incur additional charges</li>
                  <li>• Extremely difficult recovery situations priced individually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Exact Price in 60 Seconds
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call now. Share your location. Get a firm quote before we move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
