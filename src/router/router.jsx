import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../components/HomePage/homePage";
import { Catalog } from "../catalog/Catalog";
import { RoomGrid } from "../components/roomCraft/RoomGrid";

export const routing = createBrowserRouter([
  {
    path: "/Craft",
    element: <Layout />,
    children: [
      { index: true,
        element: <HomePage/>,
      },
      {
        path: "/Craft/catalog",
        element: <Catalog />,
      },
      {
        path:"/Craft/createRoom",
        element: <RoomGrid/>
      }
    ],
  },
  {
    basename: '/Сraft'
  }
]);