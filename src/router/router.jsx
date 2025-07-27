import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../components/HomePage/homePage";
import { Catalog } from "../catalog/Catalog";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <HomePage/>,
      },
      {
        path: "catalog",
        element: <Catalog />,
      }
    ],
  },
]);