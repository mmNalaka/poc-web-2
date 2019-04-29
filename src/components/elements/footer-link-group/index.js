import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import FooterLinkItem from "../footer-link-item"

import {  magneticLight } from "../../theme/colors"

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const GroupTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 500;
  border-bottom: ${rem(1)} solid ${magneticLight}
`

const Title = styled.h4`
  display: flex;
  font-size: ${rem(14)};
`

const GroupUl = styled.ul`
  margin-top: ${rem(24)};
  display: flex;
  width: 100%;
  flex-direction: column;
`

const FooterLinkGroup = props => (
  <LinkGroup>
    <GroupTitle>
      <Title minhight={props.logoHeight}>
        {props.blok.groupTitle || "Enter group title"}
      </Title>
    </GroupTitle>

    <GroupUl columns={props.blok.linkColumns || 3}>
      {props.blok.navItems &&
        props.blok.navItems.map(link => (
          <FooterLinkItem key={link._uid} blok={link} />
        ))}
    </GroupUl>
  </LinkGroup>
)

export default FooterLinkGroup
