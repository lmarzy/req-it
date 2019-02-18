import * as React from 'react';
import { StyledHome } from './styled';

import { Nav } from './components/Nav/Nav';

export const Home = () => (
  <StyledHome>
    <div>
      <h1>Req Ltd</h1>
      <p>Front End Development</p>
      <Nav />
    </div>
  </StyledHome>
);
