import styled, { createGlobalStyle } from 'styled-components';
import { fontFamily, baseFontSize, baseLineHeight, colBg, colText, spacers } from '../helpers/settings';
import { bp } from '../helpers/tools';

interface Theme {
  theme: {
    color: string;
    fontFamily: string;
    bgColor: string;
  };
}

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    box-sizing: border-box;
    font-size: 100%;
    font-family: ${fontFamily};
    line-height: ${baseLineHeight / baseFontSize};
    color: ${colText};
    background-color: ${colBg};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin-bottom: ${spacers[1]};
    ${bp({ type: 'max', bpValue: 10, css: 'background-color: blue; color: orange; ' })}
  }
  
  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body,
  blockquote,
  fieldset,
  figure {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  dl,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  ol,
  ul {
    padding-left: 0;
  }

  dd {
    margin-left: 0;
  }

  fieldset {
    padding: 0;
  }

  legend {
    padding-left: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  small {
    font-size: 80%;
    line-height: normal;
  }

  strong {
    font-weight: bold;
  }

  fieldset {
    border: 0;
  }

  legend {
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    cursor: pointer;
  }

  main {
    display: block;
  }

  a {
    color: $col-links;
    background-color: transparent;
    text-decoration: none;
    transition: $transition;

    &:visited {
      color: $col-links-visited;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      color: $col-links-hover;
    }

    &:active {
      color: $col-links-active;
    }
  }

  img {
    max-width: 100%;
    vertical-align: auto;
    border-style: none;
    font-style: italic;
  }

  img[width],
  img[height] {
    max-width: none;
  }

  img[alt=''],
  img:not([alt]) {
    border: 5px dashed #c00;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
