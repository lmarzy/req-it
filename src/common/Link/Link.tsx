import * as React from 'react';
import { StyledLink } from './styled';

interface LinkProps {
  to: string;
}

export const Link: React.FunctionComponent<LinkProps> = ({ to, children }) => (
  <StyledLink href={to}>{children}</StyledLink>
);
