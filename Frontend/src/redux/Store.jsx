// import {configureStore}from "@reduxjs/toolkit";
// import { CartReducer } from "./features/Cart/CartSlice";


// export const store=configureStore({
//     reducer:{
//         cart:CartReducer
//     },

// })





import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/CartSlice"; // ✅ Correct (default import)

export const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Matches the correct import
  },
});
