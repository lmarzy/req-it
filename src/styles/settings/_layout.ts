// ========================================================================
// SETTINGS/LAYOUT
// ========================================================================

import { lineHeightPx } from './_typography';

const spacer = lineHeightPx / 4;
const range = 8;

export const maxWidth = '1024px';
export const spacers = {} as { [key: number]: number };

for (let i = 1; i <= range; i++) {
  spacers[i] = spacer * i;
}
