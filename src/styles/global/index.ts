import { createGlobalStyle } from 'styled-components';
import { fontUrl } from '../settings';
import { boxSizing, reset, normalise } from './base';
import { page, links, images, tables } from './elements';

const GlobalStyles = createGlobalStyle`
  @import url(${fontUrl});
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;

export default GlobalStyles;
