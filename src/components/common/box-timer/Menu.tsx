import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../../../redux/slices/BackColor";

interface MenuItemProps {
  title: string;
  minute: number;
}

interface MenuProps {
  setMinute: (ev: number) => void;
}

const Menu = ({ setMinute }: MenuProps) => {
  const [menuState, setMenuState] = useState(0);
  const dispatch = useDispatch();

  const items: MenuItemProps[] = [
    { title: "Pomodoro", minute: 25 },
    { title: "Short Break", minute: 15 },
    { title: "Long Break", minute: 5 },
  ];

  const handleChangeState = (index: number): void => {
    setMenuState(index);
    dispatch(changeColor(index));
  };

  useEffect(() => {
    const minute: number = items[menuState].minute;
    setMinute(minute);
  }, [menuState]);

  return (
    <ul className="flex gap-7 text-white">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleChangeState(index);
          }}
          className="px-4 py-0.5 rounded cursor-pointer"
          style={{
            backgroundColor: index == menuState ? "#00000024" : "transparent",
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
