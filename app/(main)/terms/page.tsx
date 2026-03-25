import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Service Agreement & Conditions",
  description:
    "Read the terms of service for 24/7 UAE Recovery. Understand our service agreement, payment terms, liability, and customer responsibilities for car recovery services.",
  keywords: [
    "terms of service car recovery",
    "towing service terms Dubai",
    "vehicle recovery agreement",
    "247 UAE recovery terms",
  ],
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
            <li>Phone: +971 56 977 3000</li>
            <li>Address: Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
