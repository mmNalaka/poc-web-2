import React from "react"
import styled from "styled-components"
import SbEditable from "storyblok-react"

const Content = styled.div`
  display: flex;
  color: ${props => props.color || "inherit"};
  flex-direction: column;
`

const ElementText = props => (
  <SbEditable content={props.blok}>
    <Content
      dangerouslySetInnerHTML={{ __html: props.blok.text.content }}
      color={props.blok.textColor}
    />
  </SbEditable>
)

export default ElementText
