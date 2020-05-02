import React from 'react';
import { Store } from './store';

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async () => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(url);
    const { _embedded } = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: _embedded.episodes,
    });
  };

  // useEffect is similar to componentDidMount, DidUpdate and DillUnmount all together
  // it runs after render
  React.useEffect(() => {
    if (state.episodes.length === 0) {
      fetchDataAction();
    }
  });

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </>
  );
}
