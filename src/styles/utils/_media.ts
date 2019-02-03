// ========================================================================
// UTILS/MEDIA
// ========================================================================

import { css } from 'styled-components';
import { breakpoints, fontSizePx } from '../settings';

export const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
      @media (min-width: ${breakpoints[label] / fontSizePx}em) {
        ${css(literals, ...placeholders)}
      }
    `;
    return acc;
  },
  {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>,
);
