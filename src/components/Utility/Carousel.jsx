import React from "react";

const Carousel = (props) => {
  const images = props.images;

  const carousel = document.querySelector(".carousel");

  const prevHandler = () => {
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth",
    });
  };

  const nextHandler = () => {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative">
        <div className="carousel max-w-xl flex">
          {/* Carousel items */}
          {images.map((image) => (
            <div className="carousel-item h-fit" key={image}>
              <img
                src={image}
                alt="Carousel Image 1"
                className="w-full object-cover "
              />
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
          <button
            className="carousel-control-prev opacity-30 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={prevHandler}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
          <button
            className="carousel-control-next opacity-30 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={nextHandler}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
