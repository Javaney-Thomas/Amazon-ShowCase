export const initialState = {
  basket : [],
};

//Selector
//this is a function within a function as a parameter?
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);
//reduce is a function it maps through the basket and tally up the total
const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item], 
      };

    case 'REMOVE_FROM_BASKET':
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );
    let newBasket = [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1);

    } else {
      console.warn(
        `Cant remove the product (id: ${action.id}) as 
        its not in basket!`
      )
    }

    return {
      ...state,
      basket: newBasket
    }

    default:
      return state;
  }
};

export default reducer;
//the reducer at two states is the state and then the action that happens
// this says that the reducer which is feeding data backto the data layer
//it will switch, so one action or another will occur
//the context is called case "ADDTOBASKET"
//return ...whatever the state was, then the basket
//at whatever the state at the basket is with the item becase that is the action that happened 