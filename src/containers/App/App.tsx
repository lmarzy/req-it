import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppRoutes from '../../routes/routes.enum';
import { Home, About } from '../../routes';

import { LayoutInner } from '../../common';

import GlobalStyles from '../../styles/global';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path={AppRoutes.Home} component={Home} />
        <LayoutInner>
          <Route path={AppRoutes.About} component={About} />
        </LayoutInner>
      </Switch>
    </Router>
  </>
);
