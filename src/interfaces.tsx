export interface State {
  episodes: Episode[];
  favorites: Episode[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Episode {
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

export interface EpisodeProps {
  episodes: Episode[];
  store: {
    state: State;
    dispatch: any;
  };
  toggleFavoriteAction: (state: State, episode: Episode, dispatch: any) => Action;
  favorites: Episode[];
}
