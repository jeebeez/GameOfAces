import cn from 'classnames';
import { useGlobalContext } from 'context';
import { Card, cardProps } from './Card';
import { Counter } from './Counter';

export const Deck = () => {
  const {
    shuffledDeck,
    aces,
    currentHand,
    deal,
    contentDeal,
    setContentDeal,
    newGame,
  } = useGlobalContext();

  const disabled = !aces ? !aces : contentDeal;

  return (
    <div className="select-none flex flex-col items-center z-100" data-testid="deckComponent">
      <div className="flex justify-center space-x-16 md:space-x-20">
        <Counter itemCount={`${shuffledDeck.length}`} value="Cards" />
        <Counter itemCount={`${aces}`} value="Aces" />
      </div>

      <div className="hand flex flex-wrap justify-center items-center mt-10">
        {currentHand.map((card: cardProps, index: number) => {
          const cardNumber = index;
          return (
            <Card
              key={index}
              suit={card.suit}
              value={card.value}
              cardNumber={cardNumber}
              contentDeal={contentDeal}
              setContentDeal={setContentDeal}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center space-y-10 ">
        <div className="dealer mt-10 sm:mt-20 ">
          <div className="w-full">
            <button
              className={cn(
                ' font-alfa transition-colors duration-500 	 ease-in-out hover:bg-black hover:text-yellow-400  text-black bg-yellow-400 text-5xl px-9 py-3 sm:text-5xl uppercase sm:px-12 sm:py-4 rounded-lg ;                ',
                {
                  'opacity-70 cursor-not-allowed ': disabled,
                }
              )}
              onClick={deal}
              type="button"
              disabled={disabled}
            >
              Deal
            </button>
          </div>
        </div>

        <button
          className="reset bg-transparent font-semibold text-yellow-400 w-20 py-1 px-5 border border-yellow border-current md:absolute md:right-10 md:bottom-10 rounded-lg  "
          type="button"
          onClick={() => {
            newGame();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
