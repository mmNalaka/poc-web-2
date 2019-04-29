import React from "react"
import Components from "../../components"
import { GlobalStyles } from "../../theme/gobal"
import SEO from "../seo/index"

const Page = props => (
  <main>
    <GlobalStyles />
    <SEO {...props.blok.seo} />
    {props.blok.body &&
      props.blok.body.map(blok =>
        React.createElement(Components[blok.component], {
          key: blok._uid,
          blok: blok,
        })
      )}
  </main>
)

export default Page
