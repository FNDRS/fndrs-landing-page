import { SplineViewer } from "@/app/components/spline-viewer"
import { keyboardAnimation } from "@/app/utils/spline-scenes"

import React from "react"

export const AboutUs = () => {
  return (
    <section className="h-screen flex justify-center" id="about-us">
      <div className="xl:w-[1200px] flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:gap-24">
        <div className="lg:w[800px] w-[350px] md:w-[600px] xl:w-[800px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 xl:order-1 justify-center">
          <h3 className="self-start font-bold text-3xl sm:text-4xl md:text-3xl">who we are?</h3>
          <h1 className="self-start font-bold text-4xl sm:text-5xl md:text-7xl">Revolutionaries</h1>
          <p className="mt-4 text-lg sm:text-lg leading-8 text-justify">
            We are architects of change. Driven by vision and precision, we blend technology with purpose to craft solutions that
            leave a lasting mark. Our essence lies in pushing boundaries, redefining norms, and transforming potential into
            progress.
          </p>
          <a href="https://www.instagram.com/the.fndrs" className="self-start" target="_blank" rel="noreferrer noopener">
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit self-start">Know Us</button>
          </a>
        </div>

        <div className="order-2 w-fit sm:w-[400px] md:w-[600px] h-[400px]">
          <SplineViewer scene={keyboardAnimation} />
        </div>
      </div>
    </section>
  )
}
