import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  AlertTriangle,
  Shield,
  CheckCircle2,
  MessageCircle,
  Mail,
  MapPin,
  Car,
  Sun,
  Moon,
  CircleDot,
  Thermometer,
  Eye,
  PhoneCall,
  Navigation,
  Triangle,
  Flashlight,
} from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Emergency Tips | Roadside Safety Guide | 24/7 UAE Recovery",
  description:
    "Essential roadside safety tips for UAE drivers. What to do when your car breaks down, accident procedures, desert safety, night breakdown tips, and emergency contacts.",
  keywords: [
    "car breakdown tips Dubai",
    "roadside safety UAE",
    "what to do car accident Dubai",
    "emergency driving tips",
    "desert driving safety",
    "UAE road emergency guide",
    "breakdown safety procedures",
    "car emergency checklist",
  ],
  openGraph: {
    title: "Emergency Tips | Roadside Safety Guide",
    description: "Essential roadside safety tips for UAE drivers. Stay safe during any breakdown.",
    url: "https://247uaerecovery.ae/emergency-tips",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/emergency-tips",
  },
};

const emergencySteps = [
  {
    icon: AlertTriangle,
    title: "Stay Calm & Move to Safety",
    description: "Pull off the road completely if possible. Turn on hazard lights immediately. If you can't move the car, get out and stand away from traffic.",
    important: true,
  },
  {
    icon: Triangle,
    title: "Set Warning Triangle",
    description: "Place warning triangle 50-100 meters behind your vehicle. On highways, place it further back (200m). This warns approaching traffic.",
    important: true,
  },
  {
    icon: Navigation,
    title: "Note Your Location",
    description: "Use your phone's maps app to get your exact location. Look for nearby landmarks, exit numbers, or highway markers.",
    important: false,
  },
  {
    icon: PhoneCall,
    title: "Call for Help",
    description: "Contact 24/7 UAE Recovery at +971 50 464 5696 or police emergency at 999, 901. Share your location via WhatsApp.",
    important: true,
  },
  {
    icon: Eye,
    title: "Stay Visible & Alert",
    description: "Wear reflective vest if available. Stay in a well-lit area at night. Keep phone charged and stay alert for traffic.",
    important: false,
  },
  {
    icon: Shield,
    title: "Wait in a Safe Place",
    description: "Wait outside the vehicle, behind barriers if available. Don't stand between vehicles. Stay where recovery team can see you.",
    important: false,
  },
];

const situationalTips = [
  {
    title: "Highway Breakdown",
    icon: Car,
    color: "orange",
    tips: [
      "Pull onto hard shoulder or emergency lane",
      "Keep hazard lights on at all times",
      "Exit from passenger side away from traffic",
      "Stand behind barriers, never on the road",
      "Call police if blocking traffic (999)",
    ],
  },
  {
    title: "Night Breakdown",
    icon: Moon,
    color: "indigo",
    tips: [
      "Keep interior light on for visibility",
      "Use phone flashlight to signal location",
      "Wear reflective clothing if possible",
      "Stay in well-lit areas when waiting",
      "Share live location with someone",
    ],
  },
  {
    title: "Desert/Off-road",
    icon: Sun,
    color: "yellow",
    tips: [
      "Stay with your vehicle - don't wander",
      "Preserve water and battery power",
      "Create shade using doors or blankets",
      "Signal for help with mirrors or lights",
      "Share your planned route before trips",
    ],
  },
  {
    title: "Accident Scene",
    icon: AlertTriangle,
    color: "red",
    tips: [
      "Check for injuries first - call 998 for ambulance",
      "Don't move injured unless in danger",
      "Take photos of scene, damages, plates",
      "Exchange details but don't admit fault",
      "Wait for police for official report",
    ],
  },
  {
    title: "Overheating Engine",
    icon: Thermometer,
    color: "red",
    tips: [
      "Pull over immediately and turn off A/C",
      "Let engine cool for 30+ minutes",
      "Never open radiator cap when hot",
      "Check coolant level once cooled",
      "Don't drive if temperature rises again",
    ],
  },
  {
    title: "Flat Tyre",
    icon: CircleDot,
    color: "zinc",
    tips: [
      "Find a flat, stable surface to stop",
      "Apply parking brake firmly",
      "Loosen nuts before jacking up car",
      "If unsafe to change, call for help",
      "Check spare pressure before using",
    ],
  },
];

