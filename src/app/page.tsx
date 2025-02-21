"use client"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { AboutUs } from "./components/main-sections/about-us"
import ContactUs from "./components/main-sections/contact-us"
import { HeroSection } from "./components/main-sections/hero-section"
import { OurGoal } from "./components/main-sections/our-goal"
import { WhatWeDo } from "./components/main-sections/what-we-do"

export default function Home() {
  const goToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      <Header goToSection={goToSection} />
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <OurGoal />
      <ContactUs />
      <Footer goToSection={goToSection} />
    </main>
  )
}
