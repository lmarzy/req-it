import styled from 'styled-components';
import { colors } from '../../../styles/settings';

export const StyledExperienceList = styled.ul`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-1px);
    background-color: ${colors.greyD};
  }
`;
