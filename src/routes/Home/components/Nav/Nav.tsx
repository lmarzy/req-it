import * as React from 'react';
import AppRoutes from '../../../routes.enum';

import { StyledNav } from './styled';

const navItems = [
  {
    link: 'About',
    to: AppRoutes.About,
  },
  {
    link: 'Experience',
    to: AppRoutes.experience,
  },
  {
    link: 'technology',
    to: AppRoutes.technology,
  },
];

export const Nav = () => (
  <StyledNav>
    <ul>
      {navItems.map(item => (
        <li key={item.link}>
          <a href={item.to}>{item.link}</a>
        </li>
      ))}
    </ul>
  </StyledNav>
);
