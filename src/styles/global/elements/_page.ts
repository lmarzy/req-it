// ========================================================================
// GLOBAL/ELEMENTS/PAGE
// ========================================================================

// min-height - Ensures the page fills at least the entire height of the viewport
// box-sizing -  Set to border-box to prevent sizing issues with padding and borders
// font-size - Set to 100%, this allows the site to adapt to the font size being used by the browser instead of forcing this value on the user
// font-family -  Set to allow the font to cascade to all elements
// line-height -  For overall site line height and vertical rhytym, should be a unitless value
// color - Set for all text elements
// background-color - Set for page background colour
// -ms* - Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.

import { css } from 'styled-components';
import { fontFamily, fontSize, lineHeight, colText } from '../../settings';
import { media } from '../../mixins';

export const page = css`
  html {
    min-height: 100%;
    font-family: ${fontFamily};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${colText};
    background-color: #100e17;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
`;
