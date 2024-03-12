import React from 'react';
import { render, screen } from '@testing-library/react';
import CostTable from '../components/CostTable';

describe.skip("test case 1", ()=> {
  test('calls onClick prop when clicked', () => {
    render(<CostTable />);
    const incrediblesPosterImg = screen.getByAltText(/image/i)
    expect(incrediblesPosterImg).toBeInTheDocument()
  })
  
  test('calls onClick prop when clicked', () => {
    render(<CostTable />);
    const div = screen.getByRole("costtable")
    expect(div).toBeInTheDocument()
  })
})

describe("test case 2", ()=> {
  test('renders table headers correctly', () => {
    render(<CostTable />);
    expect(screen.getByText('Cost Name')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Cost')).toBeInTheDocument();
    expect(screen.getByText('Cost Value')).toBeInTheDocument();
  });
  
  test('renders rows correctly', () => {
    render(<CostTable />);
    const tableRows = screen.getAllByRole('row');
    const rowTextContents = tableRows.map(row => row.textContent);
    
    // expect(rowTextContents).getByText('Pricing').toBeInTheDocument();
    // expect(rowTextContents).getByText('Fair Value').toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  
    expect(screen.getByText('Fair Value')).toBeInTheDocument();
  });
})
