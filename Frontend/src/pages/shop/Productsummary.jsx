// import React from 'react'
// import { useSelector } from 'react-redux'
// import { clearCart } from '../../redux/features/Cart/CartSlice';

// const Productsummary = () => {
//     const product=useSelector((store)=>store.cart.products);
//       // Handle clearing all products from the cart
//   const handleClearAll = () => {
//     dispatch(clearCart());
//   };

//     const {tax,taxRate,totalPrice,grandTotal,selectedItems}=useSelector((store)=>store.cart)
//   return (
//     <div className='bg-primary-light mt-5 rounded text-base'>
//         <div className="px-6 py-4 space-y-5">
//      <h2 className='text-xl font-bold text-dark'>Order Summary</h2>
//      <p className='text-text-dark mt-2'>Selected Items : {selectedItems}</p>
//      <p>total price : ${totalPrice.toFixed(2)}</p>
//      <p>Tax ({taxRate*100}) : ${tax.toFixed(2)}</p>
//      <h3>GrandTotal : ${grandTotal.toFixed(2)}</h3>
//      <div className="px-4 mb-6">
//         <button
//         onClick={handleClearAll}
//         className='bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex 
//         justify-between items-center mb-4'> <span className='mr-2'>Clear Cart</span> <i className ="ri-delete-bin-fill"></i></button>
//         <button className='bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex
//         justify-between items-center'><span className='mr-2'>Proceed Checkout</span><i className="ri-bank-card-line"></i></button>
//      </div>
//     </div>
//     </div>
//   )
// }

// export default Productsummary






import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  // Importing useDispatch here
import { clearCart } from '../../redux/features/Cart/CartSlice';

const Productsummary = () => {
  // Access the required state from the Redux store
  const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector((store) => store.cart);

  // Initialize dispatch
  const dispatch = useDispatch();

  // Handle clearing all products from the cart
  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-primary-light mt-5 rounded text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-xl font-bold text-dark">Order Summary</h2>
        <p className="text-text-dark mt-2">Selected Items: {selectedItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Tax ({taxRate * 100}%) : ${tax.toFixed(2)}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        
        <div className="px-4 mb-6">
          {/* Clear Cart button */}
          <button
            onClick={handleClearAll}
            className="bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
          >
            <span className="mr-2">Clear Cart</span>
            <i className="ri-delete-bin-fill"></i>
          </button>
          
          {/* Proceed to Checkout button */}
          <button className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center">
            <span className="mr-2">Proceed to Checkout</span>
            <i className="ri-bank-card-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productsummary;
