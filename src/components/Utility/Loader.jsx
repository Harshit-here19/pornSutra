import React from "react";

const Loader = ({ type }) => {
  if (type === "A") {
    return (
      <div className="w-36 h-36 border-8 border-dashed rounded-full border-t-lime-400 animate-spin">
        {/* <!-- Loader 1--> */}
      </div>
    );
  }

  return (
    <div className="w-36 h-36 border-8 rounded-full border-t-lime-400 animate-spin">
      {/* <!-- Loader 2--> */}
    </div>
  );
};

export default Loader;
