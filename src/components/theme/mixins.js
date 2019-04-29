import { rem } from "polished"

export const breakPoints = {
  sm: 600,
  xs: 400,
  medium: 1024,
  large: 1440,
  wide: 1920
}

export const media = {
  xs: `@media(max-width: ${rem(399)})`,
  sm: `@media(min-width: ${rem(400)})`,
  medium: `@media(min-width: ${rem(600)})`,
  large: `@media(min-width: ${rem(1024)})`,
  wide: `@media(min-width: ${rem(1440)})`,
  ultraWide: `@media(min-width: ${rem(1920)})`
}
