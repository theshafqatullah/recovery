import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Truck,
  Phone,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  MessageCircle,
  Mail,
  MapPin,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { mockImageData } from "@/lib/images";

// Blog post data
const blogPosts = [
  {
    slug: "summer-car-care-tips-uae",
    title: "10 Essential Summer Car Care Tips for UAE Drivers",
    excerpt: "With temperatures soaring above 50°C, your car needs extra attention. Here's how to protect your vehicle from the UAE's extreme summer heat and avoid breakdowns.",
    image: mockImageData.blog.summerCare,
    category: "maintenance",
    author: "Ahmed Khan",
    authorRole: "Operations Manager",
    date: "February 28, 2026",
    readTime: "8 min read",
    content: `
## Why Summer Car Care Matters in UAE

The UAE's summer temperatures regularly exceed 50°C (122°F), making it one of the harshest environments for vehicles in the world. Without proper care, your car's battery, tires, engine, and cooling system can fail unexpectedly.

## 1. Check Your Battery Regularly

Heat is the number one killer of car batteries. In extreme temperatures, battery fluid evaporates faster, leading to internal damage.

**What to do:**
- Have your battery tested monthly during summer
- Check for corrosion on terminals
- Ensure the battery is securely mounted
- Replace batteries older than 3 years

## 2. Maintain Proper Coolant Levels

Your engine's cooling system works overtime in UAE summers. A failing cooling system can lead to overheating within minutes.

**What to do:**
- Check coolant levels weekly
- Use the manufacturer-recommended coolant mix
- Inspect hoses for cracks or bulges
- Flush the system every 2 years

## 3. Monitor Tire Pressure

Hot pavement can increase tire pressure significantly, leading to blowouts. Under-inflated tires are equally dangerous.

**What to do:**
- Check tire pressure in the morning when tires are cool
- Follow the manufacturer's recommended PSI
- Inspect tires for cracks, bulges, or worn treads
- Rotate tires every 10,000 km

## 4. Protect Your Car's Interior

UV rays can damage your dashboard, seats, and steering wheel. Extreme heat inside a parked car can reach 80°C.

**What to do:**
- Use a windshield sunshade
- Park in shaded areas when possible
- Apply UV protectant to dashboard
- Consider window tinting (within legal limits)

## 5. Check Air Conditioning System

A failing A/C system in UAE summer isn't just uncomfortable—it's dangerous.

**What to do:**
- Have A/C serviced before summer
- Replace cabin air filter annually
- Check for weak airflow or warm air
- Listen for unusual noises

## 6. Use the Right Engine Oil

High temperatures require oil that maintains viscosity. Check your owner's manual for summer recommendations.

## 7. Keep Emergency Kit Updated

Your summer emergency kit should include:
- Extra water (at least 4 liters)
- Sunscreen and hat
- Phone charger/power bank
- Emergency contact numbers
- First aid kit

## 8. Check Belts and Hoses

Heat accelerates rubber degradation. A broken belt or hose can leave you stranded.

## 9. Top Up All Fluids

- Engine oil
- Transmission fluid
- Brake fluid
- Power steering fluid
- Windshield washer fluid

## 10. Don't Ignore Warning Lights

Any warning light in summer should be addressed immediately. What might be a minor issue in winter can become a breakdown in summer heat.

## Need Help? We're Here 24/7

If you do experience a breakdown this summer, 24/7 UAE Recovery is standing by across all emirates. Call +971 50 464 5696 for immediate assistance.
    `,
  },
  {
    slug: "car-breakdown-guide-dubai",
    title: "What to Do When Your Car Breaks Down in Dubai",
    excerpt: "Step-by-step guide on staying safe and getting help when stranded on UAE roads. Essential knowledge for every driver.",
    image: mockImageData.blog.breakdownGuide,
    category: "emergency",
    author: "Mohammed Shafqat",
    authorRole: "Founder & CEO",
    date: "February 25, 2026",
    readTime: "5 min read",
    content: `
## Stay Calm and Stay Safe

A breakdown is stressful, but panicking makes things worse. Here's exactly what to do when your car stops on Dubai roads.

## Step 1: Get Off the Road Safely

- Signal and move to the hard shoulder or emergency lane
- If on a highway, move as far right as possible
- Turn on hazard lights immediately
- Put the car in park and apply parking brake

## Step 2: Make Yourself Visible

- Place warning triangle 50-100m behind your car
- On highways, use a longer distance (200m)
- Turn on interior light at night
- Wear reflective vest if available

## Step 3: Exit the Vehicle Safely

- Exit from the passenger side (away from traffic)
- Move behind safety barriers if available
- Never stand directly behind or in front of your vehicle

## Step 4: Call for Help

**Emergency Numbers:**
- Police: 999
- Ambulance: 998
- 24/7 UAE Recovery: +971 50 464 5696

When calling, be ready to provide:
- Your exact location (use Google Maps)
- Direction of travel
- Vehicle type and color
- Nature of the problem

## Step 5: Stay Safe While Waiting

- Stay alert for traffic
- Don't attempt repairs on busy roads
- Keep phone charged
- Share your location with someone

## Common Breakdown Causes

1. **Flat Battery** - Most common in UAE heat
2. **Overheating** - Check coolant regularly
3. **Flat Tire** - High road temperatures accelerate wear
4. **Fuel Issues** - Don't let tank run too low
5. **Alternator Failure** - Warning signs include dim lights

## When to Call Police (999)

- You cannot move the vehicle off the road
- There's been an accident
- You feel unsafe
- Your vehicle is blocking traffic

## 24/7 UAE Recovery Is Here to Help

Our recovery team operates across all Dubai areas and UAE emirates. Average response time: 20-30 minutes. We handle everything from flat tires to full vehicle recovery.

**Call us anytime: +971 50 464 5696**
    `,
  },
  {
    slug: "uae-towing-laws-regulations",
    title: "Understanding UAE Towing Laws & Regulations",
    excerpt: "Know your rights and responsibilities when it comes to vehicle towing in the UAE. RTA regulations explained.",
    image: mockImageData.blog.towingLaws,
    category: "tips",
    author: "Legal Team",
    authorRole: "24/7 UAE Recovery",
    date: "February 20, 2026",
    readTime: "6 min read",
    content: `
## UAE Towing Regulations Overview

Understanding towing laws in the UAE protects you from scams and ensures you receive proper service. Here's what every driver should know.

## Licensed Towing Companies

In the UAE, towing companies must be licensed by relevant authorities:
- Dubai: Roads and Transport Authority (RTA)
- Abu Dhabi: Department of Municipalities and Transport
- Sharjah: Roads and Transport Authority

**Always ask for:**
- Company license number
- Driver identification
- Official receipt

## Your Rights During a Tow

You have the right to:
- Choose your own licensed towing service
- Receive a written estimate before towing
- Know where your vehicle will be taken
- Get an official receipt
- Have your vehicle towed to your preferred location

## Illegal Towing Practices

Watch out for:
- Unlicensed "recovery" vehicles
- Excessive fees without written quotes
- Refusing to provide documentation
- Taking your vehicle to unauthorized locations
- Demanding cash-only payment

## Insurance Coverage for Towing

Most comprehensive insurance policies include:
- Emergency roadside assistance
- Towing to nearest garage
- Basic roadside repairs

**Check your policy for:**
- Coverage limits (km or AED)
- Number of callouts per year
- Covered vehicles

## Police Involvement

Police must be involved when:
- There's been an accident
- Your vehicle blocks traffic
- Vehicle is being impounded
- You suspect theft

## RTA-Approved Towing Fees

While fees vary, RTA provides guidelines:
- Basic towing (within 10km): AED 150-250
- Additional per km: AED 5-10
- After-hours premium: Up to 25%
- Heavy vehicles: Higher rates apply

## Documentation to Keep

Always retain:
- Towing company details
- Driver's name and ID
- Written cost estimate
- Final receipt
- Photos of your vehicle condition

## Choosing 24/7 UAE Recovery

We are a fully licensed, RTA-compliant recovery service:
- Transparent pricing
- Written estimates
- Insurance-approved
- GPS-tracked fleet
- Official documentation provided

**Questions? Call us: +971 50 464 5696**
    `,
  },
  {
    slug: "choose-recovery-service-dubai",
    title: "How to Choose the Right Recovery Service",
    excerpt: "Not all towing services are created equal. Here's what to look for when choosing a car recovery company in Dubai.",
    image: mockImageData.blog.chooseService,
    category: "tips",
    author: "Ahmed Khan",
    authorRole: "Operations Manager",
    date: "February 15, 2026",
    readTime: "4 min read",
    content: `
## Why Choosing the Right Recovery Service Matters

When your car breaks down, you need help fast. But choosing the wrong recovery service can lead to vehicle damage, excessive fees, or long wait times.

## Key Factors to Consider

### 1. Licensing and Insurance

A reputable recovery service should be:
- Licensed by local transport authority
- Fully insured for vehicle damage
- Registered with local authorities

### 2. Response Time

In Dubai traffic, response time is crucial:
- Good services: 20-30 minutes in Dubai
- Average services: 45-60 minutes
- Avoid services that can't give estimates

### 3. Fleet Quality

Modern equipment matters:
- Flatbed trucks for luxury vehicles
- GPS tracking for accurate ETAs
- Well-maintained vehicles

### 4. Pricing Transparency

Before choosing:
- Ask for a written estimate
- Confirm there are no hidden fees
- Check if price includes VAT

### 5. 24/7 Availability

Breakdowns don't follow schedules:
- Confirm true 24/7 operation
- Check holiday availability
- Ask about response time at night

## Red Flags to Watch For

- Refusing to provide company details
- Cash-only payments
- Vague pricing
- No written documentation
- Unprofessional appearance

## Questions to Ask

1. "Are you licensed by RTA?"
2. "What's your estimated arrival time?"
3. "Can I get a written quote?"
4. "Where will you take my vehicle?"
5. "Do you accept insurance claims?"

## Why Choose 24/7 UAE Recovery

We check every box:
- RTA licensed and insured
- Average 25-minute response
- Modern GPS-tracked fleet
- Transparent pricing
- Insurance partnerships
- 4.9 customer rating

**Available 24/7: +971 50 464 5696**
    `,
  },
  {
    slug: "desert-driving-safety-guide",
    title: "Desert Driving Safety: A Complete Guide",
    excerpt: "Planning a desert adventure? Learn essential safety tips, recovery techniques, and what to pack before heading off-road.",
    image: mockImageData.blog.desertSafety,
    category: "safety",
    author: "Rashid Ali",
    authorRole: "Lead Recovery Specialist",
    date: "February 10, 2026",
    readTime: "10 min read",
    content: `
## Desert Driving in UAE: An Adventure with Risks

The UAE's deserts offer incredible off-road experiences, but unprepared drivers can quickly find themselves in danger. Here's your complete safety guide.

## Before You Go

### Vehicle Preparation

Your vehicle needs:
- 4x4 capability (essential)
- Good tire condition
- Full fuel tank
- Checked fluids
- Working A/C

### Required Equipment

Pack these essentials:
- Tire deflator
- Tire inflator/compressor
- Recovery straps/ropes
- Sand ladders/tracks
- Shovel
- First aid kit
- Plenty of water (4L per person minimum)
- Food supplies
- Fully charged phone
- Portable charger

### Tell Someone Your Plans

Always share:
- Your intended route
- Expected return time
- Number of vehicles
- Emergency contacts

## Driving Techniques

### Tire Pressure

Lower pressure increases the tire's "footprint" for better sand traction:
- Lower to 15-18 PSI for soft sand
- Re-inflate when back on pavement

### Momentum Matters

- Keep momentum going uphill
- Don't stop mid-slope
- Approach dunes at an angle

### Getting Unstuck

If stuck in sand:
1. Don't spin wheels (makes it worse)
2. Lower tire pressure further
3. Clear sand from around wheels
4. Use sand ladders if available
5. Try rocking back and forth

## When to Call for Help

Call for desert recovery when:
- Vehicle is deeply stuck
- You've been stuck for over 30 minutes
- You're running low on water
- Vehicle has mechanical failure
- You're unsure of your location

## 24/7 UAE Recovery Desert Services

Our specialized desert recovery team includes:
- 4x4 recovery vehicles
- Experienced off-road drivers
- GPS location tracking
- Full recovery equipment

We've rescued hundreds of vehicles from UAE deserts. Don't wait until you're in trouble—save our number.

**Desert Recovery Hotline: +971 50 464 5696**
    `,
  },
  {
    slug: "car-battery-warning-signs",
    title: "Signs Your Car Battery is About to Die",
    excerpt: "Don't get stranded with a dead battery. Here are the warning signs to watch for and how to extend battery life in UAE's climate.",
    image: mockImageData.blog.batterySigns,
    category: "maintenance",
    author: "Technical Team",
    authorRole: "24/7 UAE Recovery",
    date: "February 5, 2026",
    readTime: "5 min read",
    content: `
## UAE Heat: The Battery Killer

Car batteries in the UAE last about half as long as in temperate climates. Heat accelerates chemical reactions inside the battery, causing faster degradation.

## Warning Signs Your Battery is Failing

### 1. Slow Engine Crank

If the engine takes longer to start, your battery is weak. This is often the first sign.

### 2. Dashboard Warning Light

The battery-shaped icon on your dashboard shouldn't be ignored. Get it checked immediately.

### 3. Dim Headlights

If your headlights seem dimmer, especially at idle, your battery is struggling.

### 4. Electrical Issues

- Slow power windows
- Weak horn
- Dim interior lights
- Radio issues

### 5. Swollen Battery Case

Heat causes battery cases to swell. A bloated battery should be replaced immediately.

### 6. Old Age

In UAE conditions:
- Replace every 2-3 years (vs 4-5 in cooler climates)
- Check annually after year 2

### 7. Corrosion

White or blue buildup on terminals indicates a leak and chemical reaction.

## How to Extend Battery Life

1. **Park in shade** whenever possible
2. **Keep terminals clean** - remove corrosion regularly
3. **Avoid short trips** - they don't fully charge the battery
4. **Turn off electronics** when car is off
5. **Get regular checks** - monthly in summer

## What to Do If Your Battery Dies

1. Try a jump start (if safe)
2. Call for roadside assistance
3. Have battery tested before long trips

## 24/7 UAE Recovery Battery Service

We offer:
- Battery jump start: AED 75
- Battery testing: Free with any service
- New battery supply and fitting: From AED 250

**Need a jump? Call: +971 50 464 5696**
    `,
  },
  {
    slug: "new-heavy-recovery-fleet",
    title: "New Fleet Expansion: Heavy Recovery Capabilities",
    excerpt: "We've added two new heavy-duty rotator recovery trucks to our fleet, capable of recovering vehicles up to 25 tons.",
    image: mockImageData.blog.fleetExpansion,
    category: "news",
    author: "PR Team",
    authorRole: "24/7 UAE Recovery",
    date: "January 30, 2026",
    readTime: "3 min read",
    content: `
## Expanding Our Heavy Recovery Capabilities

We're excited to announce the addition of two new heavy-duty rotator recovery trucks to our fleet. This expansion significantly enhances our ability to handle complex recovery operations across the UAE.

## New Equipment Specifications

Our new rotator trucks feature:
- **25-ton recovery capacity**
- **360-degree rotating boom**
- **50-ton winch system**
- **Outriggers for stability**
- **LED light towers for night operations**
- **Full GPS tracking**

## What This Means for You

### Faster Heavy Vehicle Recovery

- Trucks, buses, and trailers
- Construction equipment
- Overturned vehicles
- Multi-vehicle accidents

### Complex Recovery Operations

- Vehicles in ditches or off-road
- Overturned trucks on highways
- Recovery from construction sites
- Vehicle extractions

## Our Growing Fleet

With this addition, our fleet now includes:
- **6** Standard flatbed trucks (up to 3 tons)
- **3** Heavy-duty recovery trucks (up to 15 tons)
- **2** Rotator recovery trucks (up to 25 tons)
- **4** Roadside service vans
- **2** Motorcycle trailers
- **2** Desert recovery 4x4s

**Total: 19 vehicles operating 24/7**

## Coverage Across UAE

Our heavy recovery services now cover:
- All major UAE highways
- Industrial areas
- Port and logistics zones
- Construction sites
- Remote locations

## Get in Touch

For heavy vehicle recovery or fleet emergencies, contact our dedicated heavy recovery team.

**24/7 Heavy Recovery: +971 50 464 5696**
    `,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
    return {
      title: `${post.title} | 24/7 UAE Recovery Blog`,
      description: post.excerpt,
      keywords: [
        post.category,
        "car recovery tips",
        "UAE driving guide",
        "vehicle maintenance",
        "roadside safety",
      ],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://247uaerecovery.ae/blog/${post.slug}`,
        images: [post.image],
        type: "article",
        siteName: "24/7 UAE Recovery",
        locale: "en_AE",
        publishedTime: post.date,
        authors: [post.author],
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | 24/7 UAE Recovery Blog`,
        description: post.excerpt,
        images: [post.image],
      },
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `https://247uaerecovery.ae/blog/${post.slug}`,
      },
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "24/7 UAE Recovery",
      logo: {
        "@type": "ImageObject",
        url: "https://247uaerecovery.ae/og-image.jpg",
      },
    },
    mainEntityOfPage: `https://247uaerecovery.ae/blog/${post.slug}`,
    datePublished: post.date,
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
              <Link href="/blog" className="text-orange-500 font-medium">Blog</Link>
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

      {/* Article Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-orange-500 mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-zinc-900">{post.author}</div>
                <div className="text-xs text-zinc-500">{post.authorRole}</div>
              </div>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            <article className="prose prose-lg prose-zinc max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-zinc-600 prose-li:text-zinc-600 prose-strong:text-zinc-900">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## (.*?)<br>/g, '<h2>$1</h2>').replace(/### (.*?)<br>/g, '<h3>$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- (.*?)<br>/g, '<li>$1</li>') }} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share */}
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Share
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="bg-orange-500 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need Help Now?</h3>
                <p className="text-white/80 text-sm mb-4">24/7 recovery across all UAE emirates</p>
                <a
                  href="tel:+971504645696"
                  className="flex items-center justify-center gap-2 bg-white text-orange-500 px-4 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +971 50 464 5696
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-orange-500 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-500 font-medium uppercase">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-bold text-zinc-900 mt-2 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-zinc-600 line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stranded? We're Here 24/7
          </h2>
          <p className="text-white/90 mb-8">
            Our recovery team is available around the clock across all UAE emirates.
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
                <Link href="/blog" className="block text-zinc-400 hover:text-orange-500">Blog</Link>
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
