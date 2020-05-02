import React from 'react';
import { Episode, Action } from '../interfaces/interfaces';

export default function EpisodesList(props: any): JSX.Element {
  const {
    episodes, toggleFavoriteAction, favorites,
    store,
  } = props;
  const { state, dispatch } = store;
  return (
    <ul className="episode-layout">
      {episodes.map((episode: Episode) => {
        const episodeIsFavorited = favorites.includes(episode);
        const hasImage = episode.image;
        return hasImage ? (
          <li key={episode.id} className="episode-box">
            <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
            <p>{episode.name}</p>
            <p>
              Season:
              {' '}
              {episode.season}
              {' '}
              Episode:
              {' '}
              {episode.number}
            </p>
            <button type="button" onClick={(): Action => toggleFavoriteAction(state, episode, dispatch)}>
              {episodeIsFavorited ? 'Remove from ' : 'Add to '}
              {' '}
              favorites
            </button>
          </li>
        ) : null;
      })}
    </ul>
  );
}
