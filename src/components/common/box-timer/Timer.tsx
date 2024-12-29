import { useState } from "react";
import Menu from "./Menu";

const Timer = () => {
  const [state, setState] = useState<boolean>(false);
  const [minute, setMinute] = useState<null | number>(null);
  // const [second, setSecond] = useState<number>(60);

  return (
    <div className="font-bold w-full flex flex-wrap justify-center gap-y-12">
      <Menu setMinute={setMinute} />
      <span className="text-9xl text-white text-center w-full">{`${minute} : ${60}`}</span>
      <button
        onClick={() => {
          setState(!state);
        }}
        className="bg-white text-[#38858a] rounded px-20 py-4 text-xl mx-auto shadow-lg"
      >
        {!state ? "START" : "PAUSE"}
      </button>
    </div>
  );
};

export default Timer;
