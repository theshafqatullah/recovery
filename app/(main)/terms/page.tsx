import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Service Agreement & Conditions",
  description:
    "Read the terms of service for 24/7 UAE Recovery. Understand our service agreement, payment terms, liability, and customer responsibilities for car recovery services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - 24/7 UAE Recovery",
    description:
      "Understand our service agreement, payment terms, and conditions for car recovery and towing services in Dubai.",
    url: "https://247uaerecovery.ae/terms",
  },
  alternates: {
    canonical: "https://247uaerecovery.ae/terms",
  },
};

export default function TermsOfServicePage() {
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
              <Link
                href="/services"
                className="text-zinc-600 hover:text-orange-500 transition-colors"
              >
                Services
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

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Terms of Service
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
            1. Agreement to Terms
          </h2>
          <p className="text-zinc-600 mb-4">
            By using the services of 24/7 UAE Recovery (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, 
            please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            2. Services Provided
          </h2>
          <p className="text-zinc-600 mb-4">
            We provide vehicle recovery, towing, and roadside assistance services including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Car recovery and towing</li>
            <li>Accident recovery</li>
            <li>Flatbed towing</li>
            <li>Battery jump start</li>
            <li>Flat tyre change</li>
            <li>Fuel delivery</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            3. Service Request and Acceptance
          </h2>
          <p className="text-zinc-600 mb-4">
            When you contact us for service, you authorize us to perform the requested recovery 
            or roadside assistance. By requesting our services, you confirm that:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>You are the vehicle owner, authorized driver, or have authority to request service</li>
            <li>The information you provide is accurate and complete</li>
            <li>You accept the quoted price before service begins</li>
            <li>Payment will be made upon completion of service</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            4. Pricing and Payment
          </h2>
          <p className="text-zinc-600 mb-4">
            <strong>Quotation:</strong> We provide a price estimate before dispatching our service vehicle. 
            Final pricing is confirmed before service begins and may vary based on actual conditions encountered.
          </p>
          <p className="text-zinc-600 mb-4">
            <strong>Payment:</strong> Payment is due immediately upon completion of service. We accept cash, 
            credit/debit cards, and bank transfers. Failure to pay may result in a lien on the vehicle.
          </p>
          <p className="text-zinc-600 mb-4">
            <strong>Cancellation:</strong> If you cancel after our service vehicle has been dispatched, 
            a callout fee may apply.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            5. Customer Responsibilities
          </h2>
          <p className="text-zinc-600 mb-4">
            You agree to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Provide accurate location and vehicle information</li>
            <li>Ensure safe access to the vehicle for our recovery team</li>
            <li>Remove all valuable personal belongings before towing (we are not responsible for items left in vehicles)</li>
            <li>Provide valid identification when requested</li>
            <li>Sign any required service documentation</li>
            <li>Inform us of any special vehicle conditions or requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            6. Liability and Insurance
          </h2>
          <p className="text-zinc-600 mb-4">
            <strong>Our Insurance:</strong> We maintain comprehensive insurance coverage for vehicle 
            recovery operations. Your vehicle is protected against damage caused by our negligence 
            during recovery and transport.
          </p>
          <p className="text-zinc-600 mb-4">
            <strong>Limitations:</strong> We are not liable for:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Pre-existing vehicle damage or mechanical issues</li>
            <li>Damage resulting from inaccurate information provided by the customer</li>
            <li>Loss or damage to personal belongings left in the vehicle</li>
            <li>Delays caused by traffic, weather, or circumstances beyond our control</li>
            <li>Damage caused by your vehicle&apos;s condition (e.g., unsafe components)</li>
            <li>Consequential or indirect damages</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            7. Vehicle Condition
          </h2>
          <p className="text-zinc-600 mb-4">
            We may refuse service or require additional precautions if your vehicle:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Is in an unsafe location that poses risk to our staff</li>
            <li>Contains hazardous materials</li>
            <li>Has severe structural damage affecting safe recovery</li>
            <li>Exceeds our equipment capacity</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            8. Service Hours
          </h2>
          <p className="text-zinc-600 mb-4">
            We operate 24 hours a day, 7 days a week, 365 days a year. Response times may vary 
            based on location, traffic conditions, and service demand.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            9. Storage
          </h2>
          <p className="text-zinc-600 mb-4">
            If storage is required, daily storage fees will apply and will be communicated in advance. 
            Vehicles unclaimed for an extended period may be subject to disposal in accordance with 
            UAE law, with proper notification.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            10. Disputes
          </h2>
          <p className="text-zinc-600 mb-4">
            Any disputes arising from these terms or our services shall be governed by the laws 
            of the United Arab Emirates and subject to the jurisdiction of Dubai courts.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            11. Modifications
          </h2>
          <p className="text-zinc-600 mb-4">
            We reserve the right to modify these Terms of Service at any time. Continued use of 
            our services after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            12. Severability
          </h2>
          <p className="text-zinc-600 mb-4">
            If any provision of these terms is found to be unenforceable, the remaining provisions 
            will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
            13. Contact Information
          </h2>
          <p className="text-zinc-600 mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-4 space-y-2">
            <li>Email: legal@247uaerecovery.ae</li>
            <li>Phone: +971 50 464 5696</li>
            <li>Address: Dubai, United Arab Emirates</li>
          </ul>
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-zinc-400 hover:text-orange-500">Privacy Policy</Link>
                <Link href="/terms" className="block text-zinc-400 hover:text-orange-500">Terms of Service</Link>
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
