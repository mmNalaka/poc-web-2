import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Components from "../../components"

import Grid from "../../composition/grid"
import Column from "../../composition/column/index"

import Logo from "../../composition/logo/index"
import { white, magnetic } from "../../theme/colors"
import { media } from "../../theme/mixins"
import { globalPadding } from "../../theme/variables"

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
  min-height: ${rem(59)};
`

const Nav = styled.nav`
  width: 100%;
  height: 100%;
`

const Ul = styled.ul`
  margin: 0;

  ${media.large} {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`

const themes = {
  default: {
    bg: white,
    text: magnetic,
    logo: "positive",
    dropdownBG: white,
    dropdownText: magnetic,
  },
  light: {
    bg: "transparent",
    text: white,
    logo: "negtive",
    dropdownBG: white,
    dropdownText: magnetic,
  },
  dark: {
    bg: "transparent",
    text: magnetic,
    logo: "positive",
    dropdownBG: white,
    dropdownText: magnetic,
  },
}

const LayoutHeader = props => (
  <StyledHeader theme={themes[props.headerTheme] || themes.default}>
    <Grid>
      <Column width={2} widthMedium={2} vAlign="center">
        <Logo
          height={props.blok.logoHeight}
          link={props.blok.logoUrl}
          theme={themes[props.headerTheme] || themes.default}
          logo={props.blok.logo}
        />
      </Column>

      <Column width={2} widthMedium={7} vAlign="center">
        <Nav>
          <Ul>
            {props.blok.navigation &&
              props.blok.navigation.map(blok =>
                React.createElement(Components[blok.component], {
                  key: blok._uid,
                  blok: blok,
                  logoHeight: props.blok.logoHeight,
                  theme: themes[props.headerTheme] || themes.default
                })
              )}
          </Ul>
        </Nav>
      </Column>

      <Column width={2} widthMedium={3} vAlign="center">
        <span>Nav {props.blok.logoHeight}</span>
      </Column>
    </Grid>
  </StyledHeader>
)

export default LayoutHeader
