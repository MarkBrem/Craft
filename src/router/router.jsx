import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../hero/Hero";
import { Layout } from "./Layout";
import { HowItWorks } from "../howItWorks/HowWork";;

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <Hero/>,
      },
      {
        path: "/HowItWorks",
        element: <HowItWorks/>,
      },
    ],
  },
]);