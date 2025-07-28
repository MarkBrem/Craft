import { GlobalStyle } from "./GlobalStyle";
import { routing } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./index.css";

export const App = () => {
  return <>
  <DndProvider backend={HTML5Backend}>
  <RouterProvider router={routing} />
  </DndProvider>
  <GlobalStyle/>
  </>
};
