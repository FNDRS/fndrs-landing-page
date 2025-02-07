import Script from "next/script"
import React from "react"
import { Toaster } from "react-hot-toast"

export default function Providers({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></Script>
      <Toaster />
      {children}
    </>
  )
}
