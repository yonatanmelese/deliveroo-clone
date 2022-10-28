import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice';
import restaurantReducer from './slices/restaurant-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});
