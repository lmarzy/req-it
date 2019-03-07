import styled from 'styled-components';
import { spacers, colors } from '../../../../styles/settings';
import { media } from '../../../../styles/mixins';
import { rem } from '../../../../styles/utils';

import { fadeIn } from '../../../../styles/animation';

export const StyledNav = styled.nav`
  li {
    opacity: 0;
    transform: scale(0.7);
  }

  li:not(:last-child) {
    margin-bottom: ${spacers[2]};
  }

  li:nth-child(1) {
    animation: ${fadeIn} 400ms 800ms ease-in forwards;
  }

  li:nth-child(2) {
    animation: ${fadeIn} 600ms 1100ms ease-in forwards;
  }

  li:nth-child(3) {
    animation: ${fadeIn} 800ms 1500ms ease-in forwards;
  }

  a {
    position: relative;
    display: block;
    padding: ${spacers[1]};
    color: ${colors.greyC};
    background: ${colors.greyA};
    border: 2px solid transparent;
    border-radius: 25px;
    text-align: center;
    background-clip: padding-box;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -2px;
      border-radius: inherit;
      background: ${colors.greyD};
    }

    &:hover,
    &:focus {
      color: white;

      &:before {
        background: linear-gradient(to right, ${colors.red}, ${colors.orange});
      }
    }
  }

  ${media[10]`
    ul {
      display: flex;
    }
    li {
      flex: 1;
      min-width: ${rem(135)};
      padding: 0 6px;
    }

    li:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;
