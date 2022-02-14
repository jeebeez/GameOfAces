export const shuffledDeck = [
  {
    suit: 'Diamond',
    value: '6',
  },
  {
    suit: 'Diamond',
    value: '8',
  },
  {
    suit: 'Diamond',
    value: '5',
  },
  {
    suit: 'Clover',
    value: '6',
  },
  {
    suit: 'Spade',
    value: '10',
  },
  {
    suit: 'Diamond',
    value: '10',
  },
  {
    suit: 'Spade',
    value: '4',
  },
  {
    suit: 'Clover',
    value: '5',
  },
  {
    suit: 'Diamond',
    value: '7',
  },
  {
    suit: 'Clover',
    value: 'A',
  },
  {
    suit: 'Clover',
    value: '9',
  },
  {
    suit: 'Heart',
    value: '8',
  },
  {
    suit: 'Spade',
    value: '3',
  },
  {
    suit: 'Heart',
    value: '2',
  },
  {
    suit: 'Heart',
    value: 'A',
  },
  {
    suit: 'Spade',
    value: 'A',
  },
  {
    suit: 'Clover',
    value: '3',
  },
  {
    suit: 'Heart',
    value: '7',
  },
  {
    suit: 'Spade',
    value: '5',
  },
  {
    suit: 'Clover',
    value: '8',
  },
  {
    suit: 'Clover',
    value: '2',
  },
  {
    suit: 'Diamond',
    value: '3',
  },
  {
    suit: 'Clover',
    value: '10',
  },
  {
    suit: 'Spade',
    value: '7',
  },
  {
    suit: 'Spade',
    value: 'K',
  },
  {
    suit: 'Heart',
    value: '5',
  },
  {
    suit: 'Clover',
    value: 'Q',
  },
  {
    suit: 'Heart',
    value: '10',
  },
  {
    suit: 'Spade',
    value: '8',
  },
  {
    suit: 'Clover',
    value: 'K',
  },
  {
    suit: 'Spade',
    value: '6',
  },
  {
    suit: 'Spade',
    value: 'Q',
  },
  {
    suit: 'Clover',
    value: '7',
  },
  {
    suit: 'Diamond',
    value: '2',
  },
  {
    suit: 'Heart',
    value: 'K',
  },
  {
    suit: 'Diamond',
    value: '9',
  },
  {
    suit: 'Diamond',
    value: 'J',
  },
  {
    suit: 'Heart',
    value: '6',
  },
  {
    suit: 'Spade',
    value: '9',
  },
  {
    suit: 'Clover',
    value: '4',
  },
  {
    suit: 'Heart',
    value: '4',
  },
  {
    suit: 'Heart',
    value: 'Q',
  },
];

const currentHand = [
  {
    suit: 'Diamond',
    value: 'A',
  },
  {
    suit: 'Diamond',
    value: '4',
  },
  {
    suit: 'Diamond',
    value: 'Q',
  },
  {
    suit: 'Heart',
    value: 'J',
  },
  {
    suit: 'Diamond',
    value: 'K',
  },
];

const mocksetDecision = jest.fn();
const mocksetContentDeal = jest.fn();
const mocksetDeck = jest.fn();
const mockDeal = jest.fn();
const mocknewGame = jest.fn();

export const ContentMock = {
  deck: [],
  shuffledDeck,
  currentHand,
  aces: 4,
  decision: 'won',
  freshDeck: () => [],
  setDecision: mocksetDecision,
  deal: mockDeal,
  contentDeal: true,
  setContentDeal: mocksetContentDeal,
  setDeck: mocksetDeck,
  loading: false,
  newGame: mocknewGame,
};
