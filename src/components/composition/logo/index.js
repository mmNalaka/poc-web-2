import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import IzettlePrimaryPositiveLogo from "./logos/izettle-primary-positive.svg"
import IzettlePrimaryNegativeLogo from "./logos/izettle-primary-negative.svg"
import IzettleSecondaryPositiveLogo from "./logos/izettle-secondary-positive.svg"
import IzettleSecondaryNegativeLogo from "./logos/izettle-secondary-negative.svg"
import PaypalPrimaryPositiveLogo from "./logos/paypal-primary-positive.svg"
import PaypalPrimaryNegativeLogo from "./logos/paypal-primary-negative.svg"


const getLogo = (logo, logoVariant, height) => {
  switch (logo) {
    case "IzettlePrimary":
      return logoVariant === "positive" ? (
        <IzettlePrimaryPositiveLogo height={height} />
      ) : (
        <IzettlePrimaryNegativeLogo height={height} />
      )

    case "IzettleSecondary":
      return logoVariant === "positive" ? (
        <IzettleSecondaryPositiveLogo height={height} />
      ) : (
        <IzettleSecondaryNegativeLogo height={height} />
      )

    case "PaypalPrimary":
      return logoVariant === "positive" ? (
        <PaypalPrimaryPositiveLogo height={height} />
      ) : (
        <PaypalPrimaryNegativeLogo height={height} />
      )

    default:
      return logoVariant === "positive" ? (
        <IzettlePrimaryPositiveLogo height={height} />
      ) : (
        <IzettlePrimaryNegativeLogo height={height} />
      )
  }
}

const StyledLogo = styled(Link)`
  display: flex;
`

const Logo = ({ height, link, theme, logo }) => (
  <StyledLogo to={link.url || "/"}>{getLogo(logo, theme.logo, height)}</StyledLogo>
)

Logo.defaultProps = {
  height: 30,
}

export default Logo
