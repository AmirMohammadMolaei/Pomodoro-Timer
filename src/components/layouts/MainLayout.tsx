import { ReactNode } from "react";
import Header from "../partials/header";
import { useAppSelector } from "../../app/Hooks";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const color = useAppSelector((state) => state.BackColor.color);

  return (
    <div className="w-full h-svh px-[450px] duration-300" style={{ backgroundColor: color }}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
