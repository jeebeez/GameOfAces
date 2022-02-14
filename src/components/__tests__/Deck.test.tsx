import { Deck } from 'components/Deck';
import { renderWithContext, screen, userEvent } from 'testing';
import '@testing-library/jest-dom';

describe('Deck Component', () => {
  const arrays = new Array(5667747).fill(0);
  const mockDealButton = jest.fn();
  const mockResetButton = jest.fn();

  test('Should render the deck', () => {
    renderWithContext(<Deck />);

    const deckComponent = screen.queryByTestId('deckComponent');
    expect(deckComponent).toBeInTheDocument();
  });

  test('Should render the shuffled deck, aces passed as props with renderWithContext', () => {
    renderWithContext(<Deck />, { shuffledDeck: arrays, aces: '455667783' });

    const cardLeft = screen.getByText(/5667747/i);
    expect(cardLeft).toBeInTheDocument();

    const acesLeft = screen.getByText(/455667783/i);
    expect(acesLeft).toBeInTheDocument();
  });

  test('Should call the Deal and Reset mocks on clicking the buttons', () => {
    renderWithContext(<Deck />, {
      deal: mockDealButton,
      contentDeal: false,
      newGame: mockResetButton,
    });

    const dealButton = screen.getByRole('button', {
      name: /Deal/i,
    });
    userEvent.click(dealButton);
    expect(mockDealButton).toHaveBeenCalledTimes(1);

    const resetButton = screen.getByRole('button', {
      name: /Reset/i,
    });
    userEvent.click(resetButton);
    expect(mockResetButton).toHaveBeenCalledTimes(1);
  });
});
