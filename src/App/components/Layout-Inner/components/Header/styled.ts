import styled from 'styled-components';
import { colors, spacers } from '../../../../../styles/settings';
import { rem } from '../../../../../styles/utils';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  min-height: ${rem(60)};
  padding-left: ${spacers[2]};
  border-bottom: 1px solid ${colors.greyE};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, ${colors.red}, ${colors.orange});
  }

  nav {
    margin-left: auto;
  }
`;
