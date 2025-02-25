// import { createSlice } from "@reduxjs/toolkit";

// // Initial state for the cart
// const initialState = {
//   products: [],
//   selectedItems: 0,
//   totalPrice: 0,
//   tax: 0,
//   taxRate: 0.05,
//   grandTotal: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // Action to add a product to the cart
//     addToCart: (state, action) => {
//       const isExist = state.products.find((product) => product.id === action.payload.id);

//       if (!isExist) {
//         // If the product doesn't exist, add it to the cart with quantity 1
//         state.products.push({ ...action.payload, quantity: 1 });
//       } else {
//         // If the product already exists, just log it
//         console.log("Item is already added");
//       }

//       // Update cart metrics after adding a new item
//       state.selectedItems = setSelectedItems(state);
//       state.totalPrice = setTotalPrice(state);
//       state.tax = setTax(state);
//       state.grandTotal = setGrandTotal(state);
//     },

//     // Action to update the quantity of an item in the cart
//     updateQuantity: (state, action) => {
//       const { type, id } = action.payload; // Destructure type (increment/decrement) and id from payload

//       // Find the product that matches the id
//       const product = state.products.find((product) => product.id === id);

//       if (product) {
//         // If the action type is 'increment', increase quantity, otherwise 'decrement'
//         if (type === 'increment') {
//           product.quantity += 1;
//         } else if (type === 'decrement') {
//           // Prevent decrementing below 1
//           if (product.quantity > 1) {
//             product.quantity -= 1;
//           }
//         }

//         // Update cart metrics after quantity change
//         state.selectedItems = setSelectedItems(state);
//         state.totalPrice = setTotalPrice(state);
//         state.tax = setTax(state);
//         state.grandTotal = setGrandTotal(state);
//       }
//     },
//     removeFromCart:(state,action)=>{
//       state.products=state.products.filter((product)=>product.id!==action.payload.id);
//       //  Update cart metrics after quantity change
//         state.selectedItems = setSelectedItems(state);
//         state.totalPrice = setTotalPrice(state);
//         state.tax = setTax(state);
//         state.grandTotal = setGrandTotal(state);
//     }
//   },
// });

// // Helper functions to calculate the cart totals

// export const setSelectedItems = (state) => {
//   return state.products.reduce((total, product) => total + product.quantity, 0);
// };

// export const setTotalPrice = (state) => {
//   return state.products.reduce((total, product) => total + product.quantity * product.price, 0);
// };

// export const setTax = (state) => {
//   return setTotalPrice(state) * state.taxRate;
// };

// export const setGrandTotal = (state) => {
//   return setTotalPrice(state) + setTax(state);
// };

// // Export the action and the reducer
// export const { addToCart, updateQuantity,removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload.id);
      if (!existingProduct) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      updateCartState(state);
    },

    // Update product quantity (increment or decrement)
    updateQuantity: (state, action) => {
      const { type, id } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        if (type === "increment") {
          product.quantity += 1;
        } else if (type === "decrement" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
      updateCartState(state);
    },

    // Remove a product from the cart
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      updateCartState(state);
    },

    // Clear the entire cart
    clearCart: (state) => {
      Object.assign(state, initialState); // Reset to initial state
    },
  },
});

// Helper function to update cart totals
const updateCartState = (state) => {
  state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
  state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
  state.tax = parseFloat((state.totalPrice * state.taxRate).toFixed(2)); // Fix floating point issues
  state.grandTotal = parseFloat((state.totalPrice + state.tax).toFixed(2));
};

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
