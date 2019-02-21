import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../../routes/routes';

import { Home } from '../../routes';
import { LayoutInner } from '../../common';

import GlobalStyles from '../../styles/global';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <LayoutInner>
          {routes.map(route => (
            <Route key={route.route} path={route.route} component={route.component} />
          ))}
        </LayoutInner>
      </Switch>
    </Router>
  </>
);
