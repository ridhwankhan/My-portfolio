import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ridhwan | Portfolio",
  description:
    "Modern portfolio of Ridhwan, a Computer Science student focused on software engineering, AI/ML, and data science."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
