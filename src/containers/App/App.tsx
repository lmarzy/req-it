import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import GlobalStyles from '../../styles/global';

import { Home } from '../../routes';
import { LayoutInner } from './components/Layout-Inner/Layout-Inner';
import { routes } from '../../routes/routes';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjsj9fq0l7ovr01fjonr4grom/master',
});

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <LayoutInner>
          {routes.map(route => (
            <Route key={route.linkName} path={route.path} component={route.component} />
          ))}
        </LayoutInner>
      </Switch>
    </Router>
  </ApolloProvider>
);
