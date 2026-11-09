import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home', () => {
  render(<App />);
  expect(screen.getByText(/content management platform/i)).toBeInTheDocument();
});