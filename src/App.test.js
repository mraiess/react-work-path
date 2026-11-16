import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './App';

test('renders app header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/Atelier des Potions Enchantées/i)).toBeInTheDocument();
});