import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AllCraftItems from "../pages/AllCraftItems";
import MyCraftLists from "../pages/MyCraftLists";
import CraftDetails from "../pages/CraftDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";



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
        element: <AllCraftItems />,
        loader: () => fetch("/craftItem.json"),
      },
      {
        path: "/allCraftsItem/:id",
        element: <CraftDetails />,
        loader: () => fetch("/craftItem.json"),
      },
      {
        path: "/myCraftsList",
        element: <MyCraftLists />,
        loader: () => fetch(`/craftItem.json`),
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);
