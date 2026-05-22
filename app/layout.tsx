import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashleyspetcare.com"),
  title: {
    default: "Ashley's Pet Care | Lake Nona & Greater Orlando",
    template: "%s | Ashley's Pet Care",
  },
  description:
    "Professional pet sitting, dog walking, drop-in visits, and special needs care in Lake Nona and Greater Orlando. Personalized, family-style care from a trusted local provider.",
  keywords: [
    "pet sitting Lake Nona",
    "dog walking Orlando",
    "pet care Greater Orlando",
    "dog walker Lake Nona",
    "in-home pet sitting Orlando",
    "senior pet care Orlando",
    "medication administration pet care",
    "Ashley's Pet Care",
  ],
  authors: [{ name: "Ashley's Pet Care" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashleyspetcare.com",
    siteName: "Ashley's Pet Care",
    title: "Ashley's Pet Care | Lake Nona & Greater Orlando",
    description:
      "Personalized pet sitting, dog walking, and special needs care in Lake Nona and Greater Orlando. Every pet treated like family.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashley's Pet Care | Lake Nona & Greater Orlando",
    description:
      "Personalized pet sitting, dog walking, and special needs care in Lake Nona and Greater Orlando. Every pet treated like family.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
