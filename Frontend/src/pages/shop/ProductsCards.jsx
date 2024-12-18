import React from 'react'
import { Link } from 'react-router-dom';
import Ratings from '../../components/Ratings';
import {useDispatch} from "react-redux";
import { addToCart } from '../../redux/features/Cart/CartSlice';

const ProductsCards = ({products}) => {
    // console.log(products);
    const dispatch=useDispatch();

    // const handleToCart=({products})=>{
    

      const handleAddToCart=(product)=>{
        dispatch(addToCart(product))
      }
    // }
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {
        products.map((product,index)=>(
            <div className="product__card" key={index}>
                <div className="relative">
                <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt='product image' className='max-h-96 md:h-64
                w-full object-cover hover:scale-105 transition-all duration-100'/>
                </Link>
                <div onClick={(e)=>{
                  e.stopPropagation();
                  handleAddToCart(product)
                }} className="hover:block absolute top-3">
                <i className="ri-shopping-bag-2-line bg-primary p-1.5 text-white
                hover:bg-primary-dark"></i>
                </div>
                </div>
{/* product discription */}
<div className="product__card_content">
    <h4>{product.name}</h4>
    <p>${product.price} {product.oldprice ? <s>${product?.oldprice}</s>:null}</p>

<Ratings rating={product.rating}/>

</div>
            </div>
        ))
      }
    </div>
  )
}

export default ProductsCards

