import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "@izettle/web-brand"
import { white, magnetic } from "../../theme/colors"
import { rem } from "polished"

const CTA_STYLE = {
  mintSolid: {
    background: colors.brand.mint.dark,
    text: white,
    border: `${rem(2)} solid ${colors.brand.mint.dark}`,
    textDecoration: "none",
    padding: `${rem(12)} ${rem(24)}`,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  mintOutlined: {
    background: "transparent",
    text: colors.brand.mint.dark,
    border: `${rem(2)} solid ${colors.brand.mint.dark}`,
    textDecoration: "none",
    padding: `${rem(12)} ${rem(24)}`,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  magneticSolid: {
    background: magnetic,
    text: white,
    border: `${rem(2)} solid ${magnetic}`,
    textDecoration: "none",
    padding: `${rem(12)} ${rem(24)}`,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  magneticOutlined: {
    background: "transparent",
    text: magnetic,
    border: `${rem(2)} solid ${magnetic}`,
    textDecoration: "none",
    padding: `${rem(12)} ${rem(24)}`,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  linkMagnetic: {
    background: "transparent",
    text: magnetic,
    border: "none",
    textDecoration: "underline",
    padding: `${rem(0)} ${rem(0)}`,
    textTransform: "none",
    fontWeight: 500,
  },
}

const StyledLink = styled(Link)`
  display: flex;
  font-size: 15px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border: ${props => props.theme.border};
  text-decoration: ${props => props.theme.textDecoration};
  padding: ${props => props.theme.padding};
  border-radius: ${rem(5)};
  align-self: ${props => props.align || "flex-start"};
  text-transform: ${props => props.theme.textTransform};
  font-weight: ${props => props.theme.fontWeight};
`

const CtaButton = props => (
  <StyledLink
    to={props.url.cached_url || props.url.url || "/"}
    theme={CTA_STYLE[props.ctaStyle] || "mintSolid"}
    align={props.align}
  >
    {props.children}
  </StyledLink>
)

export default CtaButton
