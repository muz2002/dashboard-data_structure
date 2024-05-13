// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';
import bgAdmin from "../../images/body-background.png";
import colors from "./colors";

const { info, dark } = colors;

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background: url(${bgAdmin});
    background-color: #030c1d !important;
    background-size: cover;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }
  a, a:link, a:visited {
    text-decoration: none !important;
  }
  a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited {
    color: ${dark.main} !important;
    transition: color 150ms ease-in !important;
  }
  a.link:hover, .link:hover, a.link:focus, .link:focus {
    color: ${info.main} !important;
  }
`;
