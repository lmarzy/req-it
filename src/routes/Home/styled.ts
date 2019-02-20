import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers, colors, colBgA, colBgB } from '../../styles/settings';
import { media } from '../../styles/mixins';

export const StyledHome = styled.header`
  height: calc(100vh - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, ${colBgA}, ${colBgB});
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  border-radius: 6px;

  div {
    text-align: center;
  }

  h1,
  p {
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  h1 {
    font-size: ${rem(34)};
    text-shadow: 2px 2px ${colors.darkOrange};
  }

  p {
    margin-bottom: ${spacers[4]};
    font-size: ${rem(14)};
    text-shadow: 2px 2px 5px #000;
  }

  ${media[10]`
    height: calc(100vh - 30px);
    h1 {
      font-size: ${rem(48)};
    }
    p {
      font-size: ${rem(16)};
    }
  `}

  ${media[20]`
    height: calc(100vh - 50px);
    h1,
    p {
      letter-spacing: 8px;
    }
    h1 {
      font-size: ${rem(60)};
    }
    p {
      font-size: ${rem(18)};
    }
  `}
`;
