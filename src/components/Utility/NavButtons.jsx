import React from "react";
import { Link } from "react-router-dom";

const NavButtons = ({ path, title, to, onClick }) => {
  return (
    <>
      {to && (
        <div className="flex flex-wrap justify-center gap-6">
          {to !== path && (
            <Link className="relative" to={to}>
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-red-400 hover:text-gray-900">
                {title}
              </span>
            </Link>
          )}
          {to === path && (
            <Link to={to} className="relative">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-400">
                {title}
              </span>
            </Link>
          )}
        </div>
      )}

      {!to && (
        <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
          <div className="relative" onClick={onClick}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-red-400 hover:text-gray-900">
              {title}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default NavButtons;
