const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map(cartItem => {
      return cartItem.id === action.payload
        ? { ...cartItem, amount: cartItem.amount + 1 }
        : cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map(cartItem => {
        return cartItem.id === action.payload
          ? { ...cartItem, amount: cartItem.amount - 1 }
          : cartItem;
      })
      .filter(cartItem => cartItem.amount > 0);
    return { ...state, cart: tempCart };
  }

  return state;
};

export default reducer;
