import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppRoutes from '../../routes/routes.enum';

import { Header, Footer } from './views';
import { Home, About } from '../../routes';

import GlobalStyles from '../../styles/global';

export const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Router>
      <main>
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
      </main>
    </Router>
    <Footer />
  </>
);
