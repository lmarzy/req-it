import styled from 'styled-components';
import { rem } from '../../../../../../../../styles/utils';
import { colors, spacers } from '../../../../../../../../styles/settings';
import { media } from '../../../../../../../../styles/mixins';

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
      background-color: ${colors.greyA};
      color: white;
      cursor: default;

      &:hover,
      &:focus {
        background: ${colors.greyA};
        color: white;
      }
    }

    &:hover,
    &:focus {
      background-color: ${colors.greyD};
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
