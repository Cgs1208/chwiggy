import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //reducer not reducers since one store has one reducer function
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
