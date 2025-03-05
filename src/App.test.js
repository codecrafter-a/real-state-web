import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('debug rendered output', () => {
  render(
    <MemoryRouter initialEntries={['/he']}>
      <App />
    </MemoryRouter>
  );

  screen.debug(); // Prints the rendered output
});
