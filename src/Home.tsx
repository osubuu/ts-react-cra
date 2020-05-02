import React from 'react';
import { Store } from './store';
import { Episode, Action, EpisodeProps } from './interfaces';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function Home(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async (): Promise<Action> => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(url);
    const { _embedded } = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: _embedded.episodes,
    });
  };

  const toggleFavoriteAction = (episode: Episode): Action => {
    const episodeIsFavorited = state.favorites.includes(episode);
    return dispatch({
      type: episodeIsFavorited ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: episode,
    });
  };

  // useEffect is similar to componentDidMount, DidUpdate and DillUnmount all together
  // it runs after render
  React.useEffect(() => {
    if (state.episodes.length === 0) {
      fetchDataAction();
    }
  });

  const episodeProps: EpisodeProps = {
    episodes: state.episodes,
    toggleFavoriteAction,
    favorites: state.favorites,
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <EpisodesList
        episodes={episodeProps.episodes}
        toggleFavoriteAction={episodeProps.toggleFavoriteAction}
        favorites={episodeProps.favorites}
      />
    </React.Suspense>
  );
}
