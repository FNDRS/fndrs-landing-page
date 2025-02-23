import SharedIcon from "@/app/components/shared"

import React from "react"

export const SideMenuSocials: React.FC = () => (
  <ul className="flex flex-row justify-between">
    <li>
      <a href="https://www.instagram.com/the.fndrs" target="_blank">
        <SharedIcon kind="instagram" className="h-7" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/the-fndrs/" target="_blank">
        <SharedIcon kind="linkedIn" className="h-7" />
      </a>
    </li>
    <li>
      <a href="https://www.github.com/fndrs" target="_blank">
        <SharedIcon kind="github" className="h-7" />
      </a>
    </li>
  </ul>
)
