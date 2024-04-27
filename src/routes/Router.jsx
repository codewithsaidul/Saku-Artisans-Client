import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AllCraftItems from "../pages/AllCraftItems";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/craftItem.json"),
      },
      {
        path: "/allCraftsItem",
        element: <Home />,
        loader: () => fetch("/craftItem.json"),
      },
      {
        path: "/allCraftsItem/:id",
        element: <AllCraftItems />,
        loader: () => fetch(`/craftItem.json`),
      },
    ],
  },
]);
