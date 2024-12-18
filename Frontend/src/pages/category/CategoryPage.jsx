import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/products.json";
import ProductsCards from '../shop/ProductsCards';
const CategoryPage = () => {
    const {categoryName}=useParams();
    const [filterProducts,setFilterProduts]=useState([]);

    useEffect(()=>{
        const filtered=products.filter((products)=>products.category===categoryName.toLocaleLowerCase())
    setFilterProduts(filtered);
    },[categoryName])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
  return (
<>
<section className='section__container bg-primary-light'>
<h2 className='section__header capitalize'>{categoryName}</h2>
<p className='section__subheader'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, omnis!</p>
</section>

{/* product cards */}
<div className="section__continer">
    <ProductsCards products={filterProducts}/>
</div>
</>
  )
}

export default CategoryPage
