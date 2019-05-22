import React from "react"
import styled from "styled-components"
import SbEditable from "storyblok-react"
import { rem } from "polished";
import CtaButton from "../../composition/cta";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${props => props.backgroundColor};
  background-image: url("http://${props => props.backgroundImage}");
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: ${570 / 16}rem;
  width: 100%;
  max-width: ${1920 / 16}rem;
  color: ${props => props.color};
  padding: 0 ${rem(80)};

  .col-content,
  .col-img {
    flex: 1;
  }

  .col-content{
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-family: Tiempos;
    margin-bottom: 1.5rem;
  }

  p {
  }
`

const SectionHero = props => (
  <SbEditable content={props.blok}>
    <Section
      backgroundColor={props.blok.backgroundColor}
      backgroundImage={props.blok.backgroundImage || "none"}
    >
      <StyledContainer color={props.blok.textColor}>
        <div className="col-content">
          <h2>{props.blok.title}</h2>
          <p>{props.blok.text}</p>

          <CtaButton {...props.blok.cta} ctaStyle="mintSolid">{props.blok.ctaText}</CtaButton>
        </div>
        <div className="col-img" />
      </StyledContainer>
    </Section>
  </SbEditable>
)

export default SectionHero
