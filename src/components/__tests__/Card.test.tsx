import { Card, cardPropsNumber } from 'components/Card';
import { render, screen } from 'testing';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  const mockSetContentDeal = jest.fn();

  const props: cardPropsNumber = {
    value: 'A',
    suit: 'Diamond',
    cardNumber: 1,
    contentDeal: true,
    setContentDeal: mockSetContentDeal,
  };

  test('Should render the correct card data', () => {
    render(<Card {...props} />);
    const value = screen.getByText('A');
    const imageSuit = screen.getAllByAltText('Diamond');

    expect(value).toBeInTheDocument();
    expect(imageSuit[0]).toBeInTheDocument();
  });
});
