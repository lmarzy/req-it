import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../../styles/main.scss';

import { Header, Footer } from './components';
import { Home, About } from '../../routes';

interface AppProps {
  a: string;
  b: number;
}

export const App = ({ a, b }: AppProps) => (
  <>
    <Header />
    <Router>
      <>
        <ul data-testid="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </>
    </Router>
    <Footer />
  </>
);
