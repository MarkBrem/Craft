import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../components/HomePage/homePage";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <HomePage/>,
      },
    ],
  },
]);