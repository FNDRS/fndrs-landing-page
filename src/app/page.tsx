"use client"

import { useEffect, useRef, useState } from "react"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import ContactUs from "./components/main-sections/contact-us"
import SharedIcon from "./components/shared"
import { SplineViewer } from "./components/spline-viewer"
import { abstractTwist, keyboardAnimation, liquidAnimation } from "./utils/spline-scenes"

export default function Home() {
  const [currentSection, setCurrentSection] = useState<number>(0)
  const sections = useRef(["header", "about-us", "what-we-do", "services", "contact-us", "footer"])
  const scrollThreshold = 80
  const accumulatedScroll = useRef(0)

  useEffect(() => {
    const handleWheelScroll = (e: WheelEvent) => {
      e.preventDefault()
      accumulatedScroll.current += 1

      if (accumulatedScroll.current >= scrollThreshold) {
        const direction = e.deltaY > 0 ? 1 : -1
        accumulatedScroll.current = 0

        const nextSectionIndex = Math.min(Math.max(currentSection + direction, 0), sections.current.length - 1)

        if (nextSectionIndex !== currentSection) {
          setCurrentSection(nextSectionIndex)
          document.getElementById(sections.current[nextSectionIndex])?.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        const nextSectionIndex = Math.min(currentSection + 1, sections.current.length - 1)
        if (nextSectionIndex !== currentSection) {
          setCurrentSection(nextSectionIndex)
          document.getElementById(sections.current[nextSectionIndex])?.scrollIntoView({ behavior: "smooth" })
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        const prevSectionIndex = Math.max(currentSection - 1, 0)
        if (prevSectionIndex !== currentSection) {
          setCurrentSection(prevSectionIndex)
          document.getElementById(sections.current[prevSectionIndex])?.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("wheel", handleWheelScroll, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheelScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSection])

  return (
    <main>
      <Header />
      <section className="relative flex flex-row items-center justify-center h-screen -top-20 sm:-top-8" id="section-1">
        <SplineViewer scene={liquidAnimation} className="absolute sm:h-fit -z-10" />

        <div className="relative flex flex-col text-center items-center gap-8 ">
          <h2 className="text-xl">Make things with</h2>
          <h1 className="uppercase text-6xl font-extrabold">excellence</h1>
          <button
            onClick={(e) => {
              e.preventDefault()
              setCurrentSection(4)
              document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">
            Let&apos;s Create
          </button>
          <SharedIcon
            kind="arrowDown"
            className="relative top-20 sm:top-0 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              setCurrentSection(1)
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        </div>
      </section>
      <section className="h-screen flex justify-center" id="about-us">
        <div className="xl:w-[1200px] flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:gap-24">
          <div className="lg:w[800px] w-[350px] md:w-[600px] xl:w-[800px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 xl:order-1 justify-center">
            <h3 className="self-start font-bold text-3xl sm:text-4xl md:text-3xl">who we are?</h3>
            <h1 className="self-start font-bold text-4xl sm:text-5xl md:text-7xl">Revolutionaries</h1>
            <p className="mt-4 text-lg sm:text-lg leading-8 text-justify">
              We are architects of change. Driven by vision and precision, we blend technology with purpose to craft solutions
              that leave a lasting mark. Our essence lies in pushing boundaries, redefining norms, and transforming potential into
              progress.
            </p>
            <a href="https://www.instagram.com/the.fndrs" className="self-start" target="_blank" rel="noreferrer noopener">
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit self-start">
                Know Us
              </button>
            </a>
          </div>

          <div className="order-2 w-fit sm:w-[400px] md:w-[600px] h-[400px]">
            <SplineViewer scene={keyboardAnimation} />
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-row items-center justify-center min-w-[200px] mx-auto" id="what-we-do">
        <div className="w-[1200px] mx-auto">
          <div className="w-1/2">
            <h3 className="font-bold text-3xl">what we do?</h3>
            <h1 className="font-bold text-8xl">Innovate</h1>
            <div className="border-2 w-[800px] h-[400px]"></div>
          </div>
        </div>
      </section>
      <section className="h-screen relative" id="services">
        <SplineViewer scene={abstractTwist} className="absolute top-0 left-0 w-full h-full -z-10" />
        <div className="relative w-[1200px] mx-auto flex flex-row items-center justify-center">
          <h3 className="font-bold text-3xl w-[400px] text-center">Our goal is to take your business to the next level.</h3>
        </div>
        <div className="w-[1200px] mx-auto mt-32">
          <h3 className="font-bold text-3xl">how we do it?</h3>
          <h1 className="font-bold text-8xl">Together</h1>

          <ul className="flex flex-row items-center justify-between mt-16 w-[800px] mx-auto font-bold text-xl relative">
            {["We embrace your essence", "We create it together", "Time to show it to the world"].map((text, index, arr) => (
              <li key={index} className="relative w-[150px] text-center leading-6 flex flex-col items-center">
                {text}
                <span className="absolute w-5 h-5 bg-white border border-black rounded-full -bottom-8"></span>
                {index < arr.length - 1 && (
                  <span className="absolute w-[260px] h-[.5px] bg-white -bottom-6 left-[calc(70%+5px)]"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </main>
  )
}
