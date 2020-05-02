import React from 'react';

interface State {
  episodes: [];
  favorites: [];
}

interface Action {
  type: string;
  payload: any;
}

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
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
