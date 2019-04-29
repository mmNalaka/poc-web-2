import styled from "styled-components"

import { media } from "../../theme/mixins"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  padding-top: ${props => props.paddingTop}rem;
  padding-bottom: ${props => props.paddingBottom}rem;

  ${media.medium} {
    padding-top: ${props => props.paddingTop * 1.5}rem;
    padding-bottom: ${props => props.paddingBottom * 1.5}rem;
  }

  ${media.wide} {
    padding-top: ${props => props.paddingTop * 2}rem;
    padding-bottom: ${props => props.paddingBottom * 2}rem;
  }
`


StyledSection.defaultProps = {
  children: null,
  bgColor: "transparent",
  paddingTop: 1,
  paddingBottom: 1
}

export default StyledSection
