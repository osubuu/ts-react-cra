import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';
import './index.css';
import App from './App';
import { StoreProvider } from './store';
import Home from './Home';
import Favorites from './Favorites';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
