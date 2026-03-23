import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { images, mockImageData } from "@/lib/images";
import {
  Truck,
  Phone,
  Target,
  Heart,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  MapPin,
  Globe,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About 24/7 UAE Recovery | Dubai's Trusted Towing Company Since 2020",
  description:
    "10,000+ vehicles recovered since 2020. Dubai's trusted car recovery team with GPS-tracked fleet, insurance partnerships, and multi-language support. 5+ years serving all UAE emirates.",
  keywords: [
    "about UAE recovery company",
    "car recovery company Dubai",
    "towing company UAE",
    "professional recovery team Dubai",
    "Dubai roadside assistance company",
    "vehicle recovery experts UAE",
    "trusted towing service Dubai",
    "licensed recovery company",
    "insured towing service UAE",
    "GPS tracked tow trucks",
    "multi-language recovery service",
  ],
  openGraph: {
    title: "About Us - Professional Car Recovery Team in Dubai",
    description:
      "Learn about 24/7 UAE Recovery - Dubai's trusted car recovery and towing service. 500+ vehicles recovered, professional team.",
    url: "https://247uaerecovery.ae/about",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/about",
  },
};

const stats = [
  { value: "10K+", label: "Vehicles Recovered" },
  { value: "5+", label: "Years Experience" },
  { value: "7", label: "Emirates Covered" },
  { value: "4.9", label: "Customer Rating" },
];

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We understand that breakdowns don't follow schedules. That's why we're available 24 hours a day, 7 days a week, 365 days a year.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your vehicle's safety is our top priority. We use the latest equipment and follow strict protocols to ensure zero damage during recovery.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "We treat every customer with respect and empathy. Being stranded is stressful enough - we're here to make it easier.",
  },
  {
    icon: Target,
    title: "Professionalism",
    description:
      "Our team is trained, certified, and committed to delivering the highest quality service every single time.",
  },
];

