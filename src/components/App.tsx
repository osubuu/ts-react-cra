import React from 'react';
import { Link } from '@reach/router';
import { Store } from '../store/store';

export default function App({ children }: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favorites">
            {' '}
            Favorite(s):
            {' '}
            {state.favorites.length}
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}