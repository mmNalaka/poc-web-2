import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

const LinkItem = styled.li`
  display: flex;
`

const StyledLink = styled(Link)`
  display: flex;
  font-size: ${rem(16)};
  text-decoration: none;
  padding: ${rem(8)} 0;

  &:hover {
    opacity: 0.8;
  }
`

const FooterLinkItem = props => (
  <LinkItem>
    <StyledLink
      minhight={props.logoHeight}
      to={props.blok.url.cached_url || props.blok.url.url || '/'}
    >
      {props.blok.footerLinkTitle || "Enter link title"}
    </StyledLink>
  </LinkItem>
)

export default FooterLinkItem
