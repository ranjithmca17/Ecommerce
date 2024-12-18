// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
// products:[],
// selectedItems:0,
// totalPrice:0,
// tax:0,
// taxRate:0.05,
// grandTotal:0,

// }

// const cartSlice=createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{
// const isExist=state.products.find((products)=>products._id===action.payload._id);

// if(!isExist){
//     state.products.push({...action.payload,quantity:1})
// }else{
//     console.log("Item is Already Added");
    
// }
// state.selectedItems=setSelectedItems(state);
// state.totalPrice=setTotalPrice(state);
// state.tax=setTax(state);
// state.grandTotal=setGrandTotal(state);
//         }
//     }
// })


// export const setSelectedItems=(state)=>state.products.reducer((total,product)=>{
//     return Number(total+product.quantity)
// })

// export const setTotalPrice=(state)=>state.products.reducer((total,product)=>{
//     return Number(total+product.quantity*product.price)
// })

// export const setTax=(state)=>setTotalPrice(state)* state.taxRate;

// export const setGrandTotal=(state)=>{
// return setTotalPrice(state)+ setTotalPrice(state) * state.taxRate
// }

// export const {addToCart}=cartSlice.actions;

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
    // Action to add a product to the cart
    addToCart: (state, action) => {
      const isExist = state.products.find((product) => product.id === action.payload.id);

      if (!isExist) {
        // If the product doesn't exist, add it to the cart with quantity 1
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        // If the product already exists, just log it
        console.log("Item is already added");
      }

      // Update cart metrics after adding a new item
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    // Action to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }

      // Update cart metrics after quantity change
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
  },
});

// Helper functions to calculate the cart totals

// Set selected items: sum of quantities of all products in the cart
export const setSelectedItems = (state) => {
  return state.products.reduce((total, product) => total + product.quantity, 0);
};

// Set total price: sum of quantity * price for all products
export const setTotalPrice = (state) => {
  return state.products.reduce((total, product) => total + product.quantity * product.price, 0);
};

// Set tax: total price * tax rate
export const setTax = (state) => {
  return setTotalPrice(state) * state.taxRate;
};

// Set grand total: total price + tax
export const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTax(state);
};

// Export the action and the reducer
export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
