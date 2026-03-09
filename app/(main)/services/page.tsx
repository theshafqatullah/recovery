import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { images, servicePageImages } from "@/lib/images";
import {
  Truck,
  Phone,
  Car,
  Wrench,
  Battery,
  Fuel,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  Bike,
  Mountain,
  MapPin,
  FileText,
  Globe,
  Headphones,
  AlertTriangle,
  Zap,
  CircleDot,
  MessageSquare,
  Calendar,
  Mail,
  Key,
  Gem,
  Anchor,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recovery Services Dubai | Towing, Accident, Roadside - From AED 150",
  description:
    "Complete vehicle recovery services Dubai: car recovery AED 150+, accident recovery, flatbed towing, battery jump start AED 75, flat tyre AED 50, fuel delivery, heavy vehicle towing AED 500+. 24/7 service all UAE.",
  keywords: [
    "car recovery services Dubai",
    "towing services UAE",
    "accident recovery Dubai",
    "flatbed towing service Dubai",
    "battery jump start Dubai price",
    "flat tyre service Dubai",
    "fuel delivery service UAE",
    "roadside assistance Dubai",
    "motorcycle recovery Dubai",
    "heavy vehicle towing UAE",
    "off-road recovery service",
    "long distance towing UAE",
    "luxury car towing Dubai",
    "vehicle transport service",
    "breakdown recovery rates",
    "tow truck service Dubai",
    "car breakdown service near me",
    "emergency vehicle recovery",
  ],
  openGraph: {
    title: "Our Services - Car Recovery, Towing & Roadside Assistance",
    description:
      "Explore our comprehensive vehicle recovery services: car recovery, accident recovery, flatbed towing, battery jump start, and more. Available 24/7.",
    url: "https://247uaerecovery.ae/services",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/services",
  },
};

const primaryServices = [
  {
    id: "car-recovery",
    title: "Car Recovery",
    icon: Car,
    image: images.services.carRecovery,
    description:
      "Professional car recovery service for all types of vehicles. Whether your car has broken down, has a mechanical failure, or simply won't start, our team will safely recover and transport your vehicle.",
    features: [
      "24/7 availability",
      "All vehicle types supported",
      "Safe & secure handling",
      "GPS tracked fleet",
      "Insurance approved",
    ],
    price: "From AED 150",
    popular: true,
  },
  {
    id: "accident-recovery",
    title: "Accident Recovery",
    icon: Shield,
    image: images.services.accidentRecovery,
    description:
      "Emergency accident recovery services available round the clock. We work with police and insurance companies to safely remove accident-damaged vehicles from the scene.",
    features: [
      "Emergency response team",
      "Police coordination",
      "Insurance documentation",
      "Damage assessment",
      "Secure storage available",
    ],
    price: "From AED 200",
    popular: false,
  },
  {
    id: "flatbed-towing",
    title: "Flatbed Towing",
    icon: Truck,
    image: images.services.flatbedTowing,
    description:
      "Premium flatbed towing service ideal for luxury cars, sports vehicles, and low-clearance vehicles. Your car never touches the road during transport.",
    features: [
      "Zero-damage transport",
      "Ideal for luxury vehicles",
      "Low-clearance compatible",
      "Long-distance available",
      "Enclosed option available",
    ],
    price: "From AED 250",
    popular: true,
  },
];

const roadsideServices = [
  {
    id: "battery-jumpstart",
    title: "Battery Jump Start",
    icon: Battery,
    image: images.services.batteryJumpstart,
    description:
      "Dead battery? No problem! Our technicians will jump-start your vehicle on the spot so you can get back on the road within minutes.",
    features: [
      "Quick response",
      "All battery types",
      "Battery testing",
      "Replacement available",
      "No towing required",
    ],
    price: "From AED 80",
  },
  {
    id: "flat-tyre",
    title: "Flat Tyre Change",
    icon: Wrench,
    image: images.services.tyreChange,
    description:
      "Got a flat tyre? Our mobile technicians will come to your location and change your tyre with your spare, or provide a temporary solution to get you to the nearest garage.",
    features: [
      "On-site service",
      "Spare tyre fitting",
      "Tyre repair available",
      "Puncture repair",
      "New tyre supply",
    ],
    price: "From AED 80",
  },
  {
    id: "fuel-delivery",
    title: "Fuel Delivery",
    icon: Fuel,
    image: images.services.fuelDelivery,
    description:
      "Run out of fuel? We'll deliver emergency fuel to your location so you can continue your journey. Available for petrol and diesel vehicles.",
    features: [
      "Petrol & diesel",
      "Quick delivery",
      "Fair fuel pricing",
      "Safe handling",
      "Any location",
    ],
    price: "From AED 100",
  },
  {
    id: "key-lockout",
    title: "Key Lockout Service",
    icon: Key,
    image: servicePageImages.keyLockout.hero,
    description:
      "Locked your keys in the car? Our trained technicians can safely unlock your vehicle without causing any damage. Available 24/7 across UAE.",
    features: [
      "Non-destructive entry",
      "All car makes & models",
      "Smart key assistance",
      "Quick response time",
      "No damage guarantee",
    ],
    price: "From AED 100",
  },
];

