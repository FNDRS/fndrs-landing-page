import { components } from "../components/shared"

export type SharedIconProps = {
  kind: keyof typeof components
  disabled?: boolean
  onClick?: (e: Event) => void
  className?: string
}
