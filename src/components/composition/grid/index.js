import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import { media } from "../../theme/mixins"

const frGetter = (columns) => `repeat(${columns}, 1fr)`


const StyledGrid = styled.div`
  display: grid;
  height: ${({ height = "auto" }) => `${ height }vh`};
  min-height: ${({ minHeight = "none" }) => `${ rem(parseInt(minHeight)) }`};
  grid-template-columns: ${frGetter(4)};
  grid-column-gap: 1rem;
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${rem(1920)};

  ${media.medium} {
    grid-template-columns: ${frGetter(12)};
    grid-column-gap: 1.5rem;
    padding: 0 4rem;
  }

  ${media.ultraWide} {
    grid-template-columns: ${frGetter(12)};
    grid-column-gap: ${rem(40)};
    padding: 0 ${rem(80)};
  }
`

const Grid = ({ children, minHeight, height }) => (
  <StyledGrid height={height} minHeight={minHeight}>
    {children}
  </StyledGrid>
)

export default Grid
