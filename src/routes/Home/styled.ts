import styled from 'styled-components';
import { rem } from '../../styles/utils';

export const StyledHome = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;

    h1 {
      font-size: ${rem(24)};
      text-transform: uppercase;
    }
  }
`;
