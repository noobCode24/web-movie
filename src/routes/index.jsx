import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
// import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import WatchMovie from "../pages/WatchMovie/WatchMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      // {
      //   path: ":explore",
      //   element: <ExplorePage />
      // },
      {
        path: "/detail/:movie",
        element: <DetailsPage />
      }, 
      {
        path: "/watch/:slug",
        element: <WatchMovie />
      }, 
      {
        path: "/search/:query",
        element: <SearchPage />
      }
    ]
  }
])

export default router;