import { SplineViewer } from "@/app/components/spline-viewer"
import { abstractTwist } from "@/app/utils/spline-scenes"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

export const OurGoal = () => {
  const sectionRef = useRef(null)

  const goalTextRef = useRef(null)
  const howWeDoItRef = useRef(null)
  const stepsRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const goalOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const goalY = useTransform(scrollYProgress, [0, 0.2], [200, 0])

  const howWeDoItOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const howWeDoItY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0])

  const stepsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const stepsY = useTransform(scrollYProgress, [0.3, 0.4], [200, 0])

  return (
    <section className="h-screen" id="services" ref={sectionRef}>
      <SplineViewer scene={abstractTwist} className="absolute -z-10" />
      <div className="flex flex-col h-full items-center">
        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-row justify-center items-center flex-1"
          ref={goalTextRef}
          style={{ opacity: goalOpacity, y: goalY }}>
          <h3 className="font-bold sm:text-3xl md:text-4xl w-[500px] text-center">
            Our goal is to take your business to the next level.
          </h3>
        </motion.div>

        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-1"
          ref={howWeDoItRef}
          style={{ opacity: howWeDoItOpacity, y: howWeDoItY }}>
          <h3 className="font-bold text-1xl sm:text-2xl md:text-3xl">how we do it?</h3>
          <h2 className="font-bold text-5xl sm:text-6xl md:text-8xl">Together</h2>
        </motion.div>

        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-[3] md:flex-[2] items-center"
          ref={stepsRef}
          style={{ opacity: stepsOpacity, y: stepsY }}>
          <ul className="flex flex-col md:flex-row items-center justify-between md:w-[700px] lg:w-[800px] font-bold">
            {["We embrace your essence", "We create it together", "Time to show it to the world"].map((text, index, arr) => (
              <li
                key={index}
                className="relative text-[1rem] md:text-[1rem] lg:text-xl w-[100px] md:w-[100px] lg:w-[150px] text-center md:leading-6 flex flex-col items-center">
                {text}
                <span className="hidden md:block md:absolute w-2 h-2 md:w-5 md:h-5 bg-white border border-black rounded-full -bottom-8"></span>
                {index < arr.length - 1 && (
                  <span className="h-[100px] w-[.5px] md:absolute md:w-[240px] lg:w-[260px] md:h-[0.5px] bg-white -bottom-6 left-[calc(70%+5px)]"></span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
