import styled from 'styled-components';
import { spacers } from '../../../../styles/settings';
import { media } from '../../../../styles/mixins';
import { rem } from '../../../../styles/utils';

export const StyledNav = styled.nav`
  li:not(:last-child) {
    margin-bottom: ${spacers[2]};
  }

  a {
    display: block;
    padding: ${spacers[1]};
    color: #7a7a8c;
    border: 1px solid #7a7a8c;
    border-radius: 25px;

    &:hover,
    &:focus {
      background-image: linear-gradient(to right, #ffbf71, #ff8500);
      color: white;
    }
  }

  ${media[10]`
    ul {
      display: flex;
    }
    li {
      min-width: ${rem(135)};
    }

    li:not(:last-child) {
      margin-bottom: 0;
      margin-right: ${spacers[1]};
    }
  `}
`;
