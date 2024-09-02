import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Utility/Loader";

const PornStarItem = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const { pornStarName, picture, nationality } = props.star;

  let temp = pornStarName.toLowerCase();
  let temp2 = temp.replace(/\s/g, "%20");

  return (
    <div className="rounded overflow-hidden shadow-md shadow-amber-500 m-4 bg-white w-[90%] md:w-[20%]">
      <div className="px-6 py-4 flex flex-col items-center">
        <img
          src={picture}
          alt={pornStarName}
          className="mb-4 md:h-72"
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            console.log(e);
            setIsImageLoaded(true);
          }}
        />
        {!isImageLoaded && (
          <div className="w-full h-full flex justify-center items-center">
            <Loader type="B" />
          </div>
        )}
        <hr className="border-y-2 my-2 border-stone-700 w-screen" />
        <div className="text-center mt-4 flex flex-col">
          <Link
            className="font-bold text-4xl md:text-sm mb-2 text-black"
            to={`/pornstar/${temp2}`}
          >
            {pornStarName}
          </Link>
          <span className="text-sx">Nationality : {nationality} m</span>
        </div>
      </div>
    </div>
  );
};

export default PornStarItem;
