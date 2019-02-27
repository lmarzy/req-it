import styled, { keyframes } from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers, colors } from '../../styles/settings';
import { media } from '../../styles/mixins';

export const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledHome = styled.header`
  margin: 10px;
  height: calc(100vh - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, ${colors.greyA}, ${colors.greyB});
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  border-radius: 6px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50%;
    margin-top: -80px;
  }

  nav {
    width: 100%;
    margin-bottom: ${spacers[4]};
  }

  h1,
  p {
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: ${spacers[4]};
    font-size: ${rem(14)};
    text-shadow: 2px 2px 5px #000;
    opacity: 0;
    transform: scale(0.7);
    animation: ${fadeIn} 400ms 400ms ease-in forwards;
  }

  ${media[10]`
    height: calc(100vh - 30px);
    margin: 15px;
    p {
      font-size: ${rem(16)};
    }
  `}

  ${media[20]`
    height: calc(100vh - 40px);
    margin: 20px;
    h1,
    p {
      letter-spacing: 8px;
    }
    p {
      font-size: ${rem(18)};
    }
  `}
`;
