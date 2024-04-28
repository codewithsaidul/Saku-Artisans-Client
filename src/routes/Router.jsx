import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AllCraftItems from "../pages/AllCraftItems";
import MyCraftLists from "../pages/MyCraftLists";
import CraftDetails from "../pages/CraftDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import AddCraftItem from "../pages/AddCraftItem";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allCraftItems"),
      },
      {
        path: "/allCraftsItem",
        element: <AllCraftItems />,
        loader: () => fetch("http://localhost:5000/allCraftItems"),
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
        path: "/addCraftsItem",
        element: <AddCraftItem />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
