import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PornContext from "../context/PornContext";

const Video = () => {
  const context = useContext(PornContext);
  const { videoData, fetchById } = context;
  const { title, keywords, views, rate, added, length_min, embed } = videoData;

  const videoId = useParams().id;

  useEffect(() => {
    fetchById(videoId);
  }, []);

  if (!navigator.onLine) {
    return (
      <div>
        <p>Please connect to the Internet... </p>
      </div>
    );
  }

  const tagStyling = [
    "bg-green-400 hover:bg-green-500",
    "bg-yellow-200 hover:bg-yellow-300",
    "bg-red-200 hover:bg-red-300",
    "bg-gray-200 hover:bg-gray-300",
    "bg-orange-300 hover:bg-orange-400",
    "bg-pink-300 hover:bg-pink-400",
  ];

  const tags = keywords ? keywords.split(",") : [];

  return (
    <div className="my-4 mx-2 flex flex-col items-center w-screen">
      <h1 className="text-3xl font-semibold text-white mb-8">
        {title}{" "}
        <span className="text-gray-300 text-xl">{length_min} minutes</span>{" "}
      </h1>
      <iframe
        src={embed}
        frameBorder="0"
        allowFullScreen
        title={title}
        width="900"
        height="360"
        className="w-[90%] md:w-[640px] mx-0"
      >
        {" "}
      </iframe>
      <div className="mt-4 flex justify-between w-full md:w-1/2">
        <p className="text-white font-semibold">Views : {views}</p>
        <div className="flex text-white font-semibold">
          Rate : {rate}
          <div className="flex h-8 w-28 ml-4">
            {Array.from({ length: Math.floor(rate) }).map((_) => (
              <svg aria-hidden="true" fill="#D3A81E" focusable="false">
                <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <details className="text-white font-bold w-[90vw] md:w-[50vw]">
        <summary className="font-bold">
          <div className="border-yellow-400 border-2 shadow-inner shadow-yellow-400 text-center py-3 text-xl w-[90vw] md:w-[50vw]">
            Tags
          </div>
        </summary>
        <div className="flex justify-center items-center w-full flex-wrap">
          {tags.map((tag, index) => {
            let randomIndex = Math.floor(Math.random() * tagStyling.length);

            return (
              <pre
                key={index}
                className={`py-1 px-2 mx-2 rounded-lg h-6 text-xs w-fit mt-4 font-semibold text-black ${tagStyling[randomIndex]}`}
              >
                {tag.trim()}
              </pre>
            );
          })}
        </div>
      </details>
    </div>
  );
};

export default Video;
