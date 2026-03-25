import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy",
  description:
    "Read 24/7 UAE Recovery's privacy policy. Learn how we collect, use, and protect your personal information when you use our car recovery and towing services.",
  keywords: [
    "privacy policy car recovery",
    "data protection UAE",
    "towing service privacy",
    "247 UAE recovery privacy",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - 24/7 UAE Recovery",
    description:
      "Learn how we collect, use, and protect your personal information when you use our car recovery services.",
    url: "https://247uaerecovery.ae/privacy",
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-600">
            Last updated: March 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-zinc">
          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Introduction
          </h2>
          <p className="text-zinc-600 mb-4">
            24/7 UAE Recovery (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you use our vehicle recovery and towing services or visit our website.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
            Personal Information
          </h3>
          <p className="text-zinc-600 mb-4">
            When you request our services, we may collect:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Name and contact information (phone number, email address)</li>
            <li>Location data (pickup and delivery addresses)</li>
            <li>Vehicle information (make, model, license plate)</li>
            <li>Payment information (processed securely by our payment providers)</li>
            <li>Service history and preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <p className="text-zinc-600 mb-4">
            When you visit our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-zinc-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Provide our vehicle recovery and towing services</li>
            <li>Communicate with you about your service request</li>
            <li>Process payments and send receipts</li>
            <li>Improve our services and customer experience</li>
            <li>Send service updates and promotional offers (with your consent)</li>
            <li>Comply with legal obligations</li>
            <li>Coordinate with insurance companies when requested by you</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Information Sharing
          </h2>
          <p className="text-zinc-600 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Our service personnel to fulfill your service request</li>
            <li>Payment processors for transaction processing</li>
            <li>Insurance companies when you request assistance with claims</li>
            <li>Law enforcement or government agencies when required by law</li>
            <li>Third-party service providers who assist our operations (under confidentiality agreements)</li>
          </ul>
          <p className="text-zinc-600 mb-4">
            We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-zinc-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Data Retention
          </h2>
          <p className="text-zinc-600 mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or 
            permitted by law. Service records may be retained for up to 7 years for legal and 
            business purposes.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-zinc-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information (subject to legal retention requirements)</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
          <p className="text-zinc-600 mb-4">
            To exercise these rights, please contact us at privacy@247uaerecovery.ae
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Cookies
          </h2>
          <p className="text-zinc-600 mb-4">
            Our website uses cookies to improve your browsing experience. You can control cookie 
            preferences through your browser settings. Disabling cookies may affect some website 
            functionality.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Third-Party Links
          </h2>
          <p className="text-zinc-600 mb-4">
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices of these websites. We encourage you to read their privacy 
            policies.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-zinc-600 mb-4">
            Our services are not intended for individuals under 18 years of age. We do not 
            knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-zinc-600 mb-4">
            We may update this Privacy Policy from time to time. The updated version will be 
            indicated by the &quot;Last updated&quot; date at the top of this page. We encourage you 
            to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-zinc-600 mb-4">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Email: privacy@247uaerecovery.ae</li>
            <li>Phone: +971 56 977 3000</li>
            <li>Address: Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
