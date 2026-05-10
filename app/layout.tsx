import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://ridhwank-portfolio.vercel.app";
const FULL_NAME = "Ridhwanur Rahman Khan";
const SHORT_NAME = "Ridhwan Khan";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} | Portfolio — Data Analytics, Operations & Software Engineering`,
    template: `%s | ${FULL_NAME}`
  },
  description:
    "Official portfolio of Ridhwanur Rahman Khan (Ridhwan Khan) — Computer Science graduate from BRAC University. Specialising in Data Analytics, Business Intelligence, Operations Management, MTO Leadership Programs, and Software Engineering. Available for full-time roles from June 2026.",
  keywords: [
    "Ridhwan",
    "Ridhwan Khan",
    "Ridhwanur Rahman Khan",
    "Ridhwanur Khan",
    "ridhwan khan portfolio",
    "ridhwan brac university",
    "ridhwan data analytics",
    "ridhwan software engineer",
    "Ridhwanur Rahman Khan portfolio",
    "ridhwan khan bangladesh",
    "ridhwan khan dhaka",
    "ridhwan operations management",
    "ridhwan MTO",
    "ridhwan business intelligence",
    "BRAC University computer science graduate 2026"
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: `${FULL_NAME} | Data Analytics, Operations & Software Engineering`,
    description:
      `${FULL_NAME} (${SHORT_NAME}) — CS graduate from BRAC University. Open to Data Analytics, Business Intelligence, Operations & Management, MTO Leadership, and Software Engineering roles from June 2026.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Portfolio`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} | Portfolio`,
    description:
      "CS graduate open to Data Analytics, Operations, MTO Leadership & Software Engineering roles from June 2026.",
    images: ["/og-image.jpg"]
  },
  verification: {
    // Add your Google Search Console verification token here once you register
    // google: "YOUR_VERIFICATION_TOKEN"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data — tells Google exactly who you are */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: FULL_NAME,
              alternateName: ["Ridhwan Khan", "Ridhwan", "Ridhwanur Khan"],
              url: SITE_URL,
              image: `${SITE_URL}/my_hero.jpeg`,
              jobTitle: "Computer Science Graduate · Data Analytics & Software Engineering",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "BRAC University",
                address: { "@type": "PostalAddress", addressCountry: "BD" }
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD"
              },
              email: "ridhwankhan03@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/ridhwan1/",
                "https://github.com/ridhwankhan",
                SITE_URL
              ],
              knowsAbout: [
                "Data Analytics",
                "Business Intelligence",
                "Operations Management",
                "Software Engineering",
                "Machine Learning",
                "Python",
                "SQL",
                "Next.js"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
