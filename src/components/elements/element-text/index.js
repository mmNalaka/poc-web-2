import React from "react"
import styled from "styled-components"
import SbEditable from "storyblok-react"

const Content = styled.div`
  display: flex;
  color: ${props => props.color || "inherit"};
  flex-direction: column;
  font-family: inherit;

  img {
    width: 100%;
    margin: 2rem 0;
  }
`

const ElementText = props => (
  <SbEditable content={props.blok}>
    <Content
      dangerouslySetInnerHTML={{ __html: props.blok.text.html }}
      color={props.blok.textColor}
    />
  </SbEditable>
)

export default ElementText
