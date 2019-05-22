import { createGlobalStyle } from "styled-components"
import { colors } from "@izettle/web-brand"

export default createGlobalStyle`
@import "node_modules/@izettle/web-brand/fonts";


*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
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
  color: ${colors.brand.magnetic.primary};
  text-align: left;
  background-color: white;
}

textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
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
  font-family: Tiempos;
  letter-spacing: 0.03em;
}

a {
  color: interit;
}

ul {
  margin: 0;
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

img {
  width: 100%;
  height: auto;
}

/* Font Styles */
.font-zent {
  font-family: Zent;
}

.font-tiempos {
  font-family: Tiempos;
}

/* Helpers */
.text-left{
  text-align: left;
}

.text-center{
  text-align: center;
}

.text-right {
  text-align: right;
}
`
