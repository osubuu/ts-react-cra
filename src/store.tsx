import React from 'react';
import { State, Action } from './interfaces';

const initialState: State = {
  episodes: [],
  favorites: [],
};

// Context uses a Provider to pass down data to any Consumers,
// no matter how nested they are in the component tree
export const Store = React.createContext<State | any>(initialState);

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_DATA':
      return { ...state, episodes: payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, payload] };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