const team = [
  {
    name: "Mohammed Shafqat",
    role: "Founder & CEO",
    description: "10+ years in vehicle recovery and transport industry",
    image: mockImageData.teamProfiles.founder,
  },
  {
    name: "Ahmed Khan",
    role: "Operations Manager",
    description: "Expert in fleet management and logistics",
    image: mockImageData.teamProfiles.operations,
  },
  {
    name: "Rashid Ali",
    role: "Lead Recovery Specialist",
    description: "Certified heavy vehicle recovery professional",
    image: mockImageData.teamProfiles.specialist,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.hero.about}
            alt="24/7 UAE Recovery Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Team That <span className="text-orange-500">Never Sleeps</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            50+ specialists. 15+ recovery vehicles. One mission: getting you safely back on the road, any time, anywhere in the UAE.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                How One Stranded Driver Inspired a Company
              </h2>
              <div className="space-y-4 text-zinc-600">
                <p>
                  In 2019, our founder spent 3 hours waiting for a recovery truck 
                  on Emirates Road. The experience was frustrating, expensive, and 
                  completely avoidable. That night, 24/7 UAE Recovery was born.
                </p>
                <p>
                  We started with a single flatbed truck and a promise: no driver 
                  in Dubai should ever feel abandoned on the roadside. Today, our 
                  15-truck fleet handles over 800 recoveries monthly, with an average 
                  arrival time under 25 minutes.
                </p>
                <p>
                  What hasn&apos;t changed? Our obsession with speed, safety, and 
                  treating every stranded motorist like family. Because we remember 
                  exactly how it feels to be the one waiting.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={images.fleet.flatbedTruck}
                  alt="24/7 UAE Recovery Fleet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Since 2020
                </h3>
                <p className="text-zinc-300">
                  Serving Dubai & UAE with Pride
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-300 mb-6">
                To be the most trusted and reliable vehicle recovery service in the UAE, 
                providing peace of mind to every driver on the road.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-zinc-300">
                To revolutionize the roadside assistance industry in the Middle East 
                through technology, professionalism, and unwavering commitment to customer satisfaction.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Driven by Purpose, Powered by Passion
              </h2>
              <p className="text-zinc-600 mb-6">
                Every day, we wake up with one goal: to get you back on the road safely. 
                Being stranded is stressful, but knowing that help is just a phone call 
                away makes all the difference.
              </p>
              <div className="space-y-4">
                {[
                  "Customer-first approach in everything we do",
                  "Continuous investment in modern equipment",
                  "Ongoing training for our recovery specialists",
                  "Building long-term relationships with our clients",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              15+ Specialized Vehicles Ready to Dispatch
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Every truck has GPS tracking, professional equipment, and a trained operator. Most importantly: they&apos;re already on the road.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: images.fleet.flatbedTruck,
                title: "Flatbed Trucks",
                count: "6+",
                desc: "For luxury & sports vehicle transport",
              },
              {
                image: images.fleet.recoveryTruck,
                title: "Recovery Trucks",
                count: "8+",
                desc: "Wheel-lift and hook recovery units",
              },
              {
                image: images.fleet.heavyRecovery,
                title: "Heavy Recovery",
                count: "3+",
                desc: "For trucks up to 25 tons capacity",
              },
              {
                image: images.services.offRoadRecovery,
                title: "Desert Units",
                count: "2+",
                desc: "Specialized off-road recovery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-2xl font-bold text-orange-500">{item.count}</div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-zinc-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              From One Truck to 15: Our Growth Story
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { year: "2020", title: "Founded", desc: "Started with 1 recovery truck and a dream to help stranded motorists" },
              { year: "2021", title: "Expansion", desc: "Expanded fleet to 5 vehicles, added flatbed service" },
              { year: "2022", title: "Coverage Growth", desc: "Extended coverage to Sharjah, Ajman, and Abu Dhabi" },
              { year: "2023", title: "500+ Recoveries", desc: "Milestone of 500 successful vehicle recoveries achieved" },
              { year: "2024", title: "Tech Upgrade", desc: "Launched GPS tracking and real-time status updates" },
              { year: "2025", title: "Premium Service", desc: "Introduced luxury vehicle specialist recovery services" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-orange-500 font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-orange-500" />
                  {i < 5 && <div className="w-0.5 h-full bg-orange-200" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-zinc-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What We Promise Every Customer
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              These aren&apos;t just corporate values - they&apos;re promises we make to every stranded driver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200"
              >
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-zinc-200">
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                  What Sets Us Apart
                </h3>
                <div className="space-y-4">
                  {[
                    "24/7 availability - we never close",
                    "Fast response times across Dubai",
                    "Fully licensed and insured operations",
                    "Modern, well-maintained equipment",
                    "Trained and certified professionals",
                    "Transparent pricing - no hidden fees",
                    "Multilingual support team",
                    "GPS-tracked fleet for real-time updates",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-zinc-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Why Choose 24/7 UAE Recovery?
              </h2>
              <p className="text-zinc-600 mb-6">
                When you&apos;re stranded on the road, you need a recovery
                service you can trust. Here&apos;s why thousands of customers
                choose us:
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                    >
                      {["M", "A", "K", "R"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600">
                    10,000+ happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Dedicated professionals committed to getting you back on the road
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-orange-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-zinc-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Licensed, Certified & Insurance Approved
            </h3>
            <p className="text-zinc-600 text-sm">
              We partner with all major insurance providers in the UAE
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "RTA Licensed", icon: CheckCircle2 },
              { label: "Insurance Approved", icon: Shield },
              { label: "ISO Certified", icon: CheckCircle2 },
              { label: "Dubai Economy", icon: CheckCircle2 },
              { label: "GPS Tracked", icon: MapPin },
              { label: "Multi-Language", icon: Globe },
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-zinc-200">
                <cert.icon className="w-5 h-5 text-orange-500" />
                <span className="text-zinc-700 font-medium text-sm">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Best Recovery Service?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for immediate assistance or to learn more about our
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
