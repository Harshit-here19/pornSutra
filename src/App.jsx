// import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import ErrorPage from "./components/Utility/ErrorPage";

import PornState from "./context/PornState";
import Video from "./components/Video";
import PornStars from "./components/PornStars/PornStars";
import PornStarDetails from "./components/PornStars/PornStarDetails";
import Art from "./components/Art/Art";

const App = () => {
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json"
  //   );

  //   const json = await response.json();
  //   console.log(json);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/video/:id",
          element: <Video />,
        },
        {
          path: "/pornstars",
          element: <PornStars />,
        },
        {
          path: "/pornstar/:name",
          element: <PornStarDetails />,
        },
        {
          path: "/art",
          element: <Art />,
        },
      ],
    },
  ]);

  return (
    <PornState>
      <RouterProvider router={router} />
    </PornState>
  );
};

export default App;
