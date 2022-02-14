import { Result } from 'components/Result';
import { renderWithContext, screen, userEvent } from 'testing';
import '@testing-library/jest-dom';

jest.mock('canvas-confetti');

describe('Result Component', () => {
  beforeEach(() => {
    let portalRoot = document.getElementById('portal');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal');
      document.body.appendChild(portalRoot);
    }
  });
  const mockNewGame = jest.fn();

  test('Should render the winning image and condition also should call the mock passed as props on clicking Play again', () => {
    renderWithContext(<Result />, { decision: 'won', newGame: mockNewGame });

    const resultComponent = screen.queryByTestId('resultComponent');
    expect(resultComponent).toBeInTheDocument();

    const winnerImage = screen.getByAltText('winner');
    expect(winnerImage).toBeInTheDocument();

    const playAgainButton = screen.getByRole('button', {
      name: /Play Again/i,
    });
    userEvent.click(playAgainButton);
    expect(mockNewGame).toHaveBeenCalledTimes(1);
  });

  test('Should render the losing condition', () => {
    renderWithContext(<Result />, { decision: 'lose' });

    const resultComponent = screen.queryByTestId('resultComponent');
    const textOne = screen.getByText(/You lost 🥺/i);
    const textTwo = screen.getByText(/Better luck next time 👍/i);

    expect(resultComponent).toBeInTheDocument();
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
  });
});
