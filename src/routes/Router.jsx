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
import UpdateCraftData from "../pages/UpdateCraftData";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://assignment-server-flame.vercel.app/allCraftItems"),
      },
      {
        path: "/allCraftsItem",
        element: <AllCraftItems />,
        loader: () =>
          fetch("https://assignment-server-flame.vercel.app/allCraftItems"),
      },

      {
        path: "/allCraftsItem/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(
            `https://assignment-server-flame.vercel.app/allCraftItems/${params.id}`
          ),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraftData />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-flame.vercel.app/allCraftItems/${params.id}`
          ),
      },
      {
        path: "/myCraftsList",
        element: (
          <PrivateRoute>
            <MyCraftLists />
          </PrivateRoute>
        ),
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
