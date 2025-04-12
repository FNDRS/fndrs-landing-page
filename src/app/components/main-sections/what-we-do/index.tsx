import React from "react"

import { WhatWeDoCards } from "../../what-we-do-cards"

export const WhatWeDo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen" id="what-we-do">
      <div className="xl:w-[1200px] mb-8">
        <h3 className="font-bold text-3xl lg:text-5xl mb-2">What do we do?</h3>
        <h2 className="font-bold text-6xl lg:text-8xl mb-4">Innovate</h2>
      </div>
      <WhatWeDoCards />
    </div>
  )
}
