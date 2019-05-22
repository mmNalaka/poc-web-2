import React from "react"
import styled from "styled-components"
import Grid from "../../composition/grid"
import Section from "../../composition/section"
import SbEditable from "storyblok-react"
import Column from "../../composition/column"
import Heading from "../../composition/heading"
import CtaButton from "../../composition/cta"

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`

const getIMageUrl = url => `http://${url}`

const SectionImageAndText = props => (
  <SbEditable content={props.blok}>
    <Section paddingTop={2} paddingBottom={2}>
      {!props.blok.inverseLayout ? (
        <Grid>
          <Column widthMedium={6} vAlign="center">
            <StyledImage
              src={
                getIMageUrl(props.blok.image.image) ||
                "https://via.placeholder.com/200x100"
              }
            />
          </Column>

          <Column widthMedium={6} vAlign="center">
            <Heading title={props.blok.title} tag="h2" />
            <p>{props.blok.paragraph}</p>
            <CtaButton ctaStyle="magneticSolid">CTA text</CtaButton>
          </Column>
        </Grid>
      ) : (
        <Grid>
          <Column widthMedium={6} vAlign="center">
            <Heading title={props.blok.title} tag="h2" />
            <p>{props.blok.paragraph}</p>
            <CtaButton ctaStyle="magneticSolid">CTA text</CtaButton>
          </Column>
          <Column widthMedium={6} vAlign="center">
            <StyledImage
              src={
                getIMageUrl(props.blok.image.image) ||
                "https://via.placeholder.com/200x100"
              }
            />
          </Column>
        </Grid>
      )}
    </Section>
  </SbEditable>
)

export default SectionImageAndText
