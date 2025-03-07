import { CardBoxes } from "@/app/components/card-boxes"

import React from "react"

export const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen" id="what-we-do">
      <div className="xl:w-[1200px]">
        <h3 className="font-bold text-xl lg:text-2xl">what we do?</h3>
        <h2 className="font-bold text-3xl lg:text-8xl">Innovate</h2>
      </div>
      <CardBoxes />
    </section>
  )
}
