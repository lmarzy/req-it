import * as React from 'react';
import { routes } from '../../../routes';

import { StyledNav } from './styled';

export const Nav = () => (
  <StyledNav>
    <ul>
      {routes.map(item => (
        <li key={item.route}>
          <a href={item.route}>{item.linkName}</a>
        </li>
      ))}
    </ul>
  </StyledNav>
);
