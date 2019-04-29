import React from "react"
import SbEditable from "storyblok-react"
import CtaButton from "../../composition/cta"

const ElementCta = props => (
  <SbEditable content={props.blok}>
    <CtaButton {...props.blok}>{props.blok.text}</CtaButton>
  </SbEditable>
)

export default ElementCta
