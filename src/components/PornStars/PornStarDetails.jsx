import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Utility/Carousel";
import ImageGrid from "../Utility/ImageGrid";

import Loader from "../Utility/Loader";
import Tag from "../Utility/Tag";

const PornStarDetails = () => {
  const name = useParams().name;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const detailPorn = async () => {
    setIsLoading(true);
    const url = `https://porn-pictures-api.p.rapidapi.com/pictures/${name}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c4f65215emsh67cdfa36fb1aee7p14c84djsnfabbedcb4c6a",
        "X-RapidAPI-Host": "porn-pictures-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const status = response.status;
      if (status === 500) {
        throw new Error("Server Problem Try to search a available keyword");
      }
      //   console.log(data);
      setResults(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    detailPorn();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader type="A" />
        </div>
      )}
      <div className="flex flex-col items-center">
        {!isLoading &&
          results.map((result) => (
            <div className="rounded overflow-hidden shadow-md shadow-amber-500 m-4 bg-white w-[90%] mt-10 flex flex-col items-center">
              <h1 className="font-bold text-2xl mt-4 mb-8 mx-2">
                {result.title}
              </h1>
              <div className="md:hidden">
                <Carousel images={result.images} />
              </div>
              <div className="hidden md:flex md:justify-center md:items-center">
                <ImageGrid images={result.images} />
              </div>
              <div className="my-4 text-xl">
                Models:{" "}
                {result.models.map((model, index) => (
                  <span key={index}>
                    {index !== 0 && ", "}
                    {model}
                  </span>
                ))}
              </div>
              <Tag tags={result.relatedCategories} />
              <span className="my-4">Source : {result.source}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default PornStarDetails;
