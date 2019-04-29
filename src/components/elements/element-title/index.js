import React from "react"
import SbEditable from "storyblok-react"

import Heading from "../../composition/heading";

const ElementHeading = props => (
  <SbEditable content={props.blok}>
    <Heading {...props.blok}>
      {props.blok.title}
    </Heading>
  </SbEditable>
)


export default ElementHeading
