import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
 

function CheckoutProduct({id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
//removes item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} 
      />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating) //creates an array of how much in the rating
          .fill() //fills it with that amount of space lets say 5 if the rating is 5
          .map((_, i) => (//maps(iterates) through each space 5x
            <p>⭐</p>//applies this p tagged star
          ))} 
          {/* the _, i means if you dont care about whats the first index and then the i is for the rest of the iteration indexing through */}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct