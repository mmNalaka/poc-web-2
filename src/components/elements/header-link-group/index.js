import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rem } from "polished"

import Components from "../../components"

import { globalPadding } from "../../theme/variables"
import { media } from "../../theme/mixins"

const LinkGroup = styled.li`
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

const GroupTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 600;
  cursor: pointer;

  ${media.wide} {
  }
`
const GroupDropDown = styled.div`
  display: flex;
  width: 100%;
  top: ${props =>
    rem(parseInt(props.logoHeight) + globalPadding.headerPadding * 2)};

  ${media.large} {
    display: ${props => (props.isOpen ? "flex" : "none")};
    position: absolute;
    min-height: ${rem(160)};
    background: white;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-height: ${props =>
    rem(parseInt(props.minhight) + globalPadding.headerPadding * 2)};
`

const Span = styled.span`
  display: flex;
  align-items: center;
  min-height: ${props =>
    rem(parseInt(props.minhight) + globalPadding.headerPadding * 2)};
`

const DropDownUl = styled.ul`
  display: flex;
  position: absolute;
  width: 100%;
  max-width: ${rem(1024)};
  flex-wrap: wrap;
  padding-bottom: 1rem;

  li {
    flex-wrap: wrap;
    padding: 1rem 0;

    ${media.large} {
      width: ${props => 100 / props.columns}%;
    }

    a {
      text-transform: none;
      font-size: ${rem(15)};
      font-weight: 500;
    }
  }
`

const HeaderLinkGroup = props => {
  const [isDropDownOpen, setDropDownOpen] = useState(false)

  return (
    <LinkGroup
      onMouseEnter={() => setDropDownOpen(true)}
      onMouseLeave={() => setDropDownOpen(false)}
    >
      <GroupTitle>
        {props.blok.headerGroupTitleLink.cached_url ? (
          <StyledLink
            minhight={props.logoHeight}
            to={props.blok.headerGroupTitleLink.cached_url}
          >
            {props.blok.headerGroupTitle || "Enter group title"}
          </StyledLink>
        ) : (
          <Span minhight={props.logoHeight}>
            {props.blok.headerGroupTitle || "Enter group title"}
          </Span>
        )}
      </GroupTitle>

      <GroupDropDown logoHeight={props.logoHeight} isOpen={isDropDownOpen}>
        <DropDownUl columns={props.blok.linkColumns || 3}>
          {props.blok.navItems &&
            props.blok.navItems.map(blok =>
              React.createElement(Components[blok.component], {
                key: blok._uid,
                blok: blok,
              })
            )}
        </DropDownUl>
      </GroupDropDown>
    </LinkGroup>
  )
}

export default HeaderLinkGroup
