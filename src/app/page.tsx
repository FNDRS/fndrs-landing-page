"use client"

import { motion } from "framer-motion"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { AboutUs } from "./components/main-sections/about-us"
import ContactUs from "./components/main-sections/contact-us"
import { HeroSection } from "./components/main-sections/hero-section"
import { OurGoal } from "./components/main-sections/our-goal"
import { textVariants } from "./utils/text-animation"

export default function Home() {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      <Header goToSection={goToSection} />
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}>
        <HeroSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}>
        <AboutUs />
      </motion.section>

      {/*    <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}>
        <WhatWeDo />
      </motion.section>
 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}>
        <OurGoal />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}>
        <ContactUs />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        transition={{ delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}>
        <Footer goToSection={goToSection} />
      </motion.section>
    </main>
  )
}
