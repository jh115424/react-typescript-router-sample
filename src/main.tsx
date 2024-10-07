// import HomePage from './Pages/ShoppingCart';
import ProductCatalog from './Pages/ProductCatalog';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Pages/Checkout';
import  ReactDOM  from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductCatalog />
  },
  {
    path: "/product-catalog",
    element: <ProductCatalog />
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />
  },
  {
    path: "/checkout",
    element: <Checkout />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)