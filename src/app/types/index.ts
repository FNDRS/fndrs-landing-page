import { components } from "../components/shared"

export type SharedIconProps = {
  kind: keyof typeof components
  disabled?: boolean
  onClick?: () => void
  className?: string
}
