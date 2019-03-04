// ========================================================================
// TOOLS/MIXINS/VERTICAL-RHYTHM
// ========================================================================

// Usage
// @include vr(20px, 1, 1); //this gives a font size of 20px, a line height multiplier of 1 and margin bottom of default rhythm.
// @include vr(20px, 2, 2); // this gives a font size of 20px, a line height multiplier of 2 and a double margin bottom.

import { css } from 'styled-components';
import { fontSizePx, lineHeightPx } from '../settings';

export const vr = (size: number, multiplier: number = 1) => css`
  font-size: ${size / fontSizePx}rem;
  line-height: ${(Math.ceil(size / lineHeightPx) * (lineHeightPx * multiplier)) / size};
`;
