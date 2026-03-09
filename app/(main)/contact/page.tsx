import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import { primaryKeywords, serviceKeywords, siteConfig } from "@/lib/seo";

const pageTitle = "Contact 24/7 Car Recovery Dubai | Call +971 50 464 5696";
const pageDescription =
  "Contact 24/7 UAE Recovery for emergency towing, roadside assistance, battery jump start, flat tyre help, and accident recovery across Dubai and all Emirates.";
const canonicalPath = "/contact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...primaryKeywords,
    ...serviceKeywords.carRecovery,
    ...serviceKeywords.accidentRecovery,
    "contact car recovery dubai",
    "roadside assistance contact number uae",
    "24 hour towing phone number dubai",
    "emergency car towing contact",
  ],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}${canonicalPath}`,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact 24/7 UAE Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ContactPage() {
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact 24/7 UAE Recovery",
    url: `${siteConfig.url}${canonicalPath}`,
    description: pageDescription,
    about: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: "+971504645696",
      email: "info@247uaerecovery.ae",
      areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactPageClient />
    </>
  );
}
