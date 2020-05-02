import { Episode, Action, State } from './interfaces';

export const fetchDataAction = async (dispatch: any): Promise<Action> => {
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(url);
  const { _embedded } = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: _embedded.episodes,
  });
};

export const toggleFavoriteAction = (state: State, episode: Episode, dispatch: any): Action => {
  const episodeIsFavorited = state.favorites.includes(episode);
  return dispatch({
    type: episodeIsFavorited ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
    payload: episode,
  });
};
