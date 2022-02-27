import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import { cardProps } from "components/Card";
import { shuffle } from "utils";

export type AppContextInterface = {
  deck: cardProps[] | [];
  shuffledDeck: cardProps[] | [];
  currentHand: cardProps[] | [];
  aces: number;
  decision: string;
  freshDeck: () => cardProps[];
  setDecision: React.Dispatch<React.SetStateAction<string>>;
  deal: () => void;
  contentDeal: boolean;
  setContentDeal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  newGame: () => void;
};

const AppContext = createContext({} as AppContextInterface);
const suits: string[] = ["Spade", "Clover", "Heart", "Diamond"];
const values: string[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const freshDeck = () => {
  const tempDdeck: cardProps[] = [];
  suits.flatMap((suit) =>
    values.map((value) => tempDdeck.push({ suit, value }))
  );

  return tempDdeck;
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const deck: cardProps[] | [] = freshDeck();
  const [shuffledDeck, setShuffledDeck] = useState<cardProps[] | []>(() =>
    shuffle(deck)
  );
  const [currentHand, setCurrentHand] = useState<cardProps[] | []>([]);
  const [aces, setAces] = useState<number>(4);
  const [decision, setDecision] = useState<string>("");
  const [contentDeal, setContentDeal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [newRound, setNewRound] = useState<boolean>(false);

  const ref = useRef(true);

  const aceCount = () => {
    const acesLeft = shuffledDeck.filter(
      (card: cardProps) => card.value === "A"
    ).length;
    return acesLeft;
  };

  const winOrLose = () => {
    if (aces === 0 && shuffledDeck.length >= 2) {
      setDecision("lose");
    } else if (aces === 0 && currentHand.length === 2) {
      setDecision("won");
    }
  };

  const deal = () => {
    setCurrentHand(shuffledDeck?.splice(0, 5));
    setContentDeal(true);
    setAces(aceCount());
  };

  const newGame = () => {
    setDecision("");

    setShuffledDeck(shuffle(deck));
    setNewRound(!newRound);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    deal();
  }, [newRound]);

  useEffect(() => {
    deal();
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      return clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!aces) winOrLose();
  }, [aces]);

  const value = {
    deck,
    contentDeal,
    shuffledDeck,
    currentHand,
    aces,
    decision,
    freshDeck,
    setDecision,
    deal,
    setContentDeal,
    loading,
    newGame,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
