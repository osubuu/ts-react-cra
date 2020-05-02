import React from 'react';
import { Store } from '../store/store';
import { EpisodeProps } from '../interfaces/interfaces';
import { fetchDataAction, toggleFavoriteAction } from '../store/actions';

const EpisodesList = React.lazy<any>(() => import('../components/EpisodesList'));

export default function Home(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  // useEffect is similar to componentDidMount, DidUpdate and DillUnmount all together
  // it runs after render
  React.useEffect(() => {
    if (state.episodes.length === 0) {
      fetchDataAction(dispatch);
    }
  });

  const episodeProps: EpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavoriteAction,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <EpisodesList
        episodes={episodeProps.episodes}
        store={episodeProps.store}
        toggleFavoriteAction={episodeProps.toggleFavoriteAction}
        favorites={episodeProps.favorites}
      />
    </React.Suspense>
  );
}
