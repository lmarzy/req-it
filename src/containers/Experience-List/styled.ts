import styled from 'styled-components';
import { colors, spacers } from '../../styles/settings';

export const StyledExperienceList = styled.ul`
  position: relative;

  li {
    padding: ${spacers[3]};
    background-color: ${colors.greyA};
  }
`;
