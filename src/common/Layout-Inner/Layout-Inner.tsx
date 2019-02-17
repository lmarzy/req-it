import * as React from 'react';
import { Header, Footer } from './components';

export const LayoutInner: React.FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
