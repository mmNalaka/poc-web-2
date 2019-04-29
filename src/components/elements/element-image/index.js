import React from "react"
import styled from "styled-components"
import SbEditable from "storyblok-react"
import Img from "gatsby-image"

const StyledImg = styled.img`
  display: flex;
  color: ${props => props.color || "inherit"};
  flex-direction: column;
  width: 100%;
  height: auto;
`

const ElementImage = props => (
  <SbEditable content={props.blok}>
    {console.log(props)}
    <StyledImg src={props.blok.image.image} />
  </SbEditable>
)

export default ElementImage
