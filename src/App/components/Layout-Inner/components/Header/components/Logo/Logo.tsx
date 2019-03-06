import * as React from 'react';
import { StyledLogo } from './styled';
import { Link } from 'react-router-dom';

export const Logo: React.FunctionComponent = () => (
  <StyledLogo>
    <Link to="/">Req Ltd</Link>
  </StyledLogo>
);
