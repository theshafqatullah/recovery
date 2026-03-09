import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Camera,
  MapPin,
  Clock,
  ChevronRight,
  MessageCircle,
  Mail,
  Filter,
  Star,
} from "lucide-react";
import { images, mockImageData } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Recovery Operations Photos | 24/7 UAE Recovery",
  description:
    "View our gallery of recovery operations, fleet vehicles, and successful rescues across Dubai and UAE. Real photos from real recoveries.",
  keywords: [
    "car recovery photos Dubai",
    "towing service gallery",
    "vehicle recovery images",
    "tow truck photos UAE",
    "recovery operations pictures",
    "flatbed towing gallery",
  ],
  openGraph: {
    title: "Gallery | Recovery Operations Photos | 24/7 UAE Recovery",
    description: "View real photos from our recovery operations across Dubai and UAE.",
    url: "https://247uaerecovery.ae/gallery",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/gallery",
  },
};

const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "car-recovery", name: "Car Recovery" },
  { id: "heavy-vehicle", name: "Heavy Vehicle" },
  { id: "accident", name: "Accident Recovery" },
  { id: "desert", name: "Desert Recovery" },
  { id: "fleet", name: "Our Fleet" },
];

const galleryImages = [
  {
    id: 1,
    src: mockImageData.gallery.highwayRecovery,
    alt: "Car recovery operation on highway",
    category: "car-recovery",
    location: "Sheikh Zayed Road",
    featured: true,
  },
  {
    id: 2,
    src: mockImageData.gallery.flatbedOperation,
    alt: "Flatbed truck with recovered vehicle",
    category: "car-recovery",
    location: "Dubai Marina",
    featured: true,
  },
  {
    id: 3,
    src: mockImageData.gallery.heavyRecovery,
    alt: "Heavy truck recovery",
    category: "heavy-vehicle",
    location: "Jebel Ali",
    featured: true,
  },
  {
    id: 4,
    src: mockImageData.gallery.accidentScene,
    alt: "Accident recovery scene",
    category: "accident",
    location: "Al Barsha",
    featured: false,
  },
  {
    id: 5,
    src: mockImageData.gallery.desertRecovery,
    alt: "Desert 4x4 recovery",
    category: "desert",
    location: "Al Qudra Desert",
    featured: true,
  },
  {
    id: 6,
    src: mockImageData.gallery.nightRecovery,
    alt: "Night recovery operation",
    category: "car-recovery",
    location: "Downtown Dubai",
    featured: false,
  },
  {
    id: 7,
    src: mockImageData.gallery.serviceVan,
    alt: "Service van on location",
    category: "fleet",
    location: "Business Bay",
    featured: false,
  },
  {
    id: 8,
    src: mockImageData.gallery.sedan,
    alt: "Sedan recovery",
    category: "car-recovery",
    location: "JBR",
    featured: false,
  },
  {
    id: 9,
    src: mockImageData.gallery.luxury,
    alt: "Luxury car transport",
    category: "car-recovery",
    location: "Palm Jumeirah",
    featured: true,
  },
  {
    id: 10,
    src: mockImageData.gallery.sportsCar,
    alt: "Sports car recovery",
    category: "car-recovery",
    location: "DIFC",
    featured: false,
  },
  {
    id: 11,
    src: mockImageData.gallery.motorcycle,
    alt: "Motorcycle recovery",
    category: "car-recovery",
    location: "Al Quoz",
    featured: false,
  },
  {
    id: 12,
    src: mockImageData.gallery.desertRoad,
    alt: "Desert road recovery",
    category: "desert",
    location: "Hatta Road",
    featured: false,
  },
];

export default function GalleryPage() {
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
              <Link href="/gallery" className="text-orange-500 font-medium">Gallery</Link>
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
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto pt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Camera className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Recovery Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Recoveries. <span className="text-orange-500">Real Results.</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Browse through our gallery of actual recovery operations across Dubai and UAE. 
            Every photo represents a customer we helped get back on the road.
          </p>
          <div className="flex items-center justify-center gap-8 text-zinc-400">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-orange-500" />
              <span>500+ Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>All UAE Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-500" />
              <span>10,000+ Recoveries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-zinc-50 border-b border-zinc-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-zinc-500 flex-shrink-0" />
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category.id === "all"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-zinc-600 hover:bg-orange-100 hover:text-orange-600 border border-zinc-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Featured Recoveries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter((img) => img.featured)
              .map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-zinc-300 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {image.location}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Photos */}
      <section className="py-12 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">All Recovery Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                  <p className="text-zinc-300 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Load More Photos
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-zinc-400">Successful Recoveries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-zinc-400">Photos Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">7</div>
              <div className="text-zinc-400">Emirates Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-zinc-400">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Add Your Recovery to Our Gallery?
          </h2>
          <p className="text-white/90 mb-8">
            Just kidding - we hope you never need us! But if you do, we are here 24/7.
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
                Professional car recovery and towing services in Dubai and UAE.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-zinc-400 hover:text-orange-500">Home</Link>
                <Link href="/services" className="block text-zinc-400 hover:text-orange-500">Services</Link>
                <Link href="/gallery" className="block text-zinc-400 hover:text-orange-500">Gallery</Link>
                <Link href="/about" className="block text-zinc-400 hover:text-orange-500">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-zinc-400 text-sm">
                <p>Car Recovery</p>
                <p>Flatbed Towing</p>
                <p>Heavy Vehicle</p>
                <p>Roadside Assistance</p>
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
