import Image from "next/image"

import { Header } from "./components/header"
import SharedIcon from "./components/shared"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-row items-center justify-center h-screen">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-xl">Make things with</h2>
          <h1 className="uppercase text-7xl font-extrabold">excellence</h1>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">Let&apos;s Create</button>
          <SharedIcon kind="arrowDown" className="mt-10 cursor-pointer" />
        </div>
      </section>
      <section className="h-screen">
        <div className="w-[1200px] mx-auto flex flex-row items-center justify-center">
          <div className="w-[800px]">
            <h3 className="font-bold text-3xl">Who we Are?</h3>
            <h1 className="font-bold text-8xl">Revolutionaries</h1>
            <p className="max-w-[500px] mt-4 text-lg leading-8">
              We are architects of change. Driven by vision and precision, we blend technology with purpose to craft solutions
              that leave a lasting mark. Our essence lies in pushing boundaries, redefining norms, and transforming potential into
              progress.
            </p>
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">Know Us</button>
          </div>
          <div className="flex-1">
            <Image src="/assets/cards.png" alt="Cards" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-row items-center justify-center min-w-[200px] mx-auto">
        <div className="w-[1200px] mx-auto">
          <div className="w-1/2">
            <h3 className="font-bold text-3xl">What we do?</h3>
            <h1 className="font-bold text-8xl">Innovate</h1>
            <div className="border-2 w-[800px] h-[400px]"></div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="w-[1200px] mx-auto flex flex-row items-center justify-center">
          <h3 className="font-bold text-3xl w-[400px] text-center">Our goal is to take your business to the next level.</h3>
        </div>
        <div className="w-[1200px] mx-auto mt-32">
          <h3 className="font-bold text-3xl">What we do it?</h3>
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
    </main>
  )
}
