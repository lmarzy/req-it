import styled from 'styled-components';
import { hiddenVisually } from '../../../../styles/mixins';

import { fadeIn } from '../../styled';

export const StyledSocialLinks = styled.ul`
  display: flex;
  opacity: 0;
  transform: scale(0.7);
  animation: ${fadeIn} 600ms 1800ms ease-in forwards;

  li {
    padding: 0 4px;

    span {
      ${hiddenVisually}
    }
  }
`;