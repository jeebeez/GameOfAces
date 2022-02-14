import { Counter, counterProps } from 'components/Counter';
import { render, screen } from 'testing';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  const props: counterProps = {
    itemCount: '4',
    value: 'Aces',
  };

  test('Should render the correct data for cards and aces', () => {
    render(<Counter {...props} />);
    const itemCount = screen.getByText('4');
    const value = screen.getByText(/Aces/i);

    expect(itemCount).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
