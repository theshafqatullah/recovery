// SEO Configuration based on competitor research
// Key competitors: Summit Towing, Gondal Car Recovery, IANA Vehicles, AAA UAE

export const siteConfig = {
  name: "24/7 UAE Recovery",
  domain: "247uaerecovery.ae",
  url: "https://247uaerecovery.ae",
  phone: "+971504645696",
  phoneFormatted: "+971 50 464 5696",
  phone2: "+971569773000",
  phone2Formatted: "+971 56 977 3000",
  email: "info@247uaerecovery.ae",
  whatsapp: "971504645696",
  owner: "Sajad Dad",
  address: {
    street: "Al Quoz Industrial Area 3",
    city: "Dubai",
    country: "United Arab Emirates",
    postalCode: "00000",
  },
  social: {
    facebook: "https://facebook.com/247uaerecovery",
    instagram: "https://instagram.com/247uaerecovery",
    twitter: "https://twitter.com/247uaerecovery",
  },
};

// Primary keywords based on competitor analysis
export const primaryKeywords = [
  "car recovery Dubai",
  "towing service Dubai",
  "24/7 car recovery UAE",
  "emergency towing Dubai",
  "roadside assistance Dubai",
  "vehicle recovery UAE",
  "breakdown recovery Dubai",
  "flatbed towing Dubai",
  "accident recovery Dubai",
  "car towing Dubai",
];

// Long-tail keywords from competitor research
export const longTailKeywords = [
  "24 hour car recovery service Dubai",
  "emergency car towing near me Dubai",
  "cheap towing service Dubai",
  "best car recovery Dubai",
  "fast car recovery Dubai",
  "car breakdown service Dubai",
  "vehicle transport Dubai to Abu Dhabi",
  "luxury car towing Dubai",
  "motorcycle recovery Dubai",
  "desert recovery Dubai",
  "car stuck in sand Dubai",
  "flat tyre service Dubai",
  "battery jump start Dubai",
  "fuel delivery service Dubai",
  "heavy truck towing Dubai",
];

// Location-specific keywords
export const locationKeywords = {
  dubai: [
    "car recovery Downtown Dubai",
    "towing service Dubai Marina",
    "breakdown recovery JBR",
    "car recovery Palm Jumeirah",
    "towing Sheikh Zayed Road",
    "vehicle recovery Business Bay",
    "car towing Al Quoz",
    "recovery service Deira",
    "towing Al Barsha",
    "car recovery Jumeirah",
  ],
  abuDhabi: [
    "car recovery Abu Dhabi",
    "towing service Abu Dhabi",
    "vehicle recovery Khalifa City",
    "car towing Yas Island",
    "breakdown recovery Mussafah",
  ],
  sharjah: [
    "car recovery Sharjah",
    "towing service Sharjah",
    "vehicle recovery Al Nahda Sharjah",
    "breakdown recovery Sharjah",
  ],
  otherEmirates: [
    "car recovery Ajman",
    "towing service Ras Al Khaimah",
    "vehicle recovery Fujairah",
    "car towing Umm Al Quwain",
    "recovery service Al Ain",
  ],
};

// Service-specific keywords from competitor analysis
export const serviceKeywords = {
  carRecovery: [
    "car recovery service Dubai",
    "vehicle recovery Dubai",
    "car breakdown recovery",
    "stranded car recovery",
    "emergency car recovery",
    "24/7 car recovery",
  ],
  accidentRecovery: [
    "accident recovery Dubai",
    "crash recovery service",
    "collision towing Dubai",
    "car accident towing",
    "insurance accident recovery",
    "RTA accident recovery",
  ],
  flatbedTowing: [
    "flatbed towing Dubai",
    "flatbed truck Dubai",
    "luxury car towing",
    "sports car transport Dubai",
    "low clearance vehicle towing",
    "exotic car towing Dubai",
  ],
  batteryJumpstart: [
    "battery jump start Dubai",
    "car battery service Dubai",
    "dead battery help Dubai",
    "battery boost service",
    "mobile battery service",
  ],
  flatTyre: [
    "flat tyre service Dubai",
    "tyre change Dubai",
    "roadside tyre repair",
    "puncture repair Dubai",
    "mobile tyre service",
  ],
  fuelDelivery: [
    "fuel delivery Dubai",
    "petrol delivery Dubai",
    "diesel delivery Dubai",
    "emergency fuel service",
    "out of fuel Dubai",
  ],
  motorcycleRecovery: [
    "motorcycle recovery Dubai",
    "bike towing Dubai",
    "motorbike recovery service",
    "scooter recovery Dubai",
  ],
  offRoadRecovery: [
    "off-road recovery Dubai",
    "desert recovery Dubai",
    "sand recovery service",
    "4x4 recovery UAE",
    "stuck in sand recovery",
  ],
  heavyVehicle: [
    "heavy vehicle recovery Dubai",
    "truck towing Dubai",
    "bus recovery service",
    "commercial vehicle towing",
    "trailer recovery Dubai",
  ],
  longDistance: [
    "long distance towing UAE",
    "inter-emirate towing",
    "Dubai to Abu Dhabi towing",
    "vehicle transport UAE",
    "car shipping Dubai",
  ],
};

