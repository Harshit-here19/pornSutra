import React from "react";

const ImageGrid = (props) => {
  let images = props.images;

  return (
    <div className="md:w-[90%] w-full flex gap-2 border-4 border-black  overflow-x-scroll">
      {images.map((e, i) => {
        return <img key={i} src={e} alt="" className="md:h-96 h-72" />;
      })}
    </div>
  );
};

export default ImageGrid;
