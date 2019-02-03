import * as React from 'react';

import { Container } from '../Container/Container';
import { Spacer } from '../Spacer/Spacer';

export const Header = () => (
  <header>
    <Container>
      <Spacer size={1}>
        <h1>React Typescript App</h1>
      </Spacer>
    </Container>
  </header>
);