// Dubai areas for location pages
export const dubaiAreas = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain", "DIFC"],
    responseTime: "15-20 min",
    imageKey: "downtownDubai" as const,
    description: "The heart of modern Dubai, home to the world's tallest building and the iconic Dubai Mall. Our recovery trucks are stationed just minutes away from Sheikh Mohammed bin Rashid Boulevard.",
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    landmarks: ["Marina Walk", "JBR Beach", "Marina Mall", "Bluewaters"],
    responseTime: "15-25 min",
    imageKey: "dubaiMarina" as const,
    description: "Dubai Marina's waterfront district with its dense residential towers and busy roads. We navigate the Marina loop and surrounding areas daily for fast vehicle recovery.",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    landmarks: ["Atlantis The Palm", "The Pointe", "Nakheel Mall"],
    responseTime: "20-30 min",
    imageKey: "palmJumeirah" as const,
    description: "The Palm's unique layout means you need a recovery service that knows the fronds and trunk road. Our trucks reach Atlantis and all Palm residences quickly.",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    landmarks: ["Bay Square", "Executive Towers", "Canal Walk"],
    responseTime: "15-20 min",
    imageKey: "businessBay" as const,
    description: "Dubai's commercial hub along the Canal. With heavy traffic and underground parking, we handle everything from dead batteries to full vehicle recovery in Business Bay.",
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    landmarks: ["Jumeirah Beach", "City Walk", "La Mer", "Kite Beach"],
    responseTime: "15-20 min",
    imageKey: "jumeirah" as const,
    description: "From the beachfront villas to City Walk's urban streets, Jumeirah's mix of residential and leisure areas keeps our recovery team busy around the clock.",
  },
  {
    slug: "al-barsha",
    name: "Al Barsha",
    landmarks: ["Mall of Emirates", "Al Barsha Heights", "Barsha Park"],
    responseTime: "10-15 min",
    imageKey: "alBarsha" as const,
    description: "Our base in Al Quoz means Al Barsha gets some of the fastest response times. Whether you're near Mall of Emirates or Barsha Heights, we're minutes away.",
  },
  {
    slug: "deira",
    name: "Deira",
    landmarks: ["Gold Souk", "Deira City Centre", "Clock Tower"],
    responseTime: "20-25 min",
    imageKey: "deira" as const,
    description: "Dubai's historic trading district with narrow streets and bustling souks. Our experienced drivers know every shortcut to reach you fast in Deira.",
  },
  {
    slug: "bur-dubai",
    name: "Bur Dubai",
    landmarks: ["Meena Bazaar", "Dubai Frame", "Dubai Museum"],
    responseTime: "15-20 min",
    imageKey: "burDubai" as const,
    description: "The cultural heart of old Dubai.  From Meena Bazaar's busy streets to the Dubai Frame area, our recovery trucks handle this densely packed district efficiently.",
  },
  {
    slug: "al-quoz",
    name: "Al Quoz",
    landmarks: ["Alserkal Avenue", "Industrial Area", "Al Quoz Mall"],
    responseTime: "10-15 min",
    imageKey: "alQuoz" as const,
    description: "Home to our main operations hub. Al Quoz benefits from the fastest response times in Dubai — if you break down here, help is already around the corner.",
  },
  {
    slug: "jebel-ali",
    name: "Jebel Ali",
    landmarks: ["Jebel Ali Free Zone", "Ibn Battuta Mall", "Dragon Mart"],
    responseTime: "20-30 min",
    imageKey: "jebelAli" as const,
    description: "Covering Jebel Ali's massive free zone, residential areas, and the E11 highway corridor. We serve both personal vehicles and commercial fleet breakdowns here.",
  },
  {
    slug: "sheikh-zayed-road",
    name: "Sheikh Zayed Road",
    landmarks: ["Emirates Towers", "World Trade Centre", "Index Tower"],
    responseTime: "15-20 min",
    imageKey: "sheikhZayedRoad" as const,
    description: "Dubai's main artery — the busiest highway in the UAE. Our trucks are specifically equipped for safe highway-side recovery on Sheikh Zayed Road.",
  },
  {
    slug: "jbr",
    name: "JBR (Jumeirah Beach Residence)",
    landmarks: ["The Walk", "Ain Dubai", "Bluewaters Island"],
    responseTime: "15-25 min",
    imageKey: "jbr" as const,
    description: "The Walk, Ain Dubai, and Bluewaters — JBR's busy tourist and residential district. We access even the tightest parking areas with our compact recovery units.",
  },
];

// Service routes for static generation
export const serviceRoutes = [
  "car-recovery",
  "accident-recovery",
  "flatbed-towing",
  "battery-jumpstart",
  "flat-tyre",
  "fuel-delivery",
  "motorcycle-recovery",
  "off-road-recovery",
  "heavy-vehicle",
  "long-distance",
  "key-lockout",
  "luxury-transport",
  "vehicle-storage",
  "winch-service",
  "cargo-transport",
];

// Generate metadata for location pages
export function generateLocationMetadata(area: typeof dubaiAreas[0]) {
  return {
    title: `Car Recovery ${area.name} - 24/7 Towing Service | ${area.responseTime} Response`,
    description: `Need car recovery in ${area.name}? 24/7 UAE Recovery offers fast ${area.responseTime} response time. Covering ${area.landmarks.join(", ")}. Call +971 50 464 5696 now!`,
    keywords: [
      `car recovery ${area.name}`,
      `towing service ${area.name}`,
      `breakdown recovery ${area.name}`,
      `${area.name} car towing`,
      `24/7 recovery ${area.name}`,
      `roadside assistance ${area.name}`,
    ],
  };
}
