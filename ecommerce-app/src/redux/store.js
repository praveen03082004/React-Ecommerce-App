import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productReducer,
  },
});