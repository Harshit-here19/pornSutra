import { useState } from "react";
import PornContext from "./PornContext";

const PornState = (props) => {
  const pornInit = [];

  const [porn, setPorn] = useState(pornInit);
  const [videoData, setVideoData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //TODO: Fetch all porn
  const fetchPorn = async (query, pageNo) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=30&page=${pageNo}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`
      );

      const json = await response.json();
      setPorn(json.videos);

      // console.log(json.videos);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  //TODO: Fetch porn with a id
  const fetchById = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=big&format=json`
      );

      const json = await response.json();
      setVideoData(json);

      // console.log(json);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  return (
    <PornContext.Provider
      value={{ porn, fetchPorn, isLoading, videoData, fetchById }}
    >
      {props.children}
    </PornContext.Provider>
  );
};

export default PornState;
