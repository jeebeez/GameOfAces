import { cardProps } from 'components/Card';

export const shuffle = (array: cardProps[] | []) => {
  const tempDeck = JSON.parse(JSON.stringify(array));
  let currentIndex: number = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [tempDeck[currentIndex], tempDeck[randomIndex]] = [
      tempDeck[randomIndex],
      tempDeck[currentIndex],
    ];
  }
  return tempDeck;
};
