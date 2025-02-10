import Image from "next/image"
import React from "react"

import SharedIcon from "../shared"

export const Footer = () => {
  return (
    <section className="h-[50vh] flex flex-col justify-end">
      <footer>
        <div className="border-y-[1px] border-[#bcbcbca9] p-8">
          <Image src="/fndrs-logo.webp" alt="logo" width={100} height={100} />
          <p className="text-[#bcbcbca9] mt-4">Make the things with excellence.</p>
          <ul className="mt-8">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a className="font-bold" href="mailto:contact@fndrs.com">
                contact@fndrs.com
              </a>
            </li>
          </ul>
          <ul className="flex flex-row mt-2">
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
        <div className="flex flex-col justify-center items-center text-[#bcbcbca9] p-4">
          <p>
            Copyright ©<span className="font-bold"> FNDRS</span>
          </p>
          <p>2025. All rights reserved</p>
        </div>
      </footer>
    </section>
  )
}
