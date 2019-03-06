import * as React from 'react';
import { Header, Footer } from './components';
import { Container } from '../../../components';

export const LayoutInner: React.FunctionComponent = ({ children }) => (
  <>
    <Header />
    <Container>
      <main>
        <section>{children}</section>
      </main>
    </Container>
    <Footer />
  </>
);
