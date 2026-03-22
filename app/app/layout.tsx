import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZenDaddy - Best Fortnite Aim Assist Script 2026 | Cronus Zen v3.0",
  description: "Dominate Fortnite with the most advanced Cronus Zen script. 30 OLED settings, No Recoil, Aim Assist v3.0. Download instantly.",
  keywords: ["Fortnite Cronus Zen script v3.0", "Best Fortnite aim assist 2026", "Cronus Zen Fortnite script no recoil", "PS5 Fortnite aim assist script", "Xbox Series X Fortnite Cronus Zen", "Zero Recoil Fortnite script 2026", "Fortnite aimbot script Cronus Zen", "ZenDaddy God Flick v3.0 review", "Fortnite controller mods 2026", "Best Cronus Zen settings Fortnite"],
  metadataBase: new URL('https://www.zendaddy.pro'),
  verification: {
    google: '3zb3NEq5Hdp3aLfXS-C_EKbM7JdqJqDzzovccIdbspY',
  },
  icons: {
    icon: '/favicon.jpg?v=9',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "ZenDaddy - Best Fortnite Aim Assist Script 2026 | Cronus Zen v3.0",
    description: "Domineer Fortnite met het meest geavanceerde Cronus Zen script. 30 OLED settings, No Recoil, Aim Assist v3.0. Download direct.",
    type: "website",
    url: "https://www.zendaddy.pro",
    images: [
      {
        url: 'https://www.zendaddy.pro/zendaddy-banner.png?v=9',
        width: 1200,
        height: 630,
        alt: 'ZenDaddy Enhanced Aim Assist',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenDaddy - Best Fortnite Aim Assist Script 2026 | Cronus Zen",
    description: "Professional Cronus Zen aim assist script for Fortnite 2026. 29 OLED settings, ADS Pulse, Crouch Spam, Headshot Bias. GOD FLICK v3.0 PRO. €59.99.",
    images: ['https://www.zendaddy.pro/zendaddy-banner.png?v=9'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZenDaddy",
    "url": "https://www.zendaddy.pro",
    "logo": "https://www.zendaddy.pro/zendaddy-banner.png",
    "sameAs": [
      "https://discord.gg/zp2HmEgTWq",
      "https://www.tiktok.com/@zendaddy.pro"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ZenDaddy GOD FLICK v3.0 PRO",
    "description": "Professional Cronus Zen aim assist script for Fortnite with 29 OLED settings, 6 aim patterns, ADS Pulse, Crouch Spam, Headshot Bias, Anti-Bloom, and per-mode control.",
    "image": [
      "https://www.zendaddy.pro/product-image.jpg",
      "https://www.zendaddy.pro/zendaddy-banner.png"
    ],
    "brand": {
      "@type": "Brand",
      "name": "ZenDaddy"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.zendaddy.pro/#pricing",
      "priceCurrency": "EUR",
      "price": "59.95",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "EUR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": "0",
            "maxValue": "0",
            "unitCode": "d"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": "0",
            "maxValue": "0",
            "unitCode": "d"
          }
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "EARTH"
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "NL",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "58",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Verified Buyer" },
        "reviewBody": "Best Zen script I've ever used. The OLED settings make tuning so easy and the DYN pattern feels completely natural."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Competitive Player" },
        "reviewBody": "Per-mode control is a game changer. I run different settings for ADS and hip-fire and it feels amazing."
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZenDaddy",
    "url": "https://www.zendaddy.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.zendaddy.pro/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
