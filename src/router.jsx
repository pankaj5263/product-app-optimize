import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductList from "./components/ProductListData/ProductListData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
            path: "/",
            element: <ProductList />,
          },    
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
