import { CardBoxes } from "@/app/components/card-boxes"

import React from "react"

export const WhatWeDo = () => {
  return (
    <section className="w-full xl:w-[1200px] mx-auto lg:h-screen flex flex-col items-center justify-center p-8 " id="what-we-do">
      <div className="w-full">
        <h3 className="font-bold text-xl lg:text-2xl">what we do?</h3>
        <h1 className="font-bold text-3xl lg:text-8xl">Innovate</h1>
      </div>
      <CardBoxes />
    </section>
  )
}
