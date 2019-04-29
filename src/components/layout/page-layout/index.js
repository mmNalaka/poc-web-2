import React from "react"
import Components from "../../components"
import { GlobalStyles } from "../../theme/gobal"
import styled from "styled-components"
import { rem } from "polished"

const BodyPlaceholder = styled.section`
  display: flex;
  width: 100%;
  height: ${rem(400)};
  background-color: #f1f1f1;
  padding-top: ${props => rem(parseInt(props.padTop) + 32)};
  align-items: center;
  justify-content: center;
`

const Page = props => (
  <React.Fragment>
    {props.inEditor && <GlobalStyles />}
    {props.blok.header &&
      props.blok.header.map(blok =>
        React.createElement(Components[blok.component], {
          key: blok._uid,
          blok: blok,
        })
      )}

    <BodyPlaceholder padTop={props.blok.header[0]["logoHeight"]}>
      <p>Page body content ...</p>
    </BodyPlaceholder>

    {props.blok.footer &&
      props.blok.footer.map(blok =>
        React.createElement(Components[blok.component], {
          key: blok._uid,
          blok: blok,
        })
      )}
  </React.Fragment>
)

export default Page
