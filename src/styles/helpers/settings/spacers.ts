// STYLES/HELPERS/SETTINGS/SPACERS

import { baseLineHeight } from './typography';

const spacer = baseLineHeight / 4;
const range = 6;

export const spacers = {} as { [key: number]: string };

for (let i = 0; i <= range; i++) {
  spacers[i] = spacer * i + 'px';
}
