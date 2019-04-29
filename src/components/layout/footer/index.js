import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Components from "../../components"
import Grid from "../../composition/grid"
import Column from "../../composition/column"
import StyledSection from "../../composition/section"

import { magnetic, magneticDark, white } from "../../theme/colors"

const StyledHeader = styled.footer`
  display: flex;
  flex-direction: column;
  color: ${white};
`

const Span = styled.span`
  font-size: 14px;
  opacity: 0.3;
  padding: ${rem(12)} 0;
`

const LayoutFooter = props => (
  <StyledHeader>
    <StyledSection bgColor={magnetic}>
      <Grid>
        {props.blok.footerMainBlocks &&
          props.blok.footerMainBlocks.map(blok => (
            <Column
              widthWide={12 / props.blok.footerMainBlocks.length}
              key={blok._uid}
            >
              {React.createElement(Components[blok.component], {
                key: blok._uid,
                blok: blok,
              })}
            </Column>
          ))}
      </Grid>
    </StyledSection>

    <StyledSection bgColor={magneticDark} paddingTop={0} paddingBottom={0}>
      <Grid>
        <Column widthWide={12}>
        <Span>iZettle är ett institut för elektroniska pengar och står under Finansinspektionens tillsyn. Copyright © 2017 iZettle AB. Cookies.</Span>
        </Column>
      </Grid>
    </StyledSection>
  </StyledHeader>
)

export default LayoutFooter
