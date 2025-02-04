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
      <section className="h-screen flex flex-row items-center justify-center min-w-[200px] mx-auto">
        <div className="w-1/2">
          <h3 className="font-bold text-3xl">Who we Are?</h3>
          <h1 className="font-bold text-8xl">Revolutionaries</h1>
          <p className="max-w-[500px] mt-4 text-lg leading-8">
            We are architects of change. Driven by vision and precision, we blend technology with purpose to craft solutions that
            leave a lasting mark. Our essence lies in pushing boundaries, redefining norms, and transforming potential into
            progress.
          </p>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-xl mt-4 w-fit">Know Us</button>
        </div>
        <div className="">
          <Image src="/assets/cards.png" alt="Cards" width={500} height={500} />
        </div>
      </section>
    </main>
  )
}
