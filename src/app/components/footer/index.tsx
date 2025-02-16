import Image from "next/image"
import React from "react"

import SharedIcon from "../shared"

export const Footer = () => {
  return (
    <section className="h-[35vh] flex flex-col" id="footer">
      <footer>
        <div className="border-y-[1px] items-center w-full sm:border-none border-[#bcbcbca9] p-8">
          <div className="flex flex-col sm:items-center">
            <Image src="/fndrs-logo.webp" alt="logo" width={100} height={100} />
            <p className="text-[#bcbcbca9] mt-4">Make the things with excellence.</p>
          </div>
          <ul className="mt-8 flex flex-col sm:flex-row justify-evenly sm:max-w-[400px] sm:mx-auto">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a className="font-bold" href="mailto:contact@fndrs.com">
                contact@fndrs.com
              </a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
          </ul>
          <ul className="flex flex-row sm:justify-evenly mt-8 sm:max-w-[200px] gap-2 sm:mx-auto">
            {/* TODO: Look for better icons */}
            <li>
              <a href="https://www.instagram.com/the.fndrs" target="_blank">
                <SharedIcon kind="instagram" className="h-4 w-[20px] text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-fndrs/" target="_blank">
                <SharedIcon kind="linkedIn" className="h-5 w-[20px] text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/fndrs" target="_blank">
                <SharedIcon kind="github" className="h-5 w-[20px] text-white pt-[2px]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-400 p-4">
          <p className="text-center sm:text-left">
            <span className="font-bold">FNDRS</span> © 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
