import { useState } from "react";
import Loader from "../Utility/Loader";
import Tag from "../Utility/Tag";

const ArtCard = ({ tags, file, source }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const tagItem = tags ? tags.split(" ") : [];

  return (
    <div className="rounded overflow-hidden shadow-md shadow-amber-500 m-4 bg-white w-[90%] md:w-[40%]">
      <div className="px-6 py-4 flex flex-col items-center">
        <img
          src={file}
          alt={source}
          className="mb-4 md:h-72"
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            console.log(e);
            setIsImageLoaded(true);
          }}
        />
        {!isImageLoaded && (
          <div className="w-full h-full flex justify-center items-center md:h-72">
            <Loader type="B" />
          </div>
        )}
        <hr className="border-y-2 my-2 border-stone-700 w-screen" />

        <div className="text-center flex flex-col">
          <a className="text-sx -mb-8" href={source}>
            Source
          </a>
          <Tag tags={tagItem} />
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
