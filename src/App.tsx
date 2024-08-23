import { useState } from "react";
import StartGame from "./component/StartGame";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ResultGame from "./component/ResultGame";

function App() {
  const [score, setScore] = useState<number>(0);
  const [userPicked, setUserPicked] = useState<number>(0);
  const [systemPicked, setSystemPicked] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  console.log("score:", score);

  const handlePicked = (selected: number): void => {
    const random = Math.floor(Math.random() * 3) + 1;
    setSystemPicked(random);
    setUserPicked(selected);
    setShowResult(true);
  };

  const handlePlayAgain = (): void => {
    setShowResult(false);
    setSystemPicked(0);
    setUserPicked(0);
  };

  return (
    <div className="card h-screen w-screen justify-between items-center pt-5">
      <Header score={score} />
      {!showResult ? (
        <StartGame handlePicked={handlePicked} />
      ) : (
        <ResultGame
          userPicked={userPicked}
          systemPicked={systemPicked}
          setScore={setScore}
          handlePlayAgain={handlePlayAgain}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
