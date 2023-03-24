import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const finalItem = state.find((item) => item.id === action.payload.id);
      if (finalItem) {
        finalItem.quantity += 1;
        //
      } else {
        // if not found item
        const itemClone = { ...action.payload, quantity: 1 };
        state.push(itemClone);
        //
      }
      // state.push(action.payload); //
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      // const getItemIndex = state.indexOf(action.payload.quantity);
      // console.log(getItemIndex);

      // return state.filter((item) => item.id !== action.payload.id );

      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
