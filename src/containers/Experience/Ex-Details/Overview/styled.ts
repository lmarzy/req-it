import styled from 'styled-components';
import { spacers, colors } from '../../../../styles/settings';
import { media } from '../../../../styles/mixins';
import { rem } from '../../../../styles/utils';

export const StyledOverview = styled.div`
  display: grid;
  grid-template-areas:
    'logo logo'
    'from to'
    'position position';
  grid-gap: ${spacers[2]};
  margin-bottom: ${spacers[4]};

  .from {
    grid-area: from;
  }

  .to {
    grid-area: to;
  }

  .position {
    grid-area: position;
  }

  ${media[10]`
    grid-template-areas: "logo from to position";
  `}

  ${media[15]`
    grid-gap: ${spacers[8]};
    grid-template-columns: auto auto auto 1fr;
    padding-left: ${rem(15)};
  `}
`;

export const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: ${spacers[2]};

  ${media[15]`
    margin-bottom: 0;
  `}
`;

export const StyledList = styled.dl`
  margin-bottom: ${spacers[1]};

  dt {
    font-size: ${rem(14)};
    color: ${colors.greyC};
  }

  dd {
    font-size: ${rem(15)};
  }
`;
