import React from "react"
import SbEditable from "storyblok-react"

import Grid from "../../composition/grid"
import Components from "../../../components/components"

const ElementGrid = props => (
  <SbEditable content={props.blok}>
    <Grid height={props.blok.height} minHeight={props.blok.minHeight}>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components[blok.component], {
            key: blok._uid,
            blok: blok,
          })
        )}
    </Grid>
  </SbEditable>
)

ElementGrid.defaultProps = {}

export default ElementGrid
