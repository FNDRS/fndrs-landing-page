"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { CardBoxes } from "./components/card-boxes"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import ContactUs from "./components/main-sections/contact-us"
import SharedIcon from "./components/shared"
import { SplineViewer } from "./components/spline-viewer"
import { abstractTwist, keyboardAnimation, liquidAnimation } from "./utils/spline-scenes"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const SCROLL_THRESHOLD = 30
  const sections = useRef<string[]>(["header", "about-us", "what-we-do", "services", "contact-us", "footer"])

  const accumulatedScroll = useRef(0)

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < sections.current.length) {
      setCurrentSection(index)
      document.getElementById(sections.current[index])?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      accumulatedScroll.current += 1

      if (accumulatedScroll.current < SCROLL_THRESHOLD) return
      accumulatedScroll.current = 0
      const direction = e.deltaY > 0 ? 1 : -1
      const nextSection = currentSection + direction

      if (nextSection >= 0 && nextSection < sections.current.length) {
        goToSection(nextSection)
      }
    },
    [currentSection, goToSection]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault()
        const direction = e.key === "ArrowDown" ? 1 : -1
        const nextSection = currentSection + direction

        if (nextSection >= 0 && nextSection < sections.current.length) {
          goToSection(nextSection)
        }
      }
    },
    [currentSection, goToSection]
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleWheel, handleKeyDown])

  return (
    <main>
      <Header goToSection={goToSection} />
      <section className="relative flex flex-row items-center justify-center h-screen -top-20 sm:-top-8" id="section-1">
        <SplineViewer scene={liquidAnimation} className="absolute sm:h-fit -z-10" />

        <div className="relative flex flex-col text-center items-center gap-8 ">
          <h2 className="text-xl">Make things with</h2>
          <h1 className="uppercase text-6xl font-extrabold">excellence</h1>
          <button
            onClick={(e) => {
              e.preventDefault()
              goToSection(4)
            }}
            className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">
            Let&apos;s Create
          </button>
          <SharedIcon
            kind="arrowDown"
            className="relative top-20 sm:top-0 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              goToSection(1)
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
          </div>
          <CardBoxes />
        </div>
      </section>
      <section className="h-screen relative" id="services">
        <SplineViewer scene={abstractTwist} className="absolute top-0 left-0 w-full h-full -z-10" />
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
      <ContactUs />
      <Footer goToSection={goToSection} />
    </main>
  )
}
