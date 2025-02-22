import { SplineViewer } from "@/app/components/spline-viewer"
import { abstractTwist } from "@/app/utils/spline-scenes"

import React from "react"

export const OurGoal = () => {
  return (
    <section className="h-screen" id="services">
      <SplineViewer scene={abstractTwist} className="absolute -z-10" />
      <div className="flex flex-col h-full items-center ">
        <div className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-row justify-center items-center flex-1">
          <h3 className="font-bold sm:text-3xl md:text-4xl w-[500px] text-center">
            Our goal is to take your business to the next level.
          </h3>
        </div>
        <div className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-1">
          <h3 className="font-bold text-1xl sm:text-2xl md:text-3xl">how we do it?</h3>
          <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl">Together</h1>
        </div>
        <div className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-[3] md:flex-[2] items-center">
          <ul className="flex flex-col md:flex-row items-center justify-between md:w-[700px] lg:w-[800px] font-bold">
            {["We embrace your essence", "We create it together", "Time to show it to the world"].map((text, index, arr) => (
              <li
                key={index}
                className="relative text-[1rem] md:text-[1rem] lg:text-xl w-[100px] md:w-[100px] lg:w-[150px] text-center  md:leading-6 flex flex-col items-center">
                {text}
                <span className="hidden md:block md:absolute w-2 h-2 md:w-5 md:h-5 bg-white border border-black rounded-full -bottom-8"></span>
                {index < arr.length - 1 && (
                  <span className="h-[100px] w-[.5px] md:absolute md:w-[240px] lg:w-[260px] md:h-[0.5px] bg-white -bottom-6 left-[calc(70%+5px)]"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
