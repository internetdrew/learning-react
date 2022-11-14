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

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === 'CHANGE_AMOUNT') {
    let tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id !== action.payload.id) return cartItem;

        if (action.payload.type === 'increase') {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if (action.payload.type === 'decrease') {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      })
      .filter(cartItem => cartItem.amount > 0);
    return { ...state, cart: tempCart };
  }

  throw new Error('no matching action types');
};

export default reducer;
