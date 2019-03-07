import styled from 'styled-components';
import { colors, spacers } from '../../../../styles/settings';
import { rem } from '../../../../styles/utils';

export const StyledTechnologiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rem(180)}, 1fr));
  grid-gap: ${spacers[6]};
  justify-items: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rem(120)};
    height: ${rem(120)};
    border-radius: 50%;
    background-color: ${colors.greyB};
    border: 1px solid ${colors.greyA};
    text-align: center;
  }
`;
