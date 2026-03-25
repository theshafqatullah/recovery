import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Battery,
  CheckCircle2,
  Clock,
  Zap,
  ChevronRight,
  Lightbulb,
  Sun,
  Car,
  Calendar,
  Plug,
  Wrench,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Battery Jump Start Dubai - 24/7 Car Battery Service",
  description:
    "Dead car battery? Get 24/7 battery jump start service in Dubai. Professional boost for all vehicles, battery testing & replacement available. From AED 80. Arrive in 20 minutes!",
  keywords: [
    "battery jump start Dubai",
    "car battery service UAE",
    "dead battery help Dubai",
    "24/7 battery boost",
    "car battery replacement Dubai",
    "emergency battery service",
    "vehicle battery jump",
  ],
  openGraph: {
    title: "Battery Jump Start Dubai - 24/7 Car Battery Service",
    description:
      "Dead car battery? Get 24/7 battery jump start service in Dubai. Professional boost for all vehicles. From AED 80, arrive in 20 minutes!",
    url: "https://247uaerecovery.ae/services/battery-jumpstart",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services/battery-jumpstart",
  },
};

export default function BatteryJumpstartPage() {
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
            <span className="text-zinc-900">Battery Jump Start</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-medium">
                  Quick Roadside Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dead Battery? You Could Be <span className="text-orange-500">Driving in 20 Minutes</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                That clicking sound when you turn the key? We fix it on the spot. 
                Our technicians arrive with professional jump equipment and test your 
                battery to ensure you won&apos;t be stranded again tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+971569773000"
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors"
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
                  src={servicePageImages.batteryJumpstart.hero}
                  alt="Battery Jump Start Service in Dubai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">From AED 100</div>
                <p className="text-zinc-300">On-site battery jump start service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-black">15 min</div>
              <p className="text-black/70 text-sm">Average Response</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">5 min</div>
              <p className="text-black/70 text-sm">Jump Start Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">24/7</div>
              <p className="text-black/70 text-sm">Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">AED 100</div>
              <p className="text-black/70 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              More Than Just a Jump - Complete Battery Care
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Jump Start",
                desc: "Safe jump start using professional-grade equipment compatible with all vehicles.",
                icon: Zap,
              },
              {
                title: "Battery Testing",
                desc: "Free battery health check to determine if replacement is needed.",
                icon: Battery,
              },
              {
                title: "All Battery Types",
                desc: "We handle standard, AGM, and lithium batteries in all vehicle types.",
                icon: CheckCircle2,
              },
              {
                title: "Quick Response",
                desc: "Average 15-20 minute response time within Dubai city limits.",
                icon: Clock,
              },
              {
                title: "No Towing Needed",
                desc: "Get back on the road immediately - no need to tow your vehicle.",
                icon: Truck,
              },
              {
                title: "Battery Replacement",
                desc: "If jump start doesn't work, we can supply and install a new battery.",
                icon: CheckCircle2,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="p-3 bg-yellow-100 rounded-xl w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
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

      {/* Signs of Dead Battery */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Signs Your Battery Needs a Jump
              </h2>
              <p className="text-zinc-600 mb-8">
                Not sure if it&apos;s a battery issue? Look for these common signs:
              </p>
              <div className="space-y-4">
                {[
                  "Engine cranks slowly or won't start",
                  "Clicking sound when turning the key",
                  "Dashboard lights are dim or flickering",
                  "Headlights are dimmer than usual",
                  "Electrical accessories not working properly",
                  "Battery warning light on dashboard",
                  "Car stalls after jump start",
                  "Battery is more than 3 years old",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
                Common Causes of Dead Battery
              </h3>
              <div className="space-y-4">
                {[
                  { cause: "Lights left on", Icon: Lightbulb },
                  { cause: "Extreme heat (Dubai summers!)", Icon: Sun },
                  { cause: "Short trips only", Icon: Car },
                  { cause: "Old battery (3+ years)", Icon: Calendar },
                  { cause: "Parasitic drain", Icon: Plug },
                  { cause: "Corroded terminals", Icon: Wrench },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 bg-zinc-50 rounded-xl"
                  >
                    <div className="p-2 bg-yellow-100 rounded-lg"><item.Icon className="w-5 h-5 text-yellow-600" /></div>
                    <span className="text-zinc-700">{item.cause}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Replacement */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-4 bg-yellow-100 rounded-2xl w-fit mx-auto mb-6"><Battery className="w-12 h-12 text-yellow-600" /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Need a New Battery?
          </h2>
          <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
            If your battery is dead beyond revival, we can supply and install a new 
            battery on the spot. We carry batteries for most vehicle makes and models.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">AED 250+</div>
              <p className="text-zinc-600">Standard Batteries</p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">AED 400+</div>
              <p className="text-zinc-600">Premium Batteries</p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">AED 600+</div>
              <p className="text-zinc-600">Luxury Car Batteries</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            Prices include battery, installation, and old battery disposal
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Dead Battery? We&apos;ll Bring the Power to You!
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Call now and we&apos;ll have you running in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971569773000"
              className="flex items-center justify-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 56 977 3000
            </a>
            <a
              href="https://wa.me/971569773000?text=Hi%2C%20I%20need%20a%20battery%20jump%20start"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <Battery className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black font-medium transition-colors"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
