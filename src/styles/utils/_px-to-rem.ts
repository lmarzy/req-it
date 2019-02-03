// ========================================================================
// TOOLS/FUNCTIONS/PX-TO-REM
// ========================================================================

// usage
// rem(24);

import { fontSizePx } from '../settings';

export const rem = (pxSize: number) => {
  const remSize = pxSize / fontSizePx;

  return `${remSize}rem`;
};
