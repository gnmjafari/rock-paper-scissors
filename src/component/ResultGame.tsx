import { useEffect, useState } from "react";
import Paper from "../assets/Paper";
import Rock from "../assets/Rock";
import Scissors from "../assets/Scissors";

interface props {
  userPicked: number;
  systemPicked: number;
  setScore: (value: (prev: number) => number) => void;
  handlePlayAgain: () => void;
}

const ResultGame: React.FC<props> = ({
  userPicked,
  systemPicked,
  setScore,
  handlePlayAgain,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>("");

  const calculateScore = (): void => {
    setScore((prev: number) => prev + 1);
  };

  const calculateResult = (): void => {
    if (userPicked === 1) {
      if (systemPicked === 1) {
        setResult("DRAW");
      } else if (systemPicked === 2) {
        setResult("YOU LOSE");
      } else {
        calculateScore();
        setResult("YOU WIN");
      }
    } else if (userPicked === 2) {
      if (systemPicked === 1) {
        calculateScore();
        setResult("YOU WIN");
      } else if (systemPicked === 2) {
        setResult("DRAW");
      } else {
        setResult("YOU LOSE");
      }
    } else {
      if (systemPicked === 1) {
        setResult("YOU LOSE");
      } else if (systemPicked === 2) {
        calculateScore();
        setResult("YOU WIN");
      } else {
        setResult("DRAW");
      }
    }
    setLoading(false);
  };

  const showSvg = (selected: number) => {
    if (selected === 1) {
      return <Paper />;
    } else if (selected === 2) {
      return <Scissors />;
    } else {
      return <Rock />;
    }
  };

  useEffect(() => {
    calculateResult();
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-2/5 relative">
      <div className="flex flex-row lg:gap-56 md:gap-16 sm:gap-10 items-start justify-center w-full h-full">
        <div className="card items-center justify-center gap-5">
          <div className="text-lg uppercase">You Picked</div>
          <div className="z-10 border-[#577EF2] bg-white rounded-full border-[20px] p-10 justify-center items-center cursor-pointer">
            {showSvg(userPicked)}
          </div>
        </div>

        <div className="card items-center justify-center gap-5">
          <div className="text-lg uppercase">The house picked</div>
          <div className="z-10 border-[#DDA452] bg-white rounded-full border-[20px] p-10 justify-center items-center cursor-pointer">
            {showSvg(systemPicked)}
          </div>
        </div>
      </div>

      {loading ? (
        <span className="mx-5 loading loading-ring loading-lg" />
      ) : (
        <div className="card w-full items-center justify-center gap-5 mt-10 absolute lg:top-10 md:top-60 sm:top-60">
          <div className="lg:text-3xl md:text-3xl sm:text-5xl">{result}</div>
          <button
            onClick={() => handlePlayAgain()}
            className={`btn bg-white uppercase sm:btn-lg md:btn-normal lg:btn-normal ${
              result === "YOU LOSE"
                ? "text-red-500"
                : result === "YOU WIN" && "text-green-400"
            }`}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultGame;
