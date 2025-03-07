import "@/app/globals.css"

import { Metadata } from "next"

import SEO from "../../next-seo.config"
import SchemaMarkup from "./components/schema-markup"
import Providers from "./provider"

export const metadata: Metadata = {
  ...SEO
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
