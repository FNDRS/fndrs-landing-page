import { SplineViewer } from "@/app/components/spline-viewer"
import { nirvanaAnimation } from "@/app/utils/spline-scenes"

import { ArrowDown } from "lucide-react"
import React from "react"

export const HeroSection = () => {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="flex flex-row items-center justify-center h-screen -top-20 sm:-top-8" id="home">
      <SplineViewer scene={nirvanaAnimation} className="absolute sm:h-fit -z-10" />

      <div className="  flex flex-col text-center items-center gap-2 xl:w-[1200px] overflow-hidden border-2">
        <h2 className="text-2xl">Make things with</h2>
        <h1 className="uppercase text-6xl md:text-7xl font-extrabold">Excellence</h1>
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
            e.preventDefault()
            goToSection("about-us")
          }}>
          <ArrowDown className="animate-bounce mt-8 text-white drop-shadow-[0_0_10px_white] w-8 h-8 cursor-pointer transition-colors duration-300 hover:text-gray-400" />
        </a>
      </div>
    </section>
  )
}
