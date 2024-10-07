import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './checkout.css'

interface CustomerInfo {
  name: string;
  email: string;
  address: string;
}

interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const Checkout = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    address: '',
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleCustomerInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value });
  };

  const handlePaymentInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [event.target.name]: event.target.value });
  };

  const handleCheckout = () => {



    // TO DO: Implement payment processing logic here
    console.log('Checkout button clicked!');

  };

  return (
    <div>
      <div>
      <h1>Checkout</h1>

    </div>

      <form>
        <label>
          Name:
          <input type="text" name="name" value={customerInfo.name} onChange={handleCustomerInfoChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={customerInfo.email} onChange={handleCustomerInfoChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={customerInfo.address} onChange={handleCustomerInfoChange} />
        </label>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentInfoChange} />
        </label>
        <label>
          Expiration Date:
          <input type="text" name="expirationDate" value={paymentInfo.expirationDate} onChange={handlePaymentInfoChange} />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentInfoChange} />
        </label>
        <button onClick={handleCheckout}>Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;