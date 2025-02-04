import { Header } from "./components/header"
import SharedIcon from "./components/shared"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-xl">Make things with</h2>
          <h1 className="uppercase text-7xl font-extrabold">excellence</h1>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-xl mt-4 w-fit">Let&apos;s Create</button>
          <SharedIcon kind="arrowDown" className="mt-10 cursor-pointer" />
        </div>
      </div>
    </main>
  )
}
