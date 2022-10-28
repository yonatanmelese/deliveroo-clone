import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      const index = state.items.findIndex(
        item => item.id === actions.payload.id,
      );
      //   state.items = state.items.filter(item => item.id !== actions.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
// selectors
export const selectCartItems = state => state.cart.items;
export const selectCartItemById = (state, id) =>
  state.cart.items.filter(item => item.id === id);
export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => (total += item.price), 0);
export default cartSlice.reducer;
