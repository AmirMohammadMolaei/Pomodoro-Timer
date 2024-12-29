import { useEffect, useState } from "react";
import Menu from "./Menu";

const Timer = () => {
  const [state, setState] = useState<boolean>(false);
  const [minute, setMinute] = useState<null | number>(null);
  const [second, setSecond] = useState<number>(60);

  useEffect(() => {
    if (state && minute) {
      let intervalId: NodeJS.Timeout;
      let secondTime: number = second
      let minuteTime: number = minute

      if (second > 0) {
        intervalId = setInterval(() => {
          setSecond(secondTime--);
        }, 1000);
      } else {
        clearInterval(intervalId);
        setSecond(59);
        setMinute(minuteTime--);
      }
    }
  }, [state, second, minute]);

  return (
    <div className="font-bold w-full flex flex-wrap justify-center gap-y-12">
      <Menu setMinute={setMinute} />
      <span className="text-9xl text-white text-center w-full">{`${minute} : ${second}`}</span>
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
