import styled from 'styled-components';
import { rem } from '../../../../../../../styles/utils';
import { colors } from '../../../../../../../styles/settings';
import { media } from '../../../../../../../styles/mixins';

export const StyledLogo = styled.h1`
  a {
    font-size: ${rem(18)};
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px ${colors.red}, 2px 2px ${colors.orange};
  }

  ${media[10]`
    a {
      font-size: ${rem(24)};
    }
  `}
`;
