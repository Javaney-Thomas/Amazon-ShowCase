import React, { useState }from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled]= useState(true);

  const handleSubmit = e => {
    //do stripe stuff
  }

  const handleChange = e => {
    //this will listen for changers in the CardElement
    //and display any errors as the customertyesd in theor csrd details
  setDisabled(Event.empty);
  setError(Event.error ? Event.error.message : "");
  }

  return (
    <div className='payment'>
      <div clasName='payment__container'>
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
            )
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

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                  renderText={(value) => (
                    <>
                    <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"} 
                  />
                  <button disabled = {processing || disabled || 
                    succeeded}>
                      <span>{processing ? <p>Processing</p> :
                      "Buy Now"}</span>

                  </button>
                </div>
              </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment