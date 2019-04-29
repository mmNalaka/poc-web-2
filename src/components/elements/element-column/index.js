import React from "react"
import SbEditable from "storyblok-react"

import Column from "../../composition/column"
import Components from "../../../components/components"

const ElementColumn = props => (
  <SbEditable content={props.blok}>
    <Column {...props.blok}>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components[blok.component], {
            key: blok._uid,
            blok: blok,
          })
        )}
    </Column>
  </SbEditable>
)

export default ElementColumn
