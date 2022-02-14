import { shuffledDeck } from 'testing';
import { shuffle } from 'utils/shuffle';

describe('Shuffle Function', () => {
  test('Should shuffle the data correctly', () => {
    const stringifiedProps = JSON.stringify(shuffledDeck);
    const shuffledArray = shuffle(shuffledDeck);
    const stringifiedShuffledArray = JSON.stringify(shuffledArray);

    expect(stringifiedProps).not.toMatch(stringifiedShuffledArray);
  });
});
