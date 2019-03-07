import styled, { keyframes } from 'styled-components';
import { rem } from '../../../../styles/utils';
import { colors } from '../../../../styles/settings';
import { media } from '../../../../styles/mixins';

import { fadeIn } from '../../../../styles/animation';

export const StyledHeader = styled.h1`
  display: inline-block;
  font-size: ${rem(34)};
  text-shadow: 2px 2px ${colors.red}, 4px 4px ${colors.orange};
  opacity: 0;
  transform: scale(0.7);
  animation: ${fadeIn} 600ms ease-in forwards;

  ${media[10]`
    font-size: ${rem(48)};
  `}

  ${media[20]`
    font-size: ${rem(60)};
  `}
`;
