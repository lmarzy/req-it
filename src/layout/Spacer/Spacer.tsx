import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers } from '../../styles/settings';

interface SpacerProps {
  size: number;
}

export const Spacer = styled.div<SpacerProps>`
  margin-bottom: ${props => rem(spacers[props.size])};
`;
