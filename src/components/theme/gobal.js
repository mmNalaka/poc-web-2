import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

import { magnetic } from "./colors"

export const GlobalStyles = createGlobalStyle`
  ${normalize()}

  @import "node_modules/@izettle/web-brand/fonts";

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: Zent, sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: black;
  }

  body {
    margin: 0;
    font-family: Zent, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.15;
    color: ${magnetic};
    text-align: left;
    background-color: white;
  }

  a {
    color: inherit;
     &:hover {
      opacity: 0.8;
     }
  }

  ul {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    margin-bottom: 1rem;
  }

h1, h2, h3, h4, h5, h6{
  width: 100%;
  font-weight: 600;
  line-height: 1.125;
  font-family: Tiempos, sans-serif;
  letter-spacing: 0.03em;
}

.h1,
h1 {
  font-size: 3rem;
}

.h2,
h2 {
  font-size: 2.4rem;
}

.h3,
h3 {
  font-size: 2rem;
}

.h4,
h4 {
  font-size: 1.8rem;
}

.h5,
h5 {
  font-size: 1.4rem;
}

.h6,
h6{
  font-size: 1.4rem;
}


`
