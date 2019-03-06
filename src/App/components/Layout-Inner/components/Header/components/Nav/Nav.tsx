import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavList } from './styled';
import { routes } from '../../../../../../routes';

export const Nav: React.FunctionComponent = () => (
  <nav>
    <StyledNavList>
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
    </StyledNavList>
  </nav>
);