const specialtyServices = [
  {
    id: "motorcycle-recovery",
    title: "Motorcycle Recovery",
    icon: Bike,
    image: images.services.motorcycleRecovery,
    description:
      "Specialized motorcycle recovery service for all types of bikes. From sports bikes to cruisers, we handle your motorcycle with care using proper strapping and securing techniques.",
    features: [
      "All motorcycle types",
      "Proper wheel chocks",
      "Secure strapping",
      "Careful handling",
      "Track bike transport",
    ],
    price: "From AED 120",
  },
  {
    id: "off-road-recovery",
    title: "Off-Road Recovery",
    icon: Mountain,
    image: images.services.offRoadRecovery,
    description:
      "Stuck in the desert or off-road terrain? Our specialized recovery vehicles can reach you anywhere. Perfect for desert adventures gone wrong or vehicles stuck in sand.",
    features: [
      "Desert recovery",
      "Sand extraction",
      "4x4 recovery vehicles",
      "Winch service",
      "Remote location access",
    ],
    price: "From AED 300",
  },
  {
    id: "heavy-vehicle",
    title: "Heavy Vehicle Recovery",
    icon: Truck,
    image: images.services.heavyVehicle,
    description:
      "Recovery service for heavy vehicles including trucks, buses, and commercial vehicles. We have the equipment and expertise to handle large vehicle recoveries safely.",
    features: [
      "Trucks & buses",
      "Commercial vehicles",
      "Heavy-duty equipment",
      "Traffic management",
      "Interstate transport",
    ],
    price: "From AED 500",
  },
  {
    id: "long-distance",
    title: "Long Distance Towing",
    icon: MapPin,
    image: images.services.longDistance,
    description:
      "Need to transport your vehicle between emirates or across the UAE? Our long-distance towing service offers safe and reliable inter-emirate vehicle transport.",
    features: [
      "Inter-emirate transport",
      "Competitive rates",
      "GPS tracking",
      "Scheduled pickups",
      "Door-to-door service",
    ],
    price: "From AED 400",
  },
  {
    id: "luxury-transport",
    title: "Luxury Car Transport",
    icon: Gem,
    image: servicePageImages.luxuryTransport.hero,
    description:
      "Premium enclosed transport for luxury, exotic, and sports cars. White-glove service with climate-controlled vehicles for your high-value automobiles.",
    features: [
      "Enclosed transport",
      "Climate controlled",
      "White-glove handling",
      "Ferrari, Lambo, Porsche",
      "Dealer-to-dealer transport",
    ],
    price: "From AED 400",
  },
  {
    id: "winch-service",
    title: "Winch Out Service",
    icon: Anchor,
    image: servicePageImages.winchService.hero,
    description:
      "Vehicle stuck in mud, sand, ditch, or any difficult position? Our powerful winch trucks can pull your vehicle out safely without causing damage.",
    features: [
      "Heavy-duty winching",
      "Mud & sand extraction",
      "Ditch recovery",
      "Embankment retrieval",
      "Damage-free extraction",
    ],
    price: "From AED 200",
  },
  {
    id: "vehicle-storage",
    title: "Secure Vehicle Storage",
    icon: Warehouse,
    image: servicePageImages.vehicleStorage.hero,
    description:
      "Need a safe place to store your vehicle after recovery? We offer secure, covered storage facilities for short and long-term vehicle storage.",
    features: [
      "24/7 CCTV surveillance",
      "Covered parking",
      "Short & long term",
      "Insurance coordination",
      "Easy vehicle release",
    ],
    price: "From AED 50/day",
  },
  {
    id: "cargo-transport",
    title: "Cargo & Equipment Transport",
    icon: Truck,
    image: servicePageImages.cargoTransport.hero,
    description:
      "Transport heavy machinery, equipment, and cargo across UAE. Our heavy-duty flatbed trucks handle construction equipment, containers, and oversized loads.",
    features: [
      "Construction equipment",
      "Container transport",
      "Oversized loads",
      "Machinery moving",
      "Licensed operators",
    ],
    price: "From AED 600",
  },
];

