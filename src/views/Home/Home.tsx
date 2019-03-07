import * as React from 'react';
import { StyledHome } from './styled';

import { SocialLinks } from '../../components';
import { Heading, Nav } from './components';

export const Home = () => (
  <StyledHome>
    <div>
      <Heading />
      <p>Front-End Development</p>
      <Nav />
      <SocialLinks />
    </div>
  </StyledHome>
);
