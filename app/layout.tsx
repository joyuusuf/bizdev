import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/site";
import "./globals.css";

const title = `${site.name} · Software Development & Business Development`;
const description =
  "Portfolio of Jawad Olamide Yuusuf, a software developer in Ibadan, Nigeria, working on web applications, business research, lead generation, outreach and CRM operations. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  authors: [{ name: site.name }],
  keywords: [
    "Jawad Olamide Yuusuf",
    "software developer",
    "business development",
    "lead generation",
    "GoHighLevel",
    "CRM operations",
    "Next.js",
    "Ibadan",
    "Nigeria",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: site.name,
    images: [{ url: site.photo, alt: site.photoAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.photo],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#071426" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
