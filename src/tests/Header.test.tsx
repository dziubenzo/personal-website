import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

it('shows a header div', () => {
  render(<Header />);

  const headerDiv = screen.getByText(/header/i);

  expect(headerDiv).toBeInTheDocument();
});
