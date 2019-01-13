import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRoutes from '../../routes/routes.enum';

import { Header, Footer } from './components';
import { Home, About } from '../../routes';

import GlobalStyle from '../../styles/base/global';

const Theme = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  color: 'red',
  bgColor: 'yellow',
};

interface AppProps {
  a: string;
  b: number;
}

export const App = ({ a, b }: AppProps) => (
  <>
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Header />
        <Router>
          <>
            <ul data-testid="nav">
              <li>
                <Link to={AppRoutes.Home}>Home</Link>
              </li>
              <li>
                <Link to={AppRoutes.About}>About</Link>
              </li>
            </ul>
            <Route exact path={AppRoutes.Home} component={Home} />
            <Route path={AppRoutes.About} component={About} />
          </>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  </>
);
