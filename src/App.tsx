import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import ShoppingCart from './Pages/ShoppingCart';
import ProductCatalog from './Pages/ProductCatalog';

import './Pages/product.css'
import './Pages/shoppingcart.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
