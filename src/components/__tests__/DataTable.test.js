import { render, screen } from '@testing-library/react';
import { DataTable } from '../DataTable';


describe('DataTable Component', () => {
  
  test('renders table with data', () => {
    const data = [
      { 's.no': 1, 'amt.pledged': 1000, 'percentage.funded': '100%' }
    ];

    render(<DataTable pageNumber={1} data={data} />);

    // Assert the table headers are rendered correctly
    expect(screen.getByText('S No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage Funded')).toBeInTheDocument();
    expect(screen.getByText('Amount Pledged')).toBeInTheDocument();

    // Assert that the data rows are rendered correctly
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
