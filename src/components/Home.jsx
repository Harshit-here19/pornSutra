import { useEffect, useContext } from "react";
import pornContext from "../context/PornContext";
import Item from "./Item";
import Loader from "./Utility/Loader";

const Home = () => {
  const context = useContext(pornContext);
  const { porn, fetchPorn, isLoading } = context;

  if (!localStorage.getItem("pageNo")) {
    localStorage.setItem("pageNo", 1);
  }
  let currentPage = localStorage.getItem("pageNo");

  if (!localStorage.getItem("query")) {
    localStorage.setItem("query", 1);
  }
  let query = localStorage.getItem("query");

  useEffect(() => {
    fetchPorn(query, currentPage);
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
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader type="A" />
        </div>
      )}
      <div className="relative" id="top">
        <div className="flex flex-wrap justify-center relative">
          {!isLoading &&
            porn.map((item) => <Item key={item.id} detail={item} />)}
        </div>
        {isLoading && <Loader type="B" />}

        <a
          className="rounded-full absolute bg-blue-500 text-2xl px-4 py-2 right-16"
          href="#top"
        >
          &#8657;
        </a>

        {!isLoading && (
          <ol className="flex justify-center text-xs font-medium space-x-1 my-8">
            {+currentPage !== 1 && (
              <li>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 border bg-yellow-300 border-yellow-300 rounded text-xl"
                  onClick={() => {
                    currentPage = 1;
                    localStorage.setItem("pageNo", currentPage);
                    fetchPorn(query, currentPage);
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
                    localStorage.setItem("pageNo", currentPage);
                    fetchPorn(query, currentPage);
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
                    localStorage.setItem("pageNo", currentPage);
                    fetchPorn(query, currentPage);
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
                    localStorage.setItem("pageNo", currentPage);
                    fetchPorn(query, currentPage);
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

export default Home;
