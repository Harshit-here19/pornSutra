import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const {
    title,
    id,
    length_min,
    default_thumb: { src },
  } = props.detail;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="rounded overflow-hidden shadow-md shadow-amber-500 m-4 bg-white w-[90%] md:w-[30%]">
      <div className="px-6 py-4 flex flex-col items-center">
        <img
          src={src}
          alt={title}
          className="md:hover:scale-100 transition-all md:hover:absolute mb-4"
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            console.log(e);
            setIsImageLoaded(true);
          }}
        />
        {!isImageLoaded && <p>Loading...</p>}
        <hr className="border-y-2 my-2 border-stone-700 w-screen" />
        <div className="text-center mt-4 flex flex-col">
          <Link
            className="font-bold text-xl md:text-sm mb-2 text-black"
            to={`/video/${id}`}
          >
            {title}
          </Link>
          <span className="text-xs">{length_min} m</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
