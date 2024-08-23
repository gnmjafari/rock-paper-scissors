interface props {
  score?: number;
}

const Header: React.FC<props> = ({ score }) => {
  return (
    <div className="card p-3 flex-row justify-between card-bordered border-white lg:w-3/6 md:w-3/6 sm:w-5/6">
      <div className="card-title flex-col justify-start items-start gap-0">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="card card-bordered bg-slate-50  border-white px-8 py-3 items-center">
        <span className="text-slate-500">Score</span>
        <span className="text-slate-600 font-extrabold text-xl">{score}</span>
      </div>
    </div>
  );
};

export default Header;
