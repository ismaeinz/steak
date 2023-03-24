import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const finalItem = state.find((item) => item.id === action.payload.id);

      if (finalItem) {
        finalItem.quantity += 1;
      } else {
        const itemClone = { ...action.payload, quantity: 1 };
        state.push(itemClone);
      }
      // state.push(action.payload); //
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
//https://github.com/chaoocharles/complete-shopping-cart/blob/main/frontend/src/slices/cartSlice.js
