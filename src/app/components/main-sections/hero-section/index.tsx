import SharedIcon from "@/app/components/shared"
import { SplineViewer } from "@/app/components/spline-viewer"
import { liquidAnimation } from "@/app/utils/spline-scenes"

import React from "react"

export const HeroSection = () => {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="flex flex-row items-center justify-center h-screen -top-20 sm:-top-8 " id="section-1">
      <SplineViewer scene={liquidAnimation} className="absolute sm:h-fit -z-10" />

      <div className="relative flex flex-col text-center items-center gap-8 xl:w-[1200px]">
        <h2 className="text-xl">Make things with</h2>
        <h1 className="uppercase text-6xl font-extrabold">excellence</h1>
        <button
          onClick={(e) => {
            e.preventDefault()
            goToSection("contact-us")
          }}
          className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">
          Let&apos;s Create
        </button>
        <a
          onClick={(e) => {
            console.log("click")
            e.preventDefault()
            goToSection("about-us")
          }}>
          <SharedIcon kind="arrowDown" className="relative top-20 sm:top-0 cursor-pointer" />
        </a>
      </div>
    </section>
  )
}
