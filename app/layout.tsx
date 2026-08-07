import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://ridhwank-portfolio.vercel.app";
const FULL_NAME = "Ridhwanur Rahman Khan";
const SHORT_NAME = "Ridhwan Khan";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} | Portfolio — Software, Product & Data`,
    template: `%s | ${FULL_NAME}`
  },
  description:
    "Official portfolio of Ridhwanur Rahman Khan (Ridhwan Khan) — Computer Science undergraduate at BRAC University. Interested in Software Engineering, Product Management, Management Trainee Officer, Data Science/Analytics, and Business Intelligence roles.",
  keywords: [
    "Ridhwan",
    "Ridhwan Khan",
    "Ridhwanur Rahman Khan",
    "Ridhwanur Khan",
    "ridhwan khan portfolio",
    "ridhwan brac university",
    "ridhwan software engineer",
    "ridhwan full stack",
    "Ridhwanur Rahman Khan portfolio",
    "ridhwan khan bangladesh",
    "ridhwan khan dhaka",
    "ridhwan next.js",
    "ridhwan react typescript",
    "Shoukhin",
    "KAIRO",
    "BRAC University computer science 2026"
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
    title: `${FULL_NAME} | Software, Product & Data`,
    description:
      `${FULL_NAME} (${SHORT_NAME}) — CS undergraduate at BRAC University. Targeting Software Engineering, Product Management, MTO, Data Science/Analytics, and Business Intelligence.`,
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
      "CS undergraduate at BRAC University — Software Engineering, Product Management, MTO, Data Science & Business Intelligence.",
    images: ["/og-image.jpg"]
  },
  verification: {
    google: "T-VrHK-MIIYmMOaBGQfy99Sb2ZdkdavmwpWD6M71z2g"
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/icon.png",
    apple: "/icon.png"
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
              jobTitle: "Computer Science Undergraduate · Full-Stack Software Engineering",
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
                "Software Engineering",
                "Full-Stack Development",
                "React",
                "TypeScript",
                "Next.js",
                "Python",
                "PostgreSQL",
                "Supabase",
                "Cryptography",
                "Embedded Systems"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
