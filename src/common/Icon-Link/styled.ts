import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { colors } from '../../styles/settings';

export const StyledIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  padding: ${rem(10)};
  border: 1px solid ${colors.greyC};
  border-radius: 50%;

  &:hover,
  &:focus {
    background: white;

    svg {
      fill: black;
    }
  }

  svg {
    width: ${rem(20)};
    height: ${rem(20)};
    fill: ${colors.greyC};
  }
`;
