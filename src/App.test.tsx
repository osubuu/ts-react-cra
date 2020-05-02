import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './store';

test('renders learn react link', () => {
  const { getByText } = render(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );
  const linkElement = getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
