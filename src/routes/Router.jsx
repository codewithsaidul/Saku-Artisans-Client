import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AllCraftItems from "../pages/AllCraftItems";
import MyCraftLists from "../pages/MyCraftLists";



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
        path: "/allCraftsItem/:subcategory_Name",
        element: <AllCraftItems />,
        loader: () => fetch(`/craftItem.json`),
      },
      {
        path: "/myCraftsList",
        element: <MyCraftLists />,
        loader: () => fetch(`/craftItem.json`),
      },
    ],
  },
]);
