import { useGlobalContext } from 'context';
import { Deck } from './Deck';
import { Loading } from './Loading';
import { Result } from './Result';

export const Game = () => {
  const { aces, loading } = useGlobalContext();

  return (
    <>
      {loading && <Loading />}
      {!loading && <Deck />}
      {!aces ? <Result /> : null}
    </>
  );
};
