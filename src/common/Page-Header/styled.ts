import styled from 'styled-components';
import { colors, spacers } from '../../styles/settings';
import { rem } from '../../styles/utils';
import { media } from '../../styles/mixins';

export const StyledPageheader = styled.header`
  margin-bottom: ${spacers[4]};
  padding-bottom: ${spacers[2]};
  border-bottom: 1px solid ${colors.greyD};

  h2 {
    font-size: ${rem(20)};
    text-transform: uppercase;
    text-align: center;
  }

  ${media[10]`
    h2 {
      font-size: ${rem(28)};
    }
  `};
`;
