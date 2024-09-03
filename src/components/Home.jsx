import { useEffect, useContext, useState } from "react";
import pornContext from "../context/PornContext";
import Item from "./Item";
import Loader from "./Utility/Loader";

const Home = () => {
  const context = useContext(pornContext);
  const { porn, fetchPorn, isLoading } = context;

  const [search, setSearch] = useState(null);

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

  const searchHandler = () => {
    const input = document.querySelector("input");
    let temp = input.value.toLowerCase();
    let search = temp.replace(/\s/g, "%20");

    setSearch(temp);

    localStorage.setItem("pageNo", 1);
    currentPage = localStorage.getItem("pageNo");
    fetchPorn(search, currentPage);
  };

  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader type="A" />
        </div>
      )}
      <div className="relative" id="top">
        {/* Search Bar */}
        <label
          className="mx-auto my-5 relative bg-white min-w-sm max-w-[90%] md:max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          for="search-bar"
        >
          <input
            id="search-bar"
            placeholder="your keyword here"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button
            className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
            onClick={searchHandler}
          >
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>

        {search && (
          <div className="font-bold text-white w-screen flex items-center justify-center">
            <p>Showing Result of : {search}</p>
          </div>
        )}

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
