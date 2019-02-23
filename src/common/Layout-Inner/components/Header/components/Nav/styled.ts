import styled from 'styled-components';
import { rem } from '../../../../../../styles/utils';
import { colors, spacers } from '../../../../../../styles/settings';
import { media } from '../../../../../../styles/mixins';

export const StyledNavList = styled.ul`
  display: flex;

  li {
    height: ${rem(60)};
    border-left: 1px solid ${colors.greyD};
  }

  a {
    display: flex;
    height: 100%;
    padding-left: ${spacers[1]};
    padding-right: ${spacers[1]};
    align-items: center;
    color: ${colors.greyC};

    &.active {
      background-color: ${colors.greyD};
      color: white;
      cursor: default;

      &:hover,
      &:focus {
        background: ${colors.greyD};
      }
    }

    &:hover,
    &:focus {
      background-image: linear-gradient(${colors.red}, ${colors.orange});
      color: white;
    }
  }

  ${media[10]`
    li {
      height: ${rem(80)};
    }

    a {
      padding-left: ${spacers[4]};
      padding-right: ${spacers[4]};
    }
  `}
`;
