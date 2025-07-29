import { GlobalStyle } from "./GlobalStyle";
import { routing } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import "./index.css";

const getBackend = () =>{
  if("ontouchstart" in window || navigator.maxTouchPoints > 1){
      return TouchBackend
  }else{
    return HTML5Backend
  }
}

export const App = () => {
  return <>
  <DndProvider backend={getBackend()} options={{ enableMouseEvents: true }}>
  <RouterProvider router={routing} />
  </DndProvider>
  <GlobalStyle/>
  </>

  // DiSafari.
};
