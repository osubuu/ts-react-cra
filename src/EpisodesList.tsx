import React from 'react';
import { Episode, Action } from './interfaces';

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavoriteAction, favorites } = props;
  return (
    <ul className="episode-layout">
      {episodes.map((episode: Episode) => {
        const episodeIsFavorited = favorites.includes(episode);
        return (
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
            <button type="button" onClick={(): Action => toggleFavoriteAction(episode)}>
              {episodeIsFavorited ? 'Remove from ' : 'Add to '}
              {' '}
              favorites
            </button>
          </li>
        );
      })}
    </ul>
  );
}
