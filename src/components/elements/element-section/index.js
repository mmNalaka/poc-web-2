import React from "react"
import SbEditable from "storyblok-react"

import Section from "../../composition/section/index"
import Components from "../../../components/components"

const ElementSection = props => (
  <SbEditable content={props.blok}>
    <Section
      bgColor={props.blok.bgColor}
      paddingTop={props.blok.paddingTop}
      paddingBottom={props.blok.paddingBottom}
    >
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components[blok.component], {
            key: blok._uid,
            blok: blok,
          })
        )}
    </Section>
  </SbEditable>
)

export default ElementSection
