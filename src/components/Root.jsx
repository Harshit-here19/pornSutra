import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="bg-stone-700 w-screen h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
