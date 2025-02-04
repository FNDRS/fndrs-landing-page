import Image from "next/image"
import React from "react"

export const Header = () => {
  return (
    <div className="px-16 py-6 flex flex-row justify-between">
      <div>
        <Image src="/fndrs-logo.webp" alt="FNDRS" width={100} height={100} />
      </div>
      <div>
        <ul className="flex flex-row justify-between gap-8">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <a href="#get-in-contact">Get in contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
