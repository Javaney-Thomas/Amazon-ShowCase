export const initialState = {
  basket : [],
};

//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item], 
      };

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