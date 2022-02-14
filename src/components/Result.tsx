import confetti from "canvas-confetti";
import ReactDom from "react-dom";
import { winner } from "assets";
import { useGlobalContext } from "context";
import fireworks from "utils/fireworks";

export const Result = () => {
  const { decision, newGame } = useGlobalContext();
  if (decision === "won") fireworks();

  const closeModal = () => {
    newGame();
  };

  return ReactDom.createPortal(
    <div
      className=" select-none h-full w-full mx-auto flex flex-col fixed top-0 bottom-0 left-0 right-0 border shadow-lg rounded-md bg-black bg-opacity-70  justify-center items-center  "
      data-testid="resultComponent"
    >
      {decision === "won" ? (
        <img
          className="w-3/4 transition duration-500 ease-in-out scale-150"
          src={winner}
          alt="winner"
        />
      ) : (
        <>
          <span className=" font-bold tracking-wider text-white">
            You lost 🥺
          </span>
          <span className=" font-bold tracking-wider text-white">
            Better luck next time 👍
          </span>
        </>
      )}
      <button
        className="reset font-courier deal transition-colors duration-500 ease-in-out  hover:bg-black hover:text-yellow-400  text-black bg-yellow-400   rounded-lg  xyz
         font-semibold py-1 px-5 border-2 border-yellow border-current mt-10"
        type="button"
        onClick={() => {
          closeModal();
          confetti();
        }}
      >
        Play Again
      </button>
    </div>,
    document.getElementById("portal")!
  );
};