const additionalServices = [
  {
    title: "Insurance Claim Support",
    icon: FileText,
    description: "We assist with insurance documentation and claims processing for accident recovery.",
  },
  {
    title: "Police Clearance Assistance",
    icon: Shield,
    description: "Help with RTA accident reports and police clearance procedures.",
  },
  {
    title: "Multi-Language Support",
    icon: Globe,
    description: "Our team speaks Arabic, English, Hindi, and Urdu for better communication.",
  },
  {
    title: "24/7 Customer Support",
    icon: Headphones,
    description: "Round-the-clock phone and WhatsApp support for all your queries.",
  },
];

export default function ServicesPage() {
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.hero.services}
            alt="Vehicle Recovery Services in UAE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 py-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Serving Dubai & All UAE Emirates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Every Vehicle Problem <span className="text-orange-500">Solved</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-8">
            Flat battery? Tyre blowout? Engine won&apos;t start? Stuck in desert sand? 
            We&apos;ve handled 10,000+ roadside emergencies. Tell us your problem, 
            and we&apos;ll dispatch the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Insurance Approved
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              GPS Tracked Fleet
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Multi-Language Support
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              RTA Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Primary Recovery Services */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Full Recovery Fleet at Your Service
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Sedans, SUVs, luxury imports, or accident-damaged vehicles - our flatbed trucks transport them all without a scratch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 ${service.popular ? 'border-orange-500 relative' : 'border-zinc-200'} transition-all group`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-orange-500 rounded-xl">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-zinc-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                    <span className="text-lg font-bold text-orange-500">
                      {service.price}
                    </span>
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center gap-1 text-zinc-600 hover:text-orange-500 transition-colors text-sm font-medium"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadside Assistance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Roadside Assistance
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Quick fixes to get you back on the road without towing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadsideServices.map((service) => (
              <div
                key={service.id}
                className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-green-500 rounded-xl">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                    <span className="text-lg font-bold text-green-600">
                      {service.price}
                    </span>
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center gap-1 text-zinc-600 hover:text-orange-500 transition-colors text-sm font-medium"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Specialty Services
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Specialized recovery solutions for unique situations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500 transition-all group"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 bg-purple-500 rounded-lg">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-purple-600 mb-3">
                    {service.price}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Emergency CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Emergency Service Available
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Stranded Right Now? We&apos;re On Our Way!
          </h2>
          <p className="text-white/90 mb-6">
            Don&apos;t wait on the roadside. Call us now and we&apos;ll be there in 30 minutes or less!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Emergency!%20I%20need%20vehicle%20recovery"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Additional Support Services
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Going beyond recovery - complete customer support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200"
              >
                <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 text-center mb-12">
            Why Choose 24/7 UAE Recovery?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                desc: "20-30 minutes average arrival time across Dubai",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Complete coverage for your vehicle during recovery",
              },
              {
                icon: Truck,
                title: "Modern Fleet",
                desc: "Flatbed trucks, wheel lifts, heavy-duty equipment",
              },
              {
                icon: Globe,
                title: "Multi-Language",
                desc: "Arabic, English, Hindi & Urdu speaking team",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white border border-zinc-200"
              >
                <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              From your call to delivery - here&apos;s how we work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Call or WhatsApp",
                desc: "Contact our 24/7 hotline. Share your location and describe your situation.",
                iconComponent: Phone,
              },
              {
                step: "2",
                title: "Get a Quote",
                desc: "Receive an instant quote based on your location and service needed.",
                iconComponent: MessageSquare,
              },
              {
                step: "3",
                title: "We Arrive",
                desc: "Our nearest truck is dispatched. Track our arrival in real-time.",
                iconComponent: Truck,
              },
              {
                step: "4",
                title: "Vehicle Secured",
                desc: "Your vehicle is safely recovered and transported to your destination.",
                iconComponent: CheckCircle2,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-zinc-200 relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="p-3 bg-orange-100 rounded-xl mb-4 mt-2 inline-block">
                  <item.iconComponent className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency vs Standard */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Emergency vs. Scheduled Service
            </h2>
            <p className="text-zinc-600">
              Choose the service type that fits your situation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
              <div className="p-3 bg-red-100 rounded-xl mb-4 inline-block">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                Emergency Service
              </h3>
              <p className="text-zinc-600 mb-6">
                For immediate assistance when you&apos;re stranded on the road
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Immediate dispatch",
                  "Priority response",
                  "Available 24/7/365",
                  "Highway & roadside assistance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+971504645696"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="p-3 bg-blue-100 rounded-xl mb-4 inline-block">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                Scheduled Service
              </h3>
              <p className="text-zinc-600 mb-6">
                For planned vehicle transport from one location to another
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Book in advance",
                  "Flexible scheduling",
                  "Discounted rates",
                  "Long-distance available",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/971504645696"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                Transparent Pricing
              </h2>
              <p className="text-zinc-600">
                No hidden fees. No surprises. Prices based on competitor research.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-3 px-4 font-semibold text-zinc-900">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-zinc-900">Starting Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-zinc-900">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Car Recovery (within city)", price: "AED 150 - 350", response: "20-30 min" },
                    { service: "Flatbed Towing", price: "AED 200 - 500", response: "25-35 min" },
                    { service: "Accident Recovery", price: "AED 200 - 400", response: "ASAP" },
                    { service: "Long Distance (inter-emirate)", price: "AED 400 - 800+", response: "Scheduled" },
                    { service: "Battery Jump Start", price: "AED 80 - 150", response: "15-25 min" },
                    { service: "Flat Tyre Change", price: "AED 80 - 150", response: "15-25 min" },
                    { service: "Fuel Delivery", price: "AED 100 - 200", response: "20-30 min" },
                    { service: "Motorcycle Recovery", price: "AED 120 - 250", response: "20-30 min" },
                    { service: "Off-Road / Desert Recovery", price: "AED 300 - 600", response: "30-45 min" },
                    { service: "Heavy Vehicle Recovery", price: "AED 500 - 1500+", response: "45-60 min" },
                    { service: "Luxury Car Transport", price: "AED 300 - 600", response: "Scheduled" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100">
                      <td className="py-3 px-4 text-zinc-700">{row.service}</td>
                      <td className="py-3 px-4 text-orange-500 font-semibold">{row.price}</td>
                      <td className="py-3 px-4 text-zinc-600">{row.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-zinc-500 mt-6 text-center">
              * Final prices depend on exact location, vehicle type, time of service, and complexity. Get an instant quote by calling us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Service FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What types of vehicles can you recover?",
                a: "We handle all vehicle types: sedans, SUVs, sports cars, luxury vehicles, vans, motorcycles, and heavy commercial vehicles up to 25 tons. Our diverse fleet includes flatbeds, wheel lift trucks, and heavy-duty recovery vehicles.",
              },
              {
                q: "Do you offer inter-emirate towing?",
                a: "Yes! We provide long-distance towing across all UAE emirates - Dubai to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Competitive rates for scheduled transports.",
              },
              {
                q: "Is my vehicle insured during transport?",
                a: "Absolutely. All vehicles are fully insured during recovery and transport. We provide comprehensive liability coverage and work with all major insurance companies in the UAE.",
              },
              {
                q: "Do you help with police and insurance paperwork?",
                a: "Yes, we provide full support for accident recovery including RTA accident reports, police clearance assistance, and insurance claim documentation. We coordinate directly with insurance companies when needed.",
              },
              {
                q: "What languages does your team speak?",
                a: "Our team speaks Arabic, English, Hindi, and Urdu to ensure clear communication with all customers across the diverse UAE community.",
              },
              {
                q: "Can you recover vehicles from off-road or desert locations?",
                a: "Yes! We have specialized 4x4 recovery vehicles equipped with winches and sand extraction equipment. We can reach remote desert locations and recover stuck vehicles safely.",
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
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
            >
              View All FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Service Now?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us now for immediate assistance. We&apos;re available 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20vehicle%20recovery%20assistance"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4" />
          </Link>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-white/20">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Zap className="w-4 h-4" /> 30-Min Response
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Shield className="w-4 h-4" /> Insurance Approved
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Globe className="w-4 h-4" /> Multi-Language Support
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4" /> All 7 Emirates
            </span>
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
