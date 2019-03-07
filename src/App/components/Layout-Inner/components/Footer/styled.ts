import styled from 'styled-components';
import { colors, spacers } from '../../../../../styles/settings';

export const StyledFooter = styled.footer`
  > div {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: ${spacers[4]};
    padding-bottom: ${spacers[4]};

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(to right, ${colors.red}, ${colors.orange});
    }
  }
`;
