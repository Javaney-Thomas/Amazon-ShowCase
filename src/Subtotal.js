import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
  <div className='subtotal'>
    <CurrencyFormat 
      renderText={(value) => (
        <>
          <p> 
            {/* This says the number of items and the price */}
            Subtotal ({basket.length} items):
            <strong>{value}</strong>
          </p> 
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} //value getting passsed in
      displayType={"text"}
      thousandSeperator={true} //reads money properly if u go to thousands etc
      prefix={"$"}
    />
    <button>Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal