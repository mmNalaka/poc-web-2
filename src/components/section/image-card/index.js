import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${props => props.backgroundColor};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: ${570 / 16}rem;
  width: 100%;
  max-width: ${1740 / 16}rem;
  color: ${props => props.color};
  padding: 0 2rem;

  .col-content,
  .col-img {
    flex: 1;
  }

  h2 {
    font-family: Tiempos;
    margin-bottom: 1.5rem;
  }

  p {
  }
`;

const SectionCardImage = props => (
  <SbEditable content={props.blok}>
    {console.log(props)}
    <Section
      backgroundColor={props.blok.backgroundColor}
      backgroundImage={props.blok.image || "none"}
    >
      <StyledContainer color={props.blok.textColor}>
        <div className="col-content">
          <h2>{props.blok.title}</h2>
          <p>{props.blok.introText}</p>
        </div>
        <div className="col-img" />
      </StyledContainer>
    </Section>
  </SbEditable>
);

export default SectionCardImage;
