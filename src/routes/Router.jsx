import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";



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
        path: "/viewDetails/:id",
        element: <Home />,
        loader: ({params}) => fetch(`/craftItem.json/${params.id}`),
      },
    ],
  },
]);
