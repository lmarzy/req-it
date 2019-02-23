import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavList } from './styled';
import { routes } from '../../../../../../routes/routes';

export const Nav: React.FunctionComponent = () => (
  <nav>
    <StyledNavList>
      {routes.map(route => (
        <li key={route.route}>
          <NavLink to={route.route} activeClassName="active">
            {route.linkName}
          </NavLink>
        </li>
      ))}
    </StyledNavList>
  </nav>
);
