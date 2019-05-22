import React from "react"
import styled from "styled-components"
import Grid from "../../composition/grid"
import Section from "../../composition/section"
import SbEditable from "storyblok-react"
import Column from "../../composition/column"
import Heading from "../../composition/heading"
import CtaButton from "../../composition/cta";

const StyleColumn = styled(Column)`
  text-align: center;
`

const SectionCallToAction = props => (
  <SbEditable content={props.blok}>
    <Section bgColor={props.blok.backgroundColor} paddingTop={2} paddingBottom={2}>
      <Grid>
        <StyleColumn widthMedium={12} vAlign="center" className="text-center">
          <Heading title={props.blok.title} tag={props.blok.headingTag}></Heading>
          <p>{props.blok.paragraph}</p>
          <CtaButton ctaStyle="magneticSolid" align="center">CTA text</CtaButton>
        </StyleColumn>
      </Grid>
    </Section>
  </SbEditable>
)

export default SectionCallToAction
