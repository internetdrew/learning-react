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

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
