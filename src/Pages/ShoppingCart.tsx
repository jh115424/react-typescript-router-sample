import React, { useState } from 'react';

import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price * item.quantity);
  };

  const handleRemoveFromCart = (item: CartItem) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setTotal(total - item.price * item.quantity);
  };

  return (
    <div className="card-container">
        <div>
      <h1>Shopping Cart</h1>
      <p>
        <Link to="/checkout">Proceed to Checkout</Link>
      </p>
    </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default ShoppingCart;