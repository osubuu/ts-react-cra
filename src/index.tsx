import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';
import App from './components/App';
import { StoreProvider } from './store/store';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './styles/index.css';
import './styles/App.css';

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
