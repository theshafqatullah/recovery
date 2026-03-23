import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Phone,
  Users,
  Briefcase,
  ChevronRight,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Heart,
  Shield,
  Award,
  Zap,
  DollarSign,
  Coffee,
  Car,
  GraduationCap,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Careers | Join Our Recovery Team | 24/7 UAE Recovery",
  description:
    "Join Dubai's leading car recovery team. We're hiring recovery drivers, dispatchers, and mechanics. Competitive salary, training provided, and growth opportunities.",
  keywords: [
    "tow truck driver jobs Dubai",
    "recovery driver vacancy UAE",
    "towing company jobs",
    "mechanic jobs Dubai",
    "dispatcher jobs UAE",
    "vehicle recovery careers",
    "roadside assistance jobs",
    "driving jobs Dubai",
  ],
  openGraph: {
    title: "Careers | Join Our Recovery Team",
    description: "Join Dubai's leading car recovery team. Competitive salary and growth opportunities.",
    url: "https://247uaerecovery.ae/careers",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/careers",
  },
};

const benefits = [
  { icon: DollarSign, title: "Competitive Salary", desc: "Above market rates plus overtime pay" },
  { icon: Shield, title: "Health Insurance", desc: "Medical coverage for you and family" },
  { icon: Car, title: "Company Vehicle", desc: "Fuel card provided for drivers" },
  { icon: Coffee, title: "Meal Allowance", desc: "Daily meal allowance for field staff" },
  { icon: GraduationCap, title: "Training", desc: "Paid training and certifications" },
  { icon: Calendar, title: "Paid Leave", desc: "Annual leave plus paid sick days" },
  { icon: Award, title: "Performance Bonus", desc: "Monthly and annual incentives" },
  { icon: Globe, title: "Visa Sponsorship", desc: "Work visa for qualified candidates" },
];

const openPositions = [
  {
    id: 1,
    title: "Recovery Truck Driver",
    department: "Operations",
    location: "Dubai",
    type: "Full-time",
    experience: "2+ years driving experience",
    salary: "AED 4,500 - 6,500 /month",
    urgent: true,
    description: "Operate flatbed and recovery trucks to rescue stranded vehicles across Dubai and UAE. Must have UAE driving license.",
    requirements: [
      "Valid UAE heavy vehicle license",
      "2+ years commercial driving experience",
      "Clean driving record",
      "Fluent in English or Arabic",
      "Willing to work shifts including nights",
    ],
  },
  {
    id: 2,
    title: "Heavy Vehicle Recovery Specialist",
    department: "Operations",
    location: "Dubai / Abu Dhabi",
    type: "Full-time",
    experience: "5+ years experience",
    salary: "AED 7,000 - 10,000 /month",
    urgent: true,
    description: "Specialized recovery of heavy vehicles, trucks, and buses using rotator and heavy-duty equipment.",
    requirements: [
      "Heavy vehicle recovery certification",
      "5+ years heavy recovery experience",
      "Experience with 25+ ton recovery",
      "Leadership skills",
      "Available for emergency calls",
    ],
  },
  {
    id: 3,
    title: "Dispatch Coordinator",
    department: "Operations Center",
    location: "Dubai (Office)",
    type: "Full-time",
    experience: "1+ years customer service",
    salary: "AED 4,000 - 5,500 /month",
    urgent: false,
    description: "Manage incoming rescue calls, dispatch nearest vehicles, and coordinate recovery operations via GPS system.",
    requirements: [
      "Excellent communication skills",
      "Multi-language preferred (EN/AR/HI/UR)",
      "Computer literate",
      "Calm under pressure",
      "Rotating shifts (24/7 operations)",
    ],
  },
  {
    id: 4,
    title: "Vehicle Mechanic",
    department: "Workshop",
    location: "Al Quoz, Dubai",
    type: "Full-time",
    experience: "3+ years experience",
    salary: "AED 3,500 - 5,000 /month",
    urgent: false,
    description: "Maintain and repair our fleet of recovery vehicles. Diagnose and fix mechanical, electrical, and hydraulic systems.",
    requirements: [
      "Automotive certification preferred",
      "3+ years mechanic experience",
      "Knowledge of diesel engines",
      "Hydraulic systems experience a plus",
      "Own tools preferred",
    ],
  },
  {
    id: 5,
    title: "Roadside Assistance Technician",
    department: "Field Services",
    location: "Dubai",
    type: "Full-time",
    experience: "1+ years experience",
    salary: "AED 3,500 - 4,500 /month",
    urgent: false,
    description: "Provide roadside assistance including battery jump starts, tyre changes, fuel delivery, and minor repairs.",
    requirements: [
      "Valid UAE driving license",
      "Basic automotive knowledge",
      "Customer service oriented",
      "Physically fit",
      "Flexible with working hours",
    ],
  },
];

const values = [
  {
    icon: Zap,
    title: "Speed & Urgency",
    desc: "Every minute matters when someone is stranded. We move fast.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "We treat every customer like family. Empathy first.",
  },
  {
    icon: Shield,
    title: "Safety Always",
    desc: "No shortcuts. We prioritize safety of our team and customers.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    desc: "We support each other. Success is a team effort.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.team.teamWorking}
            alt="Join Our Recovery Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium">We're Hiring</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Build Your Career
              <span className="text-orange-500"> Helping Others</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-xl">
              Join Dubai's fastest-growing recovery team. We're building a crew of skilled, 
              compassionate professionals who take pride in rescuing stranded motorists 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#positions"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                View Open Positions
              </a>
              <a
                href="mailto:careers@247uaerecovery.ae"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Send Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-orange-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-white/80">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-white/80">Emirates Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-white/80">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-white/80">Employee Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                What We Stand For
              </h2>
              <p className="text-zinc-600 mb-8">
                Our team culture is built on these core values. If these resonate with you, you'll fit right in.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <div key={i} className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
                    <value.icon className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="font-bold text-zinc-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-zinc-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={images.team.mechanic}
                alt="Our Team at Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We take care of our team so they can take care of our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-200 text-center">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-zinc-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Open Positions
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Ready to join our team? Check out our current openings below.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden hover:border-orange-500 transition-colors"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-zinc-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Urgent Hire
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-500">{job.salary}</div>
                      <div className="text-sm text-zinc-500">{job.experience}</div>
                    </div>
                  </div>
                  <p className="text-zinc-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.map((req, i) => (
                      <span key={i} className="bg-white text-zinc-600 text-sm px-3 py-1 rounded-full border border-zinc-200">
                        {req}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:careers@247uaerecovery.ae?subject=Application: ${job.title}`}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our hiring process is simple and straightforward.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit Application", desc: "Send your CV to careers@247uaerecovery.ae or apply through job listings" },
              { step: "02", title: "Initial Screening", desc: "Our HR team will review your application within 3 business days" },
              { step: "03", title: "Interview", desc: "If shortlisted, we'll invite you for an in-person or video interview" },
              { step: "04", title: "Welcome Aboard", desc: "Receive offer letter, complete onboarding, and start your new career" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700 text-center h-full">
                  <div className="bg-orange-500 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Send us your CV and let's start a conversation about your future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@247uaerecovery.ae"
              className="flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              careers@247uaerecovery.ae
            </a>
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%27m%20interested%20in%20job%20opportunities"
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
