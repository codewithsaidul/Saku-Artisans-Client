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
import PrivateRoute from "../privateRoute/PrivateRoute";



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
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/http://localhost:5000/allCraftItems"),
      },
      {
        path: "/myCraftsList",
        element: (
          <PrivateRoute>
            <MyCraftLists />
          </PrivateRoute>
        ),
        loader: () => fetch(`/craftItem.json`),
      },
      {
        path: "/addCraftsItem",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
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
