import { GlobalStyle } from "./GlobalStyle";
import { routing } from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Footer } from "./footer/Footer";

export const App = () => {
  return <>
  <RouterProvider router={routing} />;
  <GlobalStyle/>
  </>
};
