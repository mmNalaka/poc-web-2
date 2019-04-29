import React from "react"

const HeadingTag = ({ tag, headingStyle, textAlign, color, children, font }) =>
  React.createElement(
    tag,
    {
      className: `${headingStyle} full-width`,
      style: {
        textAlign: textAlign,
        color: color || "inherit",
        fontFamily: font || "Tiempos",
      },
    },
    [...children]
  )

const Heading = props => (
  <HeadingTag
    tag={props.tag || "h1"}
    textAlign={props.textAlign}
    headingStyle={props.headingStyle}
    color={props.color}
    font={props.font}
  >
    {props.title}
  </HeadingTag>
)

export default Heading
