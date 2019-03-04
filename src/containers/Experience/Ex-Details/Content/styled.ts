import styled from 'styled-components';
import { spacers, colors } from '../../../../styles/settings';
import { rem } from '../../../../styles/utils';
import { vr, media } from '../../../../styles/mixins';

export const StyledContent = styled.div`
  padding: ${spacers[4]};
  background-color: ${colors.greyB};
  border: 2px solid ${colors.greyA};
  border-radius: 10px 30px 30px 30px;

  p:first-of-type {
    ${vr(18)};
  }

  p:not(:last-of-type) {
    margin-bottom: ${spacers[4]};
  }

  h3 {
    margin-bottom: ${spacers[2]};
    font-size: ${rem(20)};
    color: ${colors.greyC};
  }

  ${media[15]`
    padding: ${spacers[6]};
  `}
`;
