import type { Metadata } from "next";

export const siteConfig = {
  name: "TGA Builders",
  legalName: "TGA Builders Inc.",
  description:
    "Licensed construction and facility maintenance across Southern California. TGA Builders — your vision is our business.",
  url: "https://tgabuildersinc.com",
  locale: "en_US",
  phone: ["+1-747-303-8403", "+1-702-755-3316"],
  email: "tgabuildersinc@gmail.com",
  license: "1126206",
  classifications: ["B General", "C27", "C42"],
  address: {
    street: "14120 Pierce St",
    city: "Arleta",
    region: "CA",
    postalCode: "91331",
    country: "US",
  },
  ogImage: "/hero-site.webp",
  logo: "/logo.webp",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61575034021265",
    "https://www.instagram.com/tgabuildersinc",
    "https://www.tiktok.com/@tgabuildersinc",
  ],
  serviceAreas: [
    "Los Angeles",
    "San Fernando",
    "Santa Clarita",
    "Glendale",
    "Burbank",
    "Orange County",
    "San Bernardino County",
    "Ventura County",
    "Southern California",
  ],
} as const;

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/pages/about-us", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/about-us/mission", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/about-us/why-use-us", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pages/gallery", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/pages/reviews", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/pages/whatsapp", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/pages/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/pages/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/pages/services/areas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/construction", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/interior", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/exterior", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/emergency", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/demolitions", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/home-improve", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/drywall", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/kitchen-cabinets", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pages/services/kitchen-repairs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/bathroom-repairs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/bathroom", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pages/services/handyman", priority: 0.8, changeFrequency: "monthly" as const },
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = siteConfig.ogImage,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          alt: `${siteConfig.name} — construction and facility maintenance`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}

export function getLocalBusinessJsonLd() {
  const { address } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: [...siteConfig.phone],
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    sameAs: [...siteConfig.sameAs],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
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
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `California Contractor License ${siteConfig.license}`,
      recognizedBy: {
        "@type": "Organization",
        name: "California Contractors State License Board",
      },
    },
    knowsAbout: [
      "Residential construction",
      "Commercial construction",
      "Facility maintenance",
      "Bathroom remodeling",
      "Kitchen repairs",
      "Handyman services",
      "Emergency repairs",
    ],
  };
}
