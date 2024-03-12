import { render, screen } from '@testing-library/react';
import DataTable from '../components/class_component/DataTable';

test('renders learn react link', () => {
  render(<DataTable />);
  const linkElement = screen.getByText(/datatable/i);
  const dialogContainer = screen.getByRole('box')
  expect(dialogContainer).toBeInTheDocument();
});
