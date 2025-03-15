import { SplineViewer } from "@/app/components/spline-viewer"
import { abstractTwist } from "@/app/utils/spline-scenes"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

export const OurGoal = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const goalOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const goalY = useTransform(scrollYProgress, [0, 0.2], [200, 0])

  const howWeDoItOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const howWeDoItY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0])

  const isStepsInView = useInView(stepsRef, { once: true, margin: "-50% 0px" })

  const steps = ["We embrace your essence", "We create it together", "Time to show it to the world"]

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 2 + index * 0.5, duration: 0.6, ease: "easeOut" }
    })
  }

  return (
    <section className="h-screen relative" id="services" ref={sectionRef}>
      <SplineViewer scene={abstractTwist} className="absolute inset-0 -z-10" />

      <div className="flex flex-col h-full items-center">
        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-row justify-center items-center flex-1"
          style={{ opacity: goalOpacity, y: goalY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <h3 className="font-bold sm:text-3xl md:text-4xl w-[500px] text-center">
            Our goal is to take your business to the next level.
          </h3>
        </motion.div>

        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-1"
          style={{ opacity: howWeDoItOpacity, y: howWeDoItY }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}>
          <h3 className="font-bold text-1xl sm:text-2xl md:text-3xl">how we do it?</h3>
          <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl">Together</h1>
        </motion.div>

        <motion.div
          ref={stepsRef}
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-[3] md:flex-[2] items-center"
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <ul className="flex flex-col md:flex-row items-center justify-between md:w-[700px] lg:w-[800px] font-bold">
            {steps.map((text, index, arr) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate={isStepsInView ? "visible" : "hidden"}
                className="relative text-[1rem] md:text-[1rem] lg:text-xl w-[100px] md:w-[100px] lg:w-[150px] text-center md:leading-6 flex flex-col items-center">
                {text}
                <span className="hidden md:block md:absolute w-2 h-2 md:w-5 md:h-5 bg-white border border-black rounded-full -bottom-8"></span>
                {index < arr.length - 1 && (
                  <span className="h-[100px] w-[.5px] md:absolute md:w-[240px] lg:w-[260px] md:h-[0.5px] bg-white -bottom-6 left-[calc(70%+5px)]"></span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
