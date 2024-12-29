import { FaCheckCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full border-b border-neutral-800/50 py-4 flex justify-between text-white">
      <div className="flex gap-1 items-center">
        <FaCheckCircle color="white" size={19} />
        <span className="text-xl">Pomofocus</span>
      </div>
      <div>
        <button className="text-sm px-3 py-1.5 rounded bg-white/20 flex gap-1 items-center">
          <IoSettingsSharp size={20} />
          <span>Setting</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
