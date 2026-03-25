import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  MessageCircle,
  Mail,
  MapPin,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";
import { mockImageData } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog | Car Recovery Tips & UAE Driving Guides | 24/7 UAE Recovery",
  description:
    "Expert tips on car maintenance, breakdown prevention, UAE driving guides, and roadside safety. Stay informed with our car recovery blog.",
  keywords: [
    "car maintenance tips Dubai",
    "UAE driving guide",
    "breakdown prevention tips",
    "roadside safety UAE",
    "vehicle care blog",
    "towing service blog",
    "car recovery tips",
    "Dubai driving tips",
  ],
  openGraph: {
    title: "Blog | Car Recovery Tips & UAE Driving Guides",
    description: "Expert tips on car maintenance, breakdown prevention, and UAE driving guides.",
    url: "https://247uaerecovery.ae/blog",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/blog",
  },
};

const blogCategories = [
  { id: "all", name: "All Posts" },
  { id: "maintenance", name: "Car Maintenance" },
  { id: "safety", name: "Road Safety" },
  { id: "tips", name: "Driving Tips" },
  { id: "emergency", name: "Emergency Guide" },
  { id: "news", name: "Company News" },
];

const featuredPost = {
  id: 1,
  title: "10 Essential Summer Car Care Tips for UAE Drivers",
  excerpt: "With temperatures soaring above 50°C, your car needs extra attention. Here's how to protect your vehicle from the UAE's extreme summer heat and avoid breakdowns.",
  image: mockImageData.blog.summerCare,
  category: "maintenance",
  author: "Ahmed Khan",
  date: "February 28, 2026",
  readTime: "8 min read",
  slug: "summer-car-care-tips-uae",
};

const blogPosts = [
  {
    id: 2,
    title: "What to Do When Your Car Breaks Down in Dubai",
    excerpt: "Step-by-step guide on staying safe and getting help when stranded on UAE roads. Essential knowledge for every driver.",
    image: mockImageData.blog.breakdownGuide,
    category: "emergency",
    author: "Mohammed Shafqat",
    date: "February 25, 2026",
    readTime: "5 min read",
    slug: "car-breakdown-guide-dubai",
  },
  {
    id: 3,
    title: "Understanding UAE Towing Laws & Regulations",
    excerpt: "Know your rights and responsibilities when it comes to vehicle towing in the UAE. RTA regulations explained.",
    image: mockImageData.blog.towingLaws,
    category: "tips",
    author: "Legal Team",
    date: "February 20, 2026",
    readTime: "6 min read",
    slug: "uae-towing-laws-regulations",
  },
  {
    id: 4,
    title: "How to Choose the Right Recovery Service",
    excerpt: "Not all towing services are created equal. Here's what to look for when choosing a car recovery company in Dubai.",
    image: mockImageData.blog.chooseService,
    category: "tips",
    author: "Ahmed Khan",
    date: "February 15, 2026",
    readTime: "4 min read",
    slug: "choose-recovery-service-dubai",
  },
  {
    id: 5,
    title: "Desert Driving Safety: A Complete Guide",
    excerpt: "Planning a desert adventure? Learn essential safety tips, recovery techniques, and what to pack before heading off-road.",
    image: mockImageData.blog.desertSafety,
    category: "safety",
    author: "Rashid Ali",
    date: "February 10, 2026",
    readTime: "10 min read",
    slug: "desert-driving-safety-guide",
  },
  {
    id: 6,
    title: "Signs Your Car Battery is About to Die",
    excerpt: "Don't get stranded with a dead battery. Here are the warning signs to watch for and how to extend battery life in UAE's climate.",
    image: mockImageData.blog.batterySigns,
    category: "maintenance",
    author: "Technical Team",
    date: "February 5, 2026",
    readTime: "5 min read",
    slug: "car-battery-warning-signs",
  },
  {
    id: 7,
    title: "New Fleet Expansion: Heavy Recovery Capabilities",
    excerpt: "We've added two new heavy-duty rotator recovery trucks to our fleet, capable of recovering vehicles up to 25 tons.",
    image: mockImageData.blog.fleetExpansion,
    category: "news",
    author: "PR Team",
    date: "January 30, 2026",
    readTime: "3 min read",
    slug: "new-heavy-recovery-fleet",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto pt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Recovery Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tips, Guides & <span className="text-orange-500">Expert Advice</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Stay informed with our expert tips on car maintenance, driving safety in UAE, 
            emergency procedures, and the latest industry news.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 bg-zinc-50 border-b border-zinc-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="w-5 h-5 text-zinc-500 flex-shrink-0" />
            {blogCategories.map((category) => (
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

      {/* Featured Post */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Featured Article</h2>
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:py-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium capitalize">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-zinc-600 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <span className="font-medium text-zinc-900">{featuredPost.author}</span>
                  </div>
                  <span className="flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-zinc-800 text-xs font-medium px-3 py-1 rounded-full capitalize">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm text-zinc-600">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Load More Articles
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-zinc-400 mb-8">
            Get the latest car care tips, driving guides, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-zinc-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-white/90 mb-8">
            Our recovery team is standing by 24/7 across all UAE emirates.
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
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
