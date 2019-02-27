import * as React from 'react';
import { StyledHeader } from './styled';
import { Logo, Nav } from './components';

export const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);
