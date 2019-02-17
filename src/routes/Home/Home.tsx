import * as React from 'react';
import { StyledHome } from './styled';
import AppRoutes from '../routes.enum';

export const Home = () => (
  <StyledHome>
    <div>
      <h1>Req Ltd</h1>
      <p>Front End Development</p>

      <nav>
        <ul>
          <li>
            <a href={AppRoutes.About}>About</a>
          </li>
        </ul>
      </nav>
    </div>
  </StyledHome>
);
