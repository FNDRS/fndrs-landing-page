import { SVGProps } from "react"

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
    </svg>
  )
}
