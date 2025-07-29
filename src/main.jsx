import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(<>
    <RouterProvider>
        <BrowserRouter><App/> </BrowserRouter>
    </RouterProvider>
</>
);
