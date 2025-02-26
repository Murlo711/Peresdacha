import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    { id: '1', title: 'Велосипед', count: 5 },
    { id: '2', title: 'Самокат', count: 4 },
    { id: '3', title: 'Гантели', count: 7 },
    { id: '4', title: 'Ракетки', count: 1 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item && item.count < 25) {
        item.count++;
      }
    },
    decrementCount: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        item.count--;
        if (item.count === 0) {
          state.cart = state.cart.filter((item) => item.id !== itemId);
        }
      }
    },
    addItem: {
      reducer: (state, action) => {
        state.cart.push(action.payload);
      },
      prepare: (title) => {
        const id = nanoid();
        return { payload: { id, title, count: 1 } };
      },
    },
  },
});

export const { incrementCount, decrementCount, addItem } = cartSlice.actions;
export default cartSlice.reducer;