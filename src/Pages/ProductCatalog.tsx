import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import icons from "../assets/icons.png";
import cart from "../assets/cart.png";
import "./product.css";
const userUrl = "https://dummyjson.com/products";
const ProductCatalog = () => {
  const location = useLocation();

  const params = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const data = setProducts;
  useEffect(() => {
    fetch(`${userUrl}?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, pageSize]);



  const addToCart = () => {
    setCartItems((prevItems) => prevItems + 1);
  };
  const subtractToCart = () => {
    setCartItems((prevItems) => prevItems - 1);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };



  return (
    <div>
      <div className="top-header">
        <div className="icon">
          <img src={icons} alt="icon" />
        </div>

        <div className="card">
          <span className="cart-count"></span>

          <Link to="cart">
            <img src={cart} alt="cart"></img>
          </Link>
          {cartItems && <span className="cart-count">{cartItems}</span>}
        </div>

      </div>

      <p className="home-title">
          Welcome to Elaine's Online Outlet, where great products equals great
          value for food and more!
        </p>
      <ul>
        {products.map((product: any) => (
          <div key={product.id} className="card">
              <button onClick={addToCart}>Add to Cart</button>
              <button onClick={subtractToCart}>Remove from Cart</button>
            <img
              src={product.image}
              className="card-image"
              alt={product.name}
           
            />
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              {/* <button onClick={addToCart}>Add to Cart</button>
              <button onClick={subtractToCart}>Remove from Cart</button> */}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};export default ProductCatalog;