const emergencyKit = [
  { item: "Warning triangle", essential: true },
  { item: "Reflective vest", essential: true },
  { item: "Flashlight with batteries", essential: true },
  { item: "First aid kit", essential: true },
  { item: "Bottled water (2L minimum)", essential: true },
  { item: "Phone charger/power bank", essential: true },
  { item: "Jump cables", essential: false },
  { item: "Basic tool kit", essential: false },
  { item: "Tyre inflator/sealant", essential: false },
  { item: "Sunshade for windscreen", essential: false },
  { item: "Tow rope", essential: false },
  { item: "Spare fuses", essential: false },
];

const emergencyContacts = [
  { name: "Police Emergency", number: "999", desc: "Accidents, emergencies" },
  { name: "Police Non-Emergency", number: "901", desc: "Minor incidents" },
  { name: "Ambulance", number: "998", desc: "Medical emergencies" },
  { name: "Civil Defense", number: "997", desc: "Fire, rescue" },
  { name: "24/7 UAE Recovery", number: "+971 50 464 5696", desc: "Vehicle recovery", highlight: true },
];

export default function EmergencyTipsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.locations.highway}
            alt="UAE Highway Safety"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-sm font-medium">Emergency Safety Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              What to Do When
              <span className="text-orange-500"> You're Stranded</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-xl">
              A breakdown or accident is stressful. These tips will keep you safe until help arrives. 
              Save this page to your phone - you never know when you might need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+971504645696"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Emergency: +971 50 464 5696
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              First 5 Minutes: What to Do
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Follow these steps immediately when your vehicle breaks down or you're in an accident.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySteps.map((step, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border-2 ${
                  step.important
                    ? "bg-orange-50 border-orange-500"
                    : "bg-zinc-50 border-zinc-200"
                }`}
              >
                <div className={`p-3 rounded-xl w-fit mb-4 ${
                  step.important ? "bg-orange-500" : "bg-zinc-200"
                }`}>
                  <step.icon className={`w-6 h-6 ${step.important ? "text-white" : "text-zinc-600"}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded">
                    Step {i + 1}
                  </span>
                  {step.important && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Critical
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situational Tips */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Situation-Specific Advice
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Different emergencies require different responses. Here's what to do in each situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {situationalTips.map((situation, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
                <div className={`p-4 bg-${situation.color}-500 flex items-center gap-3`} style={{backgroundColor: situation.color === 'orange' ? '#f97316' : situation.color === 'indigo' ? '#6366f1' : situation.color === 'yellow' ? '#eab308' : situation.color === 'red' ? '#ef4444' : '#71717a'}}>
                  <situation.icon className="w-6 h-6 text-white" />
                  <h3 className="font-bold text-white">{situation.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {situation.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Kit */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Essential Emergency Kit
              </h2>
              <p className="text-zinc-600 mb-8">
                Every vehicle in the UAE should carry these items. They could save your life in an emergency.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {emergencyKit.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      item.essential ? "bg-orange-50 border border-orange-200" : "bg-zinc-50 border border-zinc-200"
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${item.essential ? "text-orange-500" : "text-zinc-400"}`} />
                    <span className={`text-sm ${item.essential ? "font-medium text-zinc-900" : "text-zinc-600"}`}>
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500 mt-4">
                Items highlighted in orange are legally required or essential for safety in UAE.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={images.fleet.serviceVan}
                alt="Emergency Kit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Be Prepared</h3>
                <p className="text-sm text-zinc-300">
                  A well-stocked emergency kit can make the difference between a minor inconvenience and a dangerous situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Contact Numbers
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Save these numbers to your phone. In an emergency, every second counts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {emergencyContacts.map((contact, i) => (
              <a
                key={i}
                href={`tel:${contact.number.replace(/\s/g, '')}`}
                className={`rounded-2xl p-6 text-center transition-colors ${
                  contact.highlight
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
                }`}
              >
                <Phone className={`w-8 h-8 mx-auto mb-3 ${contact.highlight ? "text-white" : "text-orange-500"}`} />
                <h3 className="font-bold text-lg mb-1">{contact.name}</h3>
                <p className="text-2xl font-bold mb-2">{contact.number}</p>
                <p className={`text-sm ${contact.highlight ? "text-white/80" : "text-zinc-400"}`}>
                  {contact.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <Flashlight className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Save This Page</h2>
          <p className="text-zinc-600 mb-6">
            Bookmark this page or add it to your home screen. You'll have these safety tips available offline when you need them most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Add to Home Screen
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full font-medium border border-zinc-300 transition-colors">
              Share This Guide
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stranded Right Now? We're On Our Way.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our recovery team is available 24/7 across all UAE emirates.
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
              WhatsApp Location
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
