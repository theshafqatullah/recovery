import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Clock,
  MapPin,
  Shield,
  Star,
  ChevronRight,
  Zap,
  Car,
  AlertTriangle,
  Battery,
  Fuel,
  Bike,
  Mountain,
  CheckCircle2,
  MessageCircle,
  Globe,
  FileText,
  Mail,
  CircleDot,
} from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "24/7 Car Recovery Dubai | Towing Services UAE - AED 150 | Fast Response",
  description:
    "Emergency car recovery in Dubai from AED 150. 24/7 towing, accident recovery, flatbed service, roadside assistance across all UAE. GPS tracked fleet, 15-30 min response. Insurance approved. Call +971 50 464 5696",
  keywords: [
    "car recovery Dubai",
    "towing service Dubai",
    "24/7 recovery service UAE",
    "emergency towing Dubai",
    "roadside assistance Dubai",
    "breakdown recovery Dubai",
    "vehicle towing UAE",
    "flatbed towing Dubai",
    "accident recovery UAE",
    "car towing near me Dubai",
    "tow truck Dubai",
    "vehicle breakdown service",
    "car recovery near me",
    "towing service near me UAE",
    "خدمة سحب السيارات دبي",
    "recovery service Abu Dhabi",
    "Sharjah car recovery",
    "Ajman towing service",
  ],
  openGraph: {
    title: "24/7 Car Recovery & Towing Services in Dubai | UAE Recovery",
    description:
      "Need emergency car recovery in Dubai? Fast, reliable towing and roadside assistance across Dubai & UAE. 30-min response time.",
    url: "https://247uaerecovery.ae",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">
                24/7 UAE Recovery
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-orange-500 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-100"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-zinc-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="text-zinc-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-zinc-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                Contact
              </Link>
            </div>
            <a
              href="tel:+971504645696"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-all hover:scale-105 btn-shine animate-pulse-glow"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in-down animate-on-load" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <Zap className="w-4 h-4 text-orange-500 animate-bounce-soft" />
                <span className="text-orange-500 text-sm font-medium">
                  Rapid Response Team Standing By
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Stranded in Dubai?
                <span className="animate-gradient-text"> We&apos;ll Reach You</span> in 30 Minutes
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-xl animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                When your car breaks down at 2 AM on Sheikh Zayed Road, every minute feels like an hour. 
                Our GPS-tracked recovery fleet is dispatched instantly to your exact location. 
                No waiting. No stress. Just professional help, fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all animate-pulse-glow btn-shine hover:scale-105"
                >
                  <Phone className="w-5 h-5 animate-wiggle" />
                  Call for Recovery
                </a>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20 hover:scale-105 hover:border-orange-500/50"
                >
                  Our Services
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right animate-on-load" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden hover-scale">
                <Image
                  src={images.hero.main}
                  alt="24/7 UAE Recovery - Professional Car Recovery Service"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default animate-fade-in-up animate-on-load" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                      <div className="text-2xl font-bold text-orange-500 stat-glow">500+</div>
                      <div className="text-zinc-400 text-xs">Recovered</div>
                    </div>
                    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                      <div className="text-2xl font-bold text-orange-500 stat-glow">30</div>
                      <div className="text-zinc-400 text-xs">Min ETA</div>
                    </div>
                    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default animate-fade-in-up animate-on-load" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                      <div className="text-2xl font-bold text-orange-500 stat-glow">24/7</div>
                      <div className="text-zinc-400 text-xs">Available</div>
                    </div>
                    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default animate-fade-in-up animate-on-load" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                      <div className="text-2xl font-bold text-orange-500 stat-glow">4.9</div>
                      <div className="text-zinc-400 text-xs">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-6 bg-orange-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3 text-white group cursor-default hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 group-hover:animate-spin-slow" />
              <span className="font-medium text-sm md:text-base">24/7 Service</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 group-hover:animate-bounce-soft" />
              <span className="font-medium text-sm md:text-base">All UAE Emirates</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 group-hover:animate-bounce-soft" />
              <span className="font-medium text-sm md:text-base">Insurance Approved</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default hover:scale-110 transition-transform">
              <Star className="w-5 h-5 group-hover:animate-spin-slow" />
              <span className="font-medium text-sm md:text-base">RTA Compliant</span>
            </div>
            <div className="flex items-center gap-3 text-white group cursor-default hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 group-hover:animate-spin-slow" />
              <span className="font-medium text-sm md:text-base">AR • EN • HI • UR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Whatever the Problem, We Have the Solution
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Dead battery at Dubai Mall parking? Flat tyre on Emirates Road? Luxury car needs careful transport? 
              Our 50+ trained specialists handle 10,000+ recoveries yearly across all 7 Emirates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Car Recovery",
                desc: "Rapid response for breakdown or stranded vehicles",
                icon: "car",
                link: "/services/car-recovery",
                image: images.services.carRecovery,
              },
              {
                title: "Accident Recovery",
                desc: "Safe removal with police clearance coordination",
                icon: "alert",
                link: "/services/accident-recovery",
                image: images.services.accidentRecovery,
              },
              {
                title: "Flatbed Towing",
                desc: "Secure transport for luxury & sports vehicles",
                icon: "truck",
                link: "/services/flatbed-towing",
                image: images.services.flatbedTowing,
              },
              {
                title: "Battery Jump Start",
                desc: "Dead battery? Back on the road in minutes",
                icon: "battery",
                link: "/services/battery-jumpstart",
                image: images.services.batteryJumpstart,
              },
              {
                title: "Flat Tyre",
                desc: "Professional roadside tyre service",
                icon: "tyre",
                link: "/services/flat-tyre",
                image: images.services.tyreChange,
              },
              {
                title: "Fuel Delivery",
                desc: "Emergency fuel when you run out",
                icon: "fuel",
                link: "/services/fuel-delivery",
                image: images.services.fuelDelivery,
              },
              {
                title: "Motorcycle Recovery",
                desc: "Specialized bike & scooter recovery",
                icon: "bike",
                link: "/services/motorcycle-recovery",
                image: images.services.motorcycleRecovery,
              },
              {
                title: "Desert Recovery",
                desc: "Off-road & sand dune rescue specialists",
                icon: "mountain",
                link: "/services/off-road-recovery",
                image: images.services.offRoadRecovery,
              },
            ].map((service, i) => {
              const iconMap: Record<string, React.ReactNode> = {
                car: <Car className="w-7 h-7 text-white" />,
                alert: <AlertTriangle className="w-7 h-7 text-white" />,
                truck: <Truck className="w-7 h-7 text-white" />,
                battery: <Battery className="w-7 h-7 text-white" />,
                tyre: <CircleDot className="w-7 h-7 text-white" />,
                fuel: <Fuel className="w-7 h-7 text-white" />,
                bike: <Bike className="w-7 h-7 text-white" />,
                mountain: <Mountain className="w-7 h-7 text-white" />,
              };
              return (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500 transition-all duration-300 group card-tilt hover-glow"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent group-hover:from-zinc-900/70 transition-all" />
                  <div className="absolute bottom-3 left-3 bg-orange-500 p-2 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{iconMap[service.icon]}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
          
          {/* Specialty Services Banner */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Link href="/services/heavy-vehicle" className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="relative h-48">
                <Image
                  src={images.services.heavyVehicle}
                  alt="Heavy Vehicle Recovery"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 group-hover:from-slate-900/95 transition-all" />
                <div className="absolute inset-0 p-6 flex items-center">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Truck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-orange-200 transition-colors">Heavy Vehicle Recovery</h3>
                      <p className="text-slate-300 text-sm">Trucks, buses & trailers up to 25 tons</p>
                    </div>
                    <ChevronRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services/long-distance" className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="relative h-48">
                <Image
                  src={images.services.longDistance}
                  alt="Long Distance Transport"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50 group-hover:from-blue-900/95 transition-all" />
                <div className="absolute inset-0 p-6 flex items-center">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-orange-200 transition-colors">Inter-Emirate Transport</h3>
                      <p className="text-blue-200 text-sm">Long-distance vehicle transport across UAE</p>
                    </div>
                    <ChevronRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all btn-shine hover:scale-105 hover:gap-3 animate-pulse-glow"
            >
              View All Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Help Arrives in 3 Simple Steps
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              No apps to download. No complicated booking. Just call, and our nearest truck is on its way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Call Us",
                desc: "Call our 24/7 emergency hotline or send us a WhatsApp message with your exact location.",
                icon: "phone",
              },
              {
                step: "02",
                title: "We Dispatch",
                desc: "Our nearest GPS-tracked recovery vehicle is dispatched immediately to your location.",
                icon: "truck",
              },
              {
                step: "03",
                title: "You're Rescued",
                desc: "Our certified team arrives, safely recovers your vehicle, and you're on your way!",
                icon: "check",
              },
            ].map((item, i) => {
              const stepIconMap: Record<string, React.ReactNode> = {
                phone: <Phone className="w-10 h-10 text-orange-500" />,
                truck: <Truck className="w-10 h-10 text-orange-500" />,
                check: <CheckCircle2 className="w-10 h-10 text-orange-500" />,
              };
              return (
              <div key={i} className="relative group">
                <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 text-center h-full hover-lift hover:border-orange-300 transition-all duration-300">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{stepIconMap[item.icon]}</div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-300">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 mt-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600">
                    {item.desc}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-orange-500 animate-bounce-soft" />
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 px-4 bg-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">
                Need Immediate Assistance? We&apos;re Standing By 24/7
              </h3>
              <p className="text-sm text-zinc-300">
                Available across all UAE Emirates • Arabic, English, Hindi, Urdu
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+971504645696"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium transition-all btn-shine hover:scale-105 animate-pulse-glow"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20help"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              4.9-Star Rating from 2,800+ Verified Reviews
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              When you&apos;re stranded, trust matters. Here&apos;s what real customers say after we rescued them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Ahmed Al Maktoum",
              role: "Business Owner",
              text: "My car broke down on Sheikh Zayed Road at midnight. They arrived in just 20 minutes! Incredibly professional service.",
              rating: 5,
              avatar: images.avatars.avatar1,
            },
            {
              name: "Sarah Johnson",
              role: "Expat Resident",
              text: "Best recovery service in Dubai. Fair pricing, fast response, and the driver was very helpful. Highly recommend!",
              rating: 5,
              avatar: images.avatars.avatar2,
            },
            {
              name: "Mohammed Rashid",
              role: "Taxi Driver",
              text: "I use their services whenever my vehicle has issues. Always reliable, always on time. They&apos;ve never let me down.",
              rating: 5,
              avatar: images.avatars.avatar3,
            },
          ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover-lift hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-current animate-wiggle" style={{ animationDelay: `${j * 100}ms` }} />
                  ))}
                </div>
                <p className="text-zinc-600 mb-6 italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-orange-500">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors">
                      {review.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                From Downtown Dubai to the Al Ain Border
              </h2>
              <p className="text-zinc-600 mb-8">
                Broken down on the Palm Jumeirah? Stuck in desert sand near Hatta? 
                Our 15-truck fleet covers every highway, backroad, and off-road location 
                in the UAE. Share your location on WhatsApp, and we&apos;ll find you.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Dubai",
                  "Abu Dhabi",
                  "Sharjah",
                  "Ajman",
                  "Ras Al Khaimah",
                  "Fujairah",
                  "Umm Al Quwain",
                  "Al Ain",
                ].map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-zinc-700 hover:text-orange-500 cursor-default transition-colors group"
                  >
                    <MapPin className="w-4 h-4 text-orange-500 group-hover:animate-bounce-soft" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default">
                  GPS Tracked Fleet
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default">
                  Inter-Emirate Service
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default">
                  Highway Coverage
                </span>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all group"
              >
                View All Coverage Areas
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden hover-scale">
              <div className="relative h-[450px]">
                <Image
                  src={images.locations.dubai}
                  alt="Dubai UAE - Recovery Service Coverage"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Serving UAE Since 2020
                  </h3>
                  <p className="text-zinc-300 mb-6">
                    Trusted by thousands across all emirates
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default">
                    <div className="text-xl font-bold text-orange-500 stat-glow">15+</div>
                    <div className="text-xs text-zinc-300">Recovery Trucks</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default">
                    <div className="text-xl font-bold text-orange-500 stat-glow">50+</div>
                    <div className="text-xs text-zinc-300">Team Members</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default">
                    <div className="text-xl font-bold text-orange-500 stat-glow">10K+</div>
                    <div className="text-xs text-zinc-300">Recoveries</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover-lift cursor-default">
                    <div className="text-xl font-bold text-orange-500 stat-glow">4</div>
                    <div className="text-xs text-zinc-300">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Built Different: Why 10,000+ Customers Choose Us
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We don&apos;t just tow cars. We turn a stressful breakdown into a 
              smooth, professional experience you&apos;ll actually recommend to friends.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "shield",
                title: "Insurance Approved",
                desc: "We work with all major insurance providers in UAE for seamless claims",
              },
              {
                icon: "mappin",
                title: "GPS Tracked Fleet",
                desc: "Real-time tracking so you know exactly when help will arrive",
              },
              {
                icon: "globe",
                title: "Multi-Language Support",
                desc: "Arabic, English, Hindi & Urdu speaking staff available 24/7",
              },
              {
                icon: "file",
                title: "Police Clearance Help",
                desc: "Full assistance with accident documentation and police reports",
              },
              {
                icon: "zap",
                title: "30-Min Response",
                desc: "Average response time of 30 minutes or less in Dubai",
              },
              {
                icon: "mountain",
                title: "Desert Recovery",
                desc: "Specialized equipment for off-road and sand dune rescues",
              },
              {
                icon: "truck",
                title: "Heavy Vehicles",
                desc: "Capacity to recover trucks and buses up to 25 tons",
              },
              {
                icon: "check",
                title: "RTA Compliant",
                desc: "Fully licensed and compliant with all UAE regulations",
              },
            ].map((item, i) => {
              const whyIconMap: Record<string, React.ReactNode> = {
                shield: <Shield className="w-8 h-8 text-orange-500" />,
                mappin: <MapPin className="w-8 h-8 text-orange-500" />,
                globe: <Globe className="w-8 h-8 text-orange-500" />,
                file: <FileText className="w-8 h-8 text-orange-500" />,
                zap: <Zap className="w-8 h-8 text-orange-500" />,
                mountain: <Mountain className="w-8 h-8 text-orange-500" />,
                truck: <Truck className="w-8 h-8 text-orange-500" />,
                check: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
              };
              return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-zinc-200 text-center hover-lift hover:border-orange-300 transition-all duration-300 group"
              >
                <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">{whyIconMap[item.icon]}</div>
                <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600">
                  {item.desc}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Questions Before You Call?
            </h2>
            <p className="text-zinc-600">
              Here are the answers our dispatchers give most often.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can you reach me?",
                a: "Our average response time is 20-30 minutes within Dubai. For other emirates, response times may vary but typically within 45-60 minutes.",
              },
              {
                q: "What types of vehicles do you recover?",
                a: "We recover all vehicles: sedans, SUVs, sports cars, luxury vehicles, motorcycles, vans, heavy trucks up to 25 tons, and even vehicles stuck in desert sand.",
              },
              {
                q: "Do you provide inter-emirate transport?",
                a: "Yes! We offer long-distance vehicle transport between all UAE emirates. Dubai to Abu Dhabi, Sharjah, RAK, Fujairah or any other emirate.",
              },
              {
                q: "Can you help with insurance claims?",
                a: "Absolutely! We're an insurance-approved service provider and can assist with documentation, police reports, and coordination with your insurance company.",
              },
              {
                q: "What languages do your staff speak?",
                a: "Our team speaks Arabic, English, Hindi, and Urdu to serve our diverse community across the UAE.",
              },
              {
                q: "Do you recover motorcycles?",
                a: "Yes! We have specialized equipment for motorcycle recovery including sports bikes, cruisers, adventure bikes, and scooters. Prices start from AED 120.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-orange-300 hover:bg-white transition-all duration-300 hover-lift group"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t Sit Stranded. Help is One Call Away.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Every minute on the roadside is a minute of stress and wasted time. 
            Our recovery driver could be loading your car right now. Call us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+971504645696"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-all btn-shine hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-wiggle" />
              +971 50 464 5696
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20vehicle%20recovery%20assistance"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-all hover:gap-3 group"
          >
            Or fill out our contact form
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-white/20">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 hover:scale-105 transition-all cursor-default">
              <Zap className="w-4 h-4" /> 30-Min Response
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 hover:scale-105 transition-all cursor-default">
              <Shield className="w-4 h-4" /> Insurance Approved
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 hover:scale-105 transition-all cursor-default">
              <Globe className="w-4 h-4" /> AR • EN • HI • UR
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 hover:scale-105 transition-all cursor-default">
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
              <div className="flex items-center gap-2 mb-4 group cursor-default">
                <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold group-hover:text-orange-500 transition-colors">24/7 UAE Recovery</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Professional car recovery and towing services in Dubai and UAE.
                Available 24/7 for all your vehicle recovery needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all">Home</Link>
                <Link href="/services" className="block text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all">Services</Link>
                <Link href="/locations" className="block text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all">Locations</Link>
                <Link href="/about" className="block text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all">About Us</Link>
                <Link href="/contact" className="block text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Car Recovery</p>
                <p>Accident Recovery</p>
                <p>Flatbed Towing</p>
                <p>Battery Jump Start</p>
                <p>Flat Tyre Service</p>
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
