import { SplineViewer } from "@/app/components/spline-viewer"
import { nirvanaAnimation } from "@/app/utils/spline-scenes"

import { ArrowDown } from "lucide-react"
import React from "react"

export const HeroSection = () => {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex flex-row items-center justify-center h-screen" id="home">
      <SplineViewer scene={nirvanaAnimation} className="absolute inset-0 h-full w-full -z-10" />

      {/* Gradiente o Glass Effect en el fondo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32  to-transparent backdrop-blur-sm z-0" />

      <div className="relative flex flex-col text-center items-center gap-2 xl:w-[1200px] overflow-hidden">
        <h2 className="text-2xl">Make things with</h2>
        <h1 className="uppercase text-6xl md:text-7xl font-extrabold">Excellence</h1>
        <button
          onClick={(e) => {
            e.preventDefault()
            goToSection("contact")
          }}
          className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">
          Let&apos;s Create
        </button>
        <a
          onClick={(e) => {
            e.preventDefault()
            goToSection("about")
          }}>
          <ArrowDown className="animate-bounce mt-8 text-white drop-shadow-[0_0_10px_white] w-8 h-8 cursor-pointer transition-colors duration-300 hover:text-gray-400" />
        </a>
      </div>
    </section>
  )
}
