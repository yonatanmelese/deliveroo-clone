import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    image: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    shortDescription: null,
    dishes: null,
    long: null,
    lat: null,
  },
};
const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, actions) => {
      state.restaurant = actions.payload;
    },
  },
});

export const {setRestaurant} = restaurantSlice.actions;
// selectors
export const selectRestaurant = state => state.restaurant.restaurant;
export default restaurantSlice.reducer;
