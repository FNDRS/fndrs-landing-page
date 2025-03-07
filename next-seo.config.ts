import { Metadata } from "next"

const SEO: Metadata = {
  title: "FNDRS - Make things with excellence",
  description: "FNDRS is a creative studio that transforms ideas into innovative solutions.",
  metadataBase: new URL("https://www.thefndrs.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_HN",
    url: "https://www.thefndrs.com",
    siteName: "FNDRS",
    title: "FNDRS - Make things with excellence",
    description: "FNDRS is a creative studio that transforms ideas into innovative solutions.",
    images: [
      {
        url: "https://www.thefndrs.com/_next/image?url=%2Ffndrs-logo.webp&w=128&q=75",
        width: 1200,
        height: 630,
        alt: "FNDRS - Make things with excellence"
      }
    ]
  },
  twitter: {
    site: "@FNDRS"
  }
}

export default SEO
