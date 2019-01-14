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

import { fontFamily, fontSize, lineHeight } from '../../settings';

export const page = `
  html {
    min-height: 100%;
    font-family: ${fontFamily};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: $col-text;
    background-color: $col-bg;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  .test {
    margin-bottom: spacer(1);
  }
`;
