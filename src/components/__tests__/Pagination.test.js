import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../Pagination';

describe('Pagination Component', () => {
  let setPageNumber;

  beforeEach(() => {
    setPageNumber = jest.fn();
  });
  test('renders buttons and applies styles when pageNumber is 0', () => {
    render(<Pagination pageNumber={0} setPageNumber={setPageNumber} />);

    const prevButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    // Assert that the "Previous" button is disabled and has the correct style
    expect(prevButton).toBeDisabled();
    expect(prevButton).toHaveStyle('opacity: 0.5');
    expect(prevButton).toHaveStyle('cursor: not-allowed');

    // Assert that the "Next" button is enabled and has the correct style
    expect(nextButton).toBeEnabled();
    expect(nextButton).not.toHaveStyle('opacity: 0.5');
    expect(nextButton).not.toHaveStyle('cursor: not-allowed');
  });
  test('clicking "Previous" button decreases pageNumber', () => {
    render(<Pagination pageNumber={5} setPageNumber={setPageNumber} />);

    const prevButton = screen.getByText('Previous');
    fireEvent.click(prevButton);

    expect(setPageNumber).toHaveBeenCalledWith(4);
  });

  test('clicking "Next" button increases pageNumber', () => {
    render(<Pagination pageNumber={5} setPageNumber={setPageNumber} />);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(setPageNumber).toHaveBeenCalledWith(6);
  });
});
