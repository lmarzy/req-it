import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

import { StyledNav } from './styled';

export const Nav = () => (
  <StyledNav>
    <ul>
      {routes.map(route => {
        if (route.linkName !== 'ExperienceDetails') {
          return (
            <li key={route.path}>
              <NavLink to={route.path} activeClassName="active">
                {route.linkName}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  </StyledNav>
);
