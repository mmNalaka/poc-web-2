import styled from "styled-components"

import { media } from "../../theme/mixins"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.bgColor};
  min-width: 0;
  justify-content: ${props => props.vAlign};
  grid-column: ${props => {
    return `span ${props.width}`
  }};

  ${media.medium} {
    grid-column: ${props => {
      return `span ${props.widthMedium}`
    }};
  }

  ${media.wide} {
    grid-column: ${props => {
      return `span ${props.widthWide ? props.widthWide : props.widthMedium}`
    }};
  }
`

Column.defaultProps = {
  width: 4,
  widthMedium: 1,
  bgColor: "transparent",
  vAlign: "flex-start",
}

export default Column
