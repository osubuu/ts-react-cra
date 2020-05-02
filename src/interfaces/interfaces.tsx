export interface State {
  episodes: Episode[];
  favorites: Episode[];
}

export interface Action {
  type: string;
  payload: Episode[] | any;
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

export type Dispatch = React.Dispatch<Action>;

export interface EpisodeProps {
  episodes: Episode[];
  store: {
    state: State;
    dispatch: Dispatch;
  };
  toggleFavoriteAction: (state: State, episode: Episode, dispatch: Dispatch) => Action;
  favorites: Episode[];
}
