import * as React from 'react';
import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers } from '../../styles/settings';

interface SpacerProps {
  marginSize?: number;
}

const StyledSpacer = styled.div`
  margin-bottom: ${({ marginSize }: SpacerProps) => spacers[marginSize || 4]};
`;

export const Spacer: React.FunctionComponent<SpacerProps> = ({ children, marginSize }) => (
  <StyledSpacer marginSize={marginSize}>{children}</StyledSpacer>
);
