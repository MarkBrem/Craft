import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../hero/Hero";
import { Layout } from "./Layout";
import { HowItWorks } from "../howItWorks/HowWork";
import { RegistrationForm } from "../components/Form";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <Hero/>, 
        loader: <RegistrationForm/>,
      },
      {
        path: "/HowItWorks",
        element: <HowItWorks/>,
      },
    ],
  },
]);