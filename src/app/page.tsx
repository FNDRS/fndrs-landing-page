import { Footer } from "./components/footer"
import { Header } from "./components/header"
import ContactUs from "./components/main-sections/contact-us"
import SharedIcon from "./components/shared"
import { SplineViewer } from "./components/spline-viewer"
import { cardsAnimation, whiteParticles } from "./utils/spline-scenes"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative flex flex-row items-center justify-center h-screen">
        <SplineViewer scene={whiteParticles} className="absolute w-fit sm:h-fit -z-10" />
        <div className="relative flex flex-col text-center items-center gap-8 ">
          <h2 className="text-xl">Make things with</h2>
          <h1 className="uppercase text-7xl font-extrabold">excellence</h1>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">Let&apos;s Create</button>
          <SharedIcon kind="arrowDown" className="mt-[2rem] cursor-pointer" />
        </div>
      </section>
      <section className="h-screen flex justify-center">
        <div className="xl:w-[1200px] flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:p-0 xl:gap-24">
          <div className="lg:w[800px] w-[400px] md:w-[600px] xl:w-[800px] flex flex-col items-center xl:items-start text-center xl:text-left order-1 xl:order-1">
            <h3 className="self-start font-bold text-4xl sm:text-5xl md:text-6xl">Who we are?</h3>
            <h1 className="self-start font-bold text-4xl sm:text-5xl md:text-6xl">Revolutionaries</h1>
            <p className="mt-4 text-lg leading-8 text-justify">
              We are architects of change. Driven by vision and precision, we blend technology with purpose to craft solutions
              that leave a lasting mark. Our essence lies in pushing boundaries, redefining norms, and transforming potential into
              progress.
            </p>
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">Know Us</button>
          </div>

          <div className="order-2 w-[400px] md:w-[600px]">
            <SplineViewer scene={cardsAnimation} />
          </div>
        </div>
      </section>
      {/*<section className="h-screen flex flex-row items-center justify-center min-w-[200px] mx-auto">*/}
      {/*  <div className="w-[1200px] mx-auto">*/}
      {/*    <div className="w-1/2">*/}
      {/*      <h3 className="font-bold text-3xl">What we do?</h3>*/}
      {/*      <h1 className="font-bold text-8xl">Innovate</h1>*/}
      {/*      <div className="border-2 w-[800px] h-[400px]"></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<section className="h-screen relative">*/}
      {/*  <SplineViewer scene={abstractTwist} className="absolute top-0 left-0 w-full h-full -z-10" />*/}
      {/*  <div className="relative w-[1200px] mx-auto flex flex-row items-center justify-center">*/}
      {/*    <h3 className="font-bold text-3xl w-[400px] text-center">Our goal is to take your business to the next level.</h3>*/}
      {/*  </div>*/}
      {/*  <div className="w-[1200px] mx-auto mt-32">*/}
      {/*    <h3 className="font-bold text-3xl">What we do it?</h3>*/}
      {/*    <h1 className="font-bold text-8xl">Together</h1>*/}

      {/*    <ul className="flex flex-row items-center justify-between mt-16 w-[800px] mx-auto font-bold text-xl relative">*/}
      {/*      {["We embrace your essence", "We create it together", "Time to show it to the world"].map((text, index, arr) => (*/}
      {/*        <li key={index} className="relative w-[150px] text-center leading-6 flex flex-col items-center">*/}
      {/*          {text}*/}
      {/*          <span className="absolute w-5 h-5 bg-white border border-black rounded-full -bottom-8"></span>*/}
      {/*          {index < arr.length - 1 && (*/}
      {/*            <span className="absolute w-[260px] h-[.5px] bg-white -bottom-6 left-[calc(70%+5px)]"></span>*/}
      {/*          )}*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <ContactUs />
      <Footer />
    </main>
  )
}
