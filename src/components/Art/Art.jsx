import { useState, useEffect } from "react";
import Loader from "../Utility/Loader";
import ErrorPage from "../Utility/ErrorPage";
import ArtCard from "./ArtCard";

const Art = () => {
  const [articles, setArticles] = useState([]);
  const [searchTags, setSearchTags] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchArt = async () => {
    const url =
      "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=20&json=1";
    const response = await fetch(url);
    const data = await response.json().then(setLoading(false));
    console.log(data);
    setArticles(data);
  };

  useEffect(() => {
    fetchArt();
  }, []);

  const search = async () => {
    try {
      const input = document.querySelector("input");
      setSearchTags(input.value);
      const url = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=20&json=1&tags=${searchTags}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <label
        className="mx-auto my-5 relative bg-white min-w-sm max-w-[90%] md:max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        for="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Enter Tag here"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        />
        <button
          className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
          onClick={search}
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

      {error && <ErrorPage />}

      {!error && (
        <div>
          <div className="flex justify-center items-center mb-8">
            {searchTags && (
              <p className="text-xl ">Showing Results : {searchTags} </p>
            )}
          </div>

          <div className="flex justify-center items-center flex-row">
            {loading && <Loader type="B" />}
          </div>

          {!loading && (
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {articles.map((e) => {
                return (
                  e.file_url && (
                    <ArtCard
                      key={e.id}
                      tags={e.tags}
                      file={e.file_url}
                      source={e.source}
                      rating={e.rating}
                    />
                  )
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Art;
