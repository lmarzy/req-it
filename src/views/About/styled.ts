import styled from 'styled-components';
import { spacers } from '../../styles/settings';
import { media } from '../../styles/mixins';

export const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: ${spacers[4]};

  ${media[10]`
    grid-template-columns: 3fr 1fr;
  `};
`;
