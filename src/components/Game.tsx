import { useGlobalContext } from "context";
import { Deck } from "./Deck";
import { Loading } from "./Loading";
import { Result } from "./Result";

export const Game = () => {
  const { aces, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Deck />
      {!aces ? <Result /> : null}
    </>
  );
};
