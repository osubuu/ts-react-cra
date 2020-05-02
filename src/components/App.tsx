import React from 'react';
import { Link } from '@reach/router';
import { Store } from '../store/store';

export default function App({ children }: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div className="header-content wrapper">
          <div>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite episode!</p>
          </div>
          <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/favorites">
              {' '}
              Favorite(s):
              {' '}
              {state.favorites.length}
            </Link>
          </nav>
        </div>
      </header>
      <main className="wrapper">
        {children}
      </main>
    </>
  );
}
