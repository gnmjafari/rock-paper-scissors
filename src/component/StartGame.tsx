import Paper from "../assets/Paper";
import Scissors from "../assets/Scissors";
import Rock from "../assets/Rock";

interface props {
  handlePicked: (selected: number) => void;
}

const StartGame: React.FC<props> = ({ handlePicked }) => {
  return (
    <>
      <div className="card  gap-4 justify-center  items-center">
        <div className="flex flex-row gap-12 items-center justify-center">
          <div
            onClick={() => handlePicked(1)}
            className=" z-10 border-[#577EF2] bg-white rounded-full border-[20px] p-10  justify-center items-center cursor-pointer"
          >
            <Paper />
          </div>

          <div
            onClick={() => handlePicked(2)}
            className=" z-10 border-[#DDA452] bg-white rounded-full border-[20px] p-10 justify-center items-center cursor-pointer"
          >
            <Scissors />
          </div>
        </div>
        <div className="divider w-20  before:h-3 after:h-3 before:bg-gray-900 after:bg-gray-900   absolute top-16 inset-x-40" />
        <div className="divider w-20  before:h-3 after:h-3 before:bg-gray-900 after:bg-gray-900  rotate-45 absolute left-24" />
        <div className="divider w-20 before:h-3 after:h-3 before:bg-gray-900 after:bg-gray-900  rotate-[135deg] absolute right-24" />
        <div
          onClick={() => handlePicked(3)}
          className="z-10 border-[#D94169] bg-white rounded-full border-[20px] p-10  flex justify-center items-center cursor-pointer"
        >
          <Rock />
        </div>
      </div>
    </>
  );
};

export default StartGame;
