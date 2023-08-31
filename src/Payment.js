import React from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div clasName='payment__container'>
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>)
        </h1>


        {/*Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React House</p>
            <p>New York, NY</p>
          </div>
        </div>

        {/*Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
        </div>
        <div className='payment__items'>
          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>

        {/*Payment section - delivery address */}
        <div className='payment__section'>
          <div className="payment__title"></div>
          <h3>Payment Method</h3>
          <div className="payment__details">
              {/*Stripe magic*/}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment