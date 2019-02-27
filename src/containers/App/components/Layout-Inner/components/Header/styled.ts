import styled from 'styled-components';
import { colors, spacers } from '../../../../../../styles/settings';
import { rem } from '../../../../../../styles/utils';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-height: ${rem(60)};
  padding-left: ${spacers[2]};
  background: ${colors.greyB};
  border-bottom: 1px solid ${colors.greyD};

  nav {
    margin-left: auto;
  }
`;
