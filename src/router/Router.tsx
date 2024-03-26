import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import Home from "../comp/Home";
import About from "../comp/About";

export const mainRoute = createBrowserRouter([
  {
    element: <WebLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
