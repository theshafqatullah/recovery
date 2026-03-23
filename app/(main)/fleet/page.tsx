import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Shield,
  Gauge,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Zap,
  Award,
  Mail,
  Wrench,
  Settings,
  MessageCircle,
} from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Recovery Fleet | 15+ GPS Tracked Vehicles | 24/7 UAE Recovery",
  description:
    "Explore our modern fleet of 15+ recovery vehicles: flatbed trucks, heavy-duty recovery, service vans, and specialized equipment. GPS tracked, regularly maintained, and ready 24/7.",
  keywords: [
    "tow truck fleet Dubai",
    "recovery vehicles UAE",
    "flatbed towing truck",
    "heavy vehicle recovery truck",
    "GPS tracked tow trucks",
    "modern recovery fleet",
    "towing equipment Dubai",
    "professional recovery vehicles",
  ],
  openGraph: {
    title: "Our Recovery Fleet | 15+ GPS Tracked Vehicles",
    description:
      "Modern fleet of 15+ recovery vehicles ready 24/7 across UAE.",
    url: "https://247uaerecovery.ae/fleet",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/fleet",
  },
};

const fleetVehicles = [
  {
    id: 1,
    name: "Standard Flatbed Recovery",
    type: "Flatbed Truck",
    capacity: "Up to 3 tons",
    description: "Perfect for sedans, SUVs, and small vans. Hydraulic tilt bed for safe loading without dragging.",
    features: ["Hydraulic tilt bed", "Winch system", "LED work lights", "GPS tracking"],
    image: images.fleet.flatbedTruck,
    count: 6,
  },
  {
    id: 2,
    name: "Heavy-Duty Recovery Truck",
    type: "Heavy Recovery",
    capacity: "Up to 15 tons",
    description: "For trucks, buses, and heavy vehicles. Equipped with powerful winches and stabilizers.",
    features: ["Dual winch system", "Outriggers", "Air brakes", "GPS tracking"],
    image: images.fleet.heavyRecovery,
    count: 3,
  },
  {
    id: 3,
    name: "Super Heavy Recovery",
    type: "Rotator Recovery",
    capacity: "Up to 25 tons",
    description: "Our most powerful unit for semi-trucks, trailers, and complex recovery operations.",
    features: ["360° rotation", "50-ton winch", "Multi-point lift", "GPS tracking"],
    image: images.fleet.recoveryTruck,
    count: 2,
  },
  {
    id: 4,
    name: "Roadside Service Van",
    type: "Service Vehicle",
    capacity: "Tools & Equipment",
    description: "Fully equipped for on-site repairs: battery jump, tyre change, fuel delivery, and minor fixes.",
    features: ["Jump starter", "Tyre equipment", "Fuel can", "GPS tracking"],
    image: images.fleet.serviceVan,
    count: 4,
  },
  {
    id: 5,
    name: "Motorcycle Trailer",
    type: "Specialized",
    capacity: "Up to 3 bikes",
    description: "Purpose-built trailer for motorcycles with secure tie-down points and protective padding.",
    features: ["Wheel chocks", "Soft tie straps", "Ramp system", "GPS tracking"],
    image: images.vehicles.motorcycle,
    count: 2,
  },
  {
    id: 6,
    name: "Desert Recovery 4x4",
    type: "Off-Road",
    capacity: "Recovery equipment",
    description: "Built for sand dunes and desert terrain. High-clearance 4x4 with snorkel and recovery gear.",
    features: ["4x4 drivetrain", "Sand tires", "Snatch straps", "GPS tracking"],
    image: images.locations.desert,
    count: 2,
  },
];

const fleetStats = [
  { value: "15+", label: "Recovery Vehicles", icon: Truck },
  { value: "24/7", label: "Available", icon: Clock },
  { value: "100%", label: "GPS Tracked", icon: MapPin },
  { value: "Weekly", label: "Maintenance", icon: Wrench },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.fleet.flatbedTruck}
            alt="Our Recovery Fleet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Truck className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium">Modern Recovery Fleet</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              15+ Recovery Vehicles
              <span className="text-orange-500"> Ready to Roll</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-xl">
              From compact cars to 25-ton trucks, our modern fleet handles any recovery challenge. 
              GPS tracked, professionally maintained, and strategically positioned across Dubai and UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+971504645696"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Request Recovery
              </a>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-white/20"
              >
                View Services
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-8 px-4 bg-orange-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fleetStats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-white">
                <stat.icon className="w-6 h-6" />
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Vehicles */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Our Recovery Fleet
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Every vehicle in our fleet is regularly serviced, GPS tracked, and operated by trained professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden border border-zinc-200 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                        {vehicle.type}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                        {vehicle.count} units
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{vehicle.name}</h3>
                  <p className="text-zinc-600 text-sm mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-orange-500 font-medium text-sm mb-4">
                    <Gauge className="w-4 h-4" />
                    Capacity: {vehicle.capacity}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why Our Fleet Stands Out
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Real-Time GPS Tracking",
                    desc: "Every vehicle is GPS tracked so we can dispatch the nearest unit and give you accurate arrival times.",
                  },
                  {
                    icon: Settings,
                    title: "Weekly Maintenance",
                    desc: "Our vehicles undergo weekly inspections and preventive maintenance to ensure reliability.",
                  },
                  {
                    icon: Shield,
                    title: "Insurance Compliant",
                    desc: "All vehicles are fully insured and meet UAE regulatory requirements for recovery operations.",
                  },
                  {
                    icon: Award,
                    title: "Modern Equipment",
                    desc: "Latest hydraulic systems, winches, and safety equipment for damage-free recovery.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl h-fit">
                      <feature.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">{feature.title}</h3>
                      <p className="text-zinc-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={images.fleet.recoveryTruck}
                  alt="GPS Tracked Recovery Fleet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 text-white mb-3">
                      <Zap className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold">Live Fleet Status</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-green-500/20 rounded-lg p-2">
                        <div className="text-green-400 font-bold">12</div>
                        <div className="text-xs text-zinc-300">Available</div>
                      </div>
                      <div className="bg-orange-500/20 rounded-lg p-2">
                        <div className="text-orange-400 font-bold">3</div>
                        <div className="text-xs text-zinc-300">On Route</div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-2">
                        <div className="text-blue-400 font-bold">0</div>
                        <div className="text-xs text-zinc-300">Maintenance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Recovery Equipment
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Beyond our vehicles, we carry specialized equipment for every recovery scenario.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Hydraulic Winches", desc: "Up to 50-ton pulling capacity for heavy recovery" },
              { name: "Air Bags", desc: "Lift overturned vehicles safely without damage" },
              { name: "Wheel Dollies", desc: "Move locked or damaged wheels without dragging" },
              { name: "Soft Slings", desc: "Protect luxury vehicles during lift operations" },
              { name: "Snatch Blocks", desc: "Double winch power for difficult terrain" },
              { name: "Go-Jacks", desc: "Maneuver vehicles in tight parking spaces" },
              { name: "Sand Ladders", desc: "Desert recovery extraction equipment" },
              { name: "Light Towers", desc: "Illuminate night-time recovery operations" },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
                <div className="bg-orange-500/20 p-2 rounded-lg w-fit mb-3">
                  <Settings className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Our Fleet Right Now?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our nearest vehicle could be at your location in as little as 15 minutes.
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

    </div>
  );
}
