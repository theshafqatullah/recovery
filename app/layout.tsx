import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://247uaerecovery.ae"),
  title: {
    default: "24/7 UAE Recovery | Car Recovery & Towing Services Dubai",
    template: "%s | 24/7 UAE Recovery",
  },
  description:
    "Professional 24/7 car recovery, towing, and roadside assistance services in Dubai & UAE. Fast response, affordable rates. Call +971 50 464 5696 for emergency help.",
  keywords: [
    "car recovery Dubai",
    "towing service Dubai",
    "roadside assistance UAE",
    "24 hour towing Dubai",
    "emergency car recovery",
    "flatbed towing Dubai",
    "accident recovery UAE",
    "battery jump start Dubai",
    "flat tyre service Dubai",
    "fuel delivery Dubai",
    "vehicle recovery UAE",
    "breakdown service Dubai",
  ],
  authors: [{ name: "24/7 UAE Recovery" }],
  creator: "24/7 UAE Recovery",
  publisher: "24/7 UAE Recovery",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://247uaerecovery.ae",
    siteName: "24/7 UAE Recovery",
    title: "24/7 UAE Recovery | Car Recovery & Towing Services Dubai",
    description:
      "Professional 24/7 car recovery, towing, and roadside assistance services in Dubai & UAE. Fast response, affordable rates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 UAE Recovery - Professional Car Recovery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 UAE Recovery | Car Recovery & Towing Services Dubai",
    description:
      "Professional 24/7 car recovery, towing, and roadside assistance services in Dubai & UAE.",
    images: ["/og-image.jpg"],
  },
  verification: {},
  alternates: {
    canonical: "https://247uaerecovery.ae",
  },
  category: "Automotive Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://247uaerecovery.ae/#business",
      name: "24/7 UAE Recovery",
      description:
        "Professional 24/7 car recovery, towing, and roadside assistance services across Dubai and UAE.",
      url: "https://247uaerecovery.ae",
      telephone: "+971504645696",
      email: "info@247uaerecovery.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Quoz Industrial Area",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "00000",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.2048",
        longitude: "55.2708",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "City", name: "Ajman" },
        { "@type": "City", name: "Ras Al Khaimah" },
        { "@type": "City", name: "Fujairah" },
        { "@type": "City", name: "Umm Al Quwain" },
      ],
      sameAs: [
        "https://www.facebook.com/247uaerecovery",
        "https://www.instagram.com/247uaerecovery",
        "https://twitter.com/247uaerecovery",
      ],
      image: "https://247uaerecovery.ae/og-image.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2847",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://247uaerecovery.ae/#website",
      url: "https://247uaerecovery.ae",
      name: "24/7 UAE Recovery",
      publisher: { "@id": "https://247uaerecovery.ae/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://247uaerecovery.ae/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": "https://247uaerecovery.ae/#service",
      serviceType: "Car Recovery and Towing",
      provider: { "@id": "https://247uaerecovery.ae/#business" },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Car Recovery Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Car Recovery",
              description: "24/7 emergency car recovery services across UAE",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flatbed Towing",
              description: "Safe flatbed towing for all vehicle types",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Battery Jump Start",
              description: "Quick battery boost and jump start service",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flat Tyre Service",
              description: "Roadside tyre change and repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fuel Delivery",
              description: "Emergency fuel delivery anywhere in UAE",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accident Recovery",
              description: "Professional accident scene vehicle recovery",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://247uaerecovery.ae/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly can you reach me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our average response time is 15-30 minutes within Dubai city limits. For other emirates, response times may vary based on location.",
          },
        },
        {
          "@type": "Question",
          name: "Do you operate 24/7?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide round-the-clock car recovery and towing services 365 days a year, including holidays.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We cover all seven emirates of the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
