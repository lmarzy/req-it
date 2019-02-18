import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers, colors } from '../../styles/settings';
import { media } from '../../styles/mixins';

export const StyledHome = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
  }

  h1 {
    font-size: ${rem(28)};
    text-transform: uppercase;
    text-shadow: 2px 2px ${colors.darkOrange};
  }

  p {
    margin-bottom: ${spacers[3]};
    font-size: ${rem(20)};
    text-shadow: 2px 2px 5px #000;
  }

  ${media[10]`
    h1 {
      font-size: ${rem(42)};
    }

    p {
      font-size: ${rem(22)};
    }
  `}
`;
