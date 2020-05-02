import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';
import './index.css';
import App from './App';
import { StoreProvider } from './store';
import Home from './Home';
import Favorites from './Favorites';

const RouterPage = (
  props: {pageComponent: JSX.Element} & RouteComponentProps,
): JSX.Element => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<Favorites />} path="/favorites" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
