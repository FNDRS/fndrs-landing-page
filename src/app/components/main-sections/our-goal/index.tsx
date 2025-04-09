"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

export const OurGoal = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const stepsRef = useRef<HTMLUListElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center end", "center start"]
  })

  const goalOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const goalY = useTransform(scrollYProgress, [0, 0.2], [200, 0])

  const howWeDoItOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const howWeDoItY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0])

  const isStepsInView = useInView(stepsRef, { once: true, margin: "-50% 0px" })

  const [openIndex, setOpenIndex] = useState<number>(0)

  const stepsData = [
    {
      stage: 1,
      title: "Design & Concept",
      description: "We create prototypes, establish the user experience (UX), and lay out the visual design for your solution."
    },
    {
      stage: 2,
      title: "Implementation",
      description: "We deploy your solution, integrate it with existing systems, and guarantee it’s ready for real-world use."
    },
    {
      stage: 3,
      title: "Quality Assurance",
      description: "We test, verify, and validate the solution to ensure it meets the highest standards before final launch."
    }
  ]

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" }
    })
  }

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.5) {
        setOpenIndex(0)
      } else if (latest < 0.7) {
        setOpenIndex(1)
      } else {
        setOpenIndex(2)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section className="h-screen relative" id="services" ref={sectionRef}>
      <div className="flex flex-col h-full items-center">
        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex justify-center items-center flex-1"
          style={{ opacity: goalOpacity, y: goalY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <h3 className="font-bold sm:text-3xl md:text-4xl w-[500px] text-center">
            Our goal is to take your business to the next level.
          </h3>
        </motion.div>

        <motion.div
          className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col flex-1"
          style={{ opacity: howWeDoItOpacity, y: howWeDoItY }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}>
          <h3 className="font-bold text-1xl sm:text-2xl md:text-5xl">How we do it?</h3>
          <h2 className="font-bold text-5xl sm:text-6xl md:text-8xl">Together</h2>
        </motion.div>

        <motion.div
          className="flex flex-col flex-[3] md:flex-[2] items-center w-full"
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* Contenedor para limitar el ancho y centrar */}
          <div className="relative w-full max-w-3xl mx-auto">
            <ul ref={stepsRef} className="relative w-full flex items-center justify-center gap-x-12 font-bold py-8 px-4">
              <div className="absolute top-1/2 left-0  transform -translate-x-1/2 -translate-y-1/2 z-10 w-2 h-2 bg-white rounded-full" />

              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -z-10 -translate-y-1/2" />

              <svg
                className="absolute top-1/2 right-0 -translate-y-1/2 h-6 w-6 text-white -mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H2" />
              </svg>

              {stepsData.map((step, index) => (
                <motion.li
                  key={step.stage}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isStepsInView ? "visible" : "hidden"}
                  className="relative flex flex-col items-center text-center">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-white rounded-full" />

                  <div className="relative mt-12">
                    <span className="text-[0.85rem] md:text-[1rem] lg:text-xl leading-5 cursor-pointer">{step.title}</span>

                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute left-1/2 top-full transform -translate-x-1/2 mt-3 w-[220px] sm:w-[280px] p-4 bg-white rounded-md shadow-lg">
                        <div className="absolute w-4 h-4 bg-white transform rotate-45 -top-2 left-1/2 -translate-x-1/2" />
                        <h4 className="font-bold text-lg mb-2 text-zinc-600">{step.title}</h4>
                        <p className="text-sm text-gray-400 font-semibold">{step.description}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
