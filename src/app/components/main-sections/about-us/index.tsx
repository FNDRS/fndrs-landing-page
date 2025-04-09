import { SplineViewer } from "@/app/components/spline-viewer"
import { keyboardAnimation } from "@/app/utils/spline-scenes"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

export const AboutUs = () => {
  const sectionRef = useRef(null)

  const titleRef = useRef(null)
  const paragraphRef = useRef(null)
  const splineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.2], [600, 0])

  const paragraphOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const paragraphY = useTransform(scrollYProgress, [0.2, 0.4], [600, 0])

  const splineOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const splineY = useTransform(scrollYProgress, [0.4, 0.6], [200, 0])

  return (
    <section className="h-screen flex justify-center" id="about-us" ref={sectionRef}>
      <div className="xl:w-[1200px] flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:gap-24">
        <div className="lg:w[800px] w-[350px] md:w-[600px] xl:w-[800px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 xl:order-1 justify-center">
          <motion.div ref={titleRef} style={{ opacity: titleOpacity, y: titleY }}>
            <h3 className="self-start font-bold text-4xl sm:text-4xl md:text-5xl mb-2">Who we are?</h3>
            <h2 className="self-start font-bold text-4xl sm:text-5xl md:text-8xl mb-4">Revolutionaries</h2>
          </motion.div>

          <motion.p
            className="my-4 text-xl sm:text-xl leading-8 text-[#a2a2a2]"
            ref={paragraphRef}
            style={{ opacity: paragraphOpacity, y: paragraphY }}>
            <strong className="font-bold text-white">FNDRS </strong>
            is a 360 consulting agency. The focus of our work is help clients to found and build their future based on technology,
            mitigating risk and drive efficiency through people, process and technology.
          </motion.p>

          <motion.a
            href="https://www.instagram.com/the.fndrs"
            className="self-start"
            target="_blank"
            rel="noreferrer noopener"
            style={{ opacity: paragraphOpacity, y: paragraphY }}>
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit self-start">Know Us</button>
          </motion.a>
        </div>

        <motion.div
          className="order-2 w-fit sm:w-[400px] md:w-[600px] h-[400px]"
          ref={splineRef}
          style={{ opacity: splineOpacity, y: splineY }}>
          <SplineViewer scene={keyboardAnimation} />
        </motion.div>
      </div>
    </section>
  )
}
