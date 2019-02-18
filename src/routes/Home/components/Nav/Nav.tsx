import * as React from 'react';
import AppRoutes from '../../../routes.enum';

import { StyledNav } from './styled';

export const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <a href={AppRoutes.About}>About</a>
      </li>
      <li>
        <a href={AppRoutes.About}>Experience</a>
      </li>
      <li>
        <a href={AppRoutes.About}>Technologies</a>
      </li>
    </ul>
  </StyledNav>
);
