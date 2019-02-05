import { createGlobalStyle } from 'styled-components';
import { boxSizing, reset, normalise } from './base';
import { page, links, images, tables } from './elements';

const GlobalStyles = createGlobalStyle`
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;

export default GlobalStyles;
