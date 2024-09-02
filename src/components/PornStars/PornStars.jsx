import { useState, useEffect } from "react";
import Loader from "../Utility/Loader";
import PornStarItem from "./PornStarItem";

const PornStars = () => {
  const [pornData, setPornData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!localStorage.getItem("pornPgNo")) {
    localStorage.setItem("pornPgNo", 1);
  }
  let currentPage = localStorage.getItem("pornPgNo");

  const fetchData = async (pornPgNo) => {
    setIsLoading(true);
    const url = `https://porn-pictures-api.p.rapidapi.com/pornstars/female/${pornPgNo}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2c4f65215emsh67cdfa36fb1aee7p14c84djsnfabbedcb4c6a",
        "x-rapidapi-host": "porn-pictures-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.result);
      setPornData(result.result);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(currentPage);
  }, []);

  if (!navigator.onLine) {
    return (
      <div>
        <p>Please connect to the Internet... </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative" id="top">
        {isLoading && (
          <div className="w-screen h-screen flex justify-center items-center">
            <Loader type="A" />
          </div>
        )}
        {!isLoading && (
          <div className="flex flex-wrap justify-center relative" id="top">
            {pornData.map((star) => (
              <PornStarItem key={star.id} star={star} />
            ))}

            <a
              className="rounded-full bg-blue-500 text-2xl px-4 py-2 right-16"
              href="#top"
            >
              &#8657;
            </a>
          </div>
        )}

        {!isLoading && (
          <ol className="flex justify-center text-xs font-medium space-x-1 my-8">
            {+currentPage !== 1 && (
              <li>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 border bg-yellow-300 border-yellow-300 rounded text-xl"
                  onClick={() => {
                    currentPage = 1;
                    localStorage.setItem("pornPgNo", currentPage);
                    fetchData(currentPage);
                  }}
                >
                  &#171;
                </span>
              </li>
            )}
            {+currentPage !== 1 && (
              <li>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 border bg-yellow-300 border-yellow-300 rounded text-xl"
                  onClick={() => {
                    currentPage -= 1;
                    localStorage.setItem("pornPgNo", currentPage);
                    fetchData(currentPage);
                  }}
                >
                  &#8249;
                </span>
              </li>
            )}

            {+currentPage !== 1 && (
              <li>
                <span className="block w-8 h-8 text-center border bg-yellow-300 border-yellow-300 rounded leading-8">
                  {currentPage - 1}
                </span>
              </li>
            )}

            <li class="block w-8 h-8 text-center text-white bg-red-600 border-red-600 rounded leading-8">
              {currentPage}
            </li>

            {currentPage < 100 && (
              <li>
                <span className="block w-8 h-8 text-center border bg-yellow-300 border-yellow-300 rounded leading-8">
                  {+currentPage + 1}
                </span>
              </li>
            )}

            {currentPage < 100 && (
              <li>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 border bg-yellow-300 border-yellow-300 rounded text-xl"
                  onClick={() => {
                    currentPage = +currentPage + 1;
                    localStorage.setItem("pornPgNo", currentPage);
                    fetchData(currentPage);
                  }}
                >
                  &#8250;
                </span>
              </li>
            )}

            {currentPage < 100 && (
              <li>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 border bg-yellow-300 border-yellow-300 rounded text-xl"
                  onClick={() => {
                    currentPage = 100;
                    localStorage.setItem("pornPgNo", currentPage);
                    fetchData(currentPage);
                  }}
                >
                  &#187;
                </span>
              </li>
            )}
          </ol>
        )}
      </div>
    </>
  );
};

export default PornStars;
