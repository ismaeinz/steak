import { configureStore } from "@reduxjs/toolkit";
import steaksSlice from "./slices/steaks-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    steaks: steaksSlice,
    cart: cartSlice,
  },
});
