import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SITE_META } from "@/lib/data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  metadataBase: new URL(SITE_META.url),
  authors: [{ name: "Francisco Forte" }],
  keywords: [
    "AI Engineer",
    "AI Solutions Engineer",
    "Founder",
    "ProduktPix",
    "Next.js",
    "LangChain",
    "Portugal",
    "Automation",
    "SaaS",
  ],
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    url: SITE_META.url,
    siteName: "Francisco Forte",
    images: [{ url: SITE_META.ogImage, width: 1200, height: 630, alt: "Francisco Forte — AI Solutions Engineer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
    images: [SITE_META.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_META.url },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francisco Forte",
  jobTitle: "AI Solutions Engineer",
  email: SITE_META.email,
  telephone: SITE_META.phone,
  url: SITE_META.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Braga",
    addressCountry: "PT",
  },
  sameAs: [`https://linkedin.com/in/${SITE_META.linkedin}`],
  founder: {
    "@type": "Organization",
    name: "ProduktPix",
    url: "https://produktpix.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
