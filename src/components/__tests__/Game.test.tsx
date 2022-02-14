import { Game } from 'components/Game';
import { renderWithContext, screen } from 'testing';
import '@testing-library/jest-dom';

describe('Game Component', () => {
  test('Should render the deck component', () => {
    renderWithContext(<Game />);

    const deckComponent = screen.queryAllByTestId('deckComponent');
    expect(deckComponent[0]).toBeInTheDocument();
  });

  test('Should render the loading component if loading props are true', () => {
    renderWithContext(<Game />, { loading: true });

    const loading = screen.queryByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  describe('Render the result component as the passed aces are 0', () => {
    beforeEach(() => {
      let portalRoot = document.getElementById('portal');
      if (!portalRoot) {
        portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', 'portal');
        document.body.appendChild(portalRoot);
      }
    });
    test('Should render the result component', () => {
      renderWithContext(<Game />, { aces: 0 });

      const resultComponent = screen.queryByTestId('resultComponent');
      expect(resultComponent).toBeInTheDocument();
    });

    test('Should not render the result component', () => {
      renderWithContext(<Game />, { aces: 1 });

      const resultComponent = screen.queryByTestId('resultComponent');
      expect(resultComponent).not.toBeInTheDocument();
    });
  });
});
