import React, { useState } from 'react'
import ProductsCards from './ProductsCards';
import products from "../../data/products.json"
const TrendingProducts = () => {
    const [visible,setvisble]=useState(8);
    const loadMoreProducts=()=>{
        setvisble(prevCount=>prevCount+4)
    }
  return (
 <section className='section__container prodct__container'>
<h2 className='section__header'>Trending Products</h2>
<p className='section__subheader mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Repellat fugit veniam fugiat optio in alias dolor laborum illum quae nemo?</p>

{/* Products Cards section */}
<div className="mt-12">
    <ProductsCards products={products.slice(0,visible)} />
    </div>
{/* load more products btn */}
<div className="product_btn">
    {
        visible<products.length &&(
            <button className='btn' onClick={loadMoreProducts}>load more</button>
        )
    }
</div>
 </section>
  )
}

export default TrendingProducts
