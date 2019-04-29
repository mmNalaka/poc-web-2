import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import { media } from "../../theme/mixins"
import { globalPadding } from "../../theme/variables"

const LinkItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.large} {
    padding: 0 1.5rem;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }

  ${media.wide} {
    padding: 0 2rem;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 600;
  text-decoration: none;
  min-height: ${props =>
    rem(parseInt(props.minhight) + globalPadding.headerPadding * 2)};
`

const HeaderLinkItem = props => (
  <LinkItem>
    <StyledLink
      minhight={props.logoHeight}
      to={props.blok.headerLink.cached_url || props.blok.headerLink.url || '/'}
    >
      {props.blok.headerLinkTitle || "Enter link title"}
    </StyledLink>
  </LinkItem>
)

export default HeaderLinkItem
