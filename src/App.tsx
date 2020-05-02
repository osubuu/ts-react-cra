import React from 'react';
import { Store, Action } from './store';

interface Episode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

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

  const toggleFavoriteAction = (episode: Episode): Action => dispatch({
    type: 'ADD_FAVORITE',
    payload: episode,
  });

  // useEffect is similar to componentDidMount, DidUpdate and DillUnmount all together
  // it runs after render
  React.useEffect(() => {
    if (state.episodes.length === 0) {
      fetchDataAction();
    }
  });

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </header>
      <ul className="episode-layout">
        {state.episodes.map((episode: Episode) => (
          <li key={episode.id} className="episode-box">
            {episode.image && <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />}
            <p>{episode.name}</p>
            <p>
              Season:
              {' '}
              {episode.season}
              {' '}
              Number:
              {' '}
              {episode.number}
            </p>
            <button type="button" onClick={(): Action => toggleFavoriteAction(episode)}>Favorite</button>
          </li>
        ))}
      </ul>
    </>
  );
}
