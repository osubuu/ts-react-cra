import React from 'react';
import { Store } from '../store/store';
import { toggleFavoriteAction } from '../store/actions';
import EpisodesList from '../components/EpisodesList';

export default function Favorites(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const episodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavoriteAction,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <EpisodesList
        episodes={episodeProps.favorites}
        store={episodeProps.store}
        toggleFavoriteAction={episodeProps.toggleFavoriteAction}
        favorites={episodeProps.favorites}
      />
    </React.Suspense>
  );
}
