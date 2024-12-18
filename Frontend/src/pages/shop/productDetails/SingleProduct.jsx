import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Ratings from '../../../components/Ratings';

const SingleProduct = () => {
    const {id}=useParams();
    // console.log(id);
    
  return (
    <>
      <section className='section__container bg-primary-light'>
<h2 className='section__header capitalize'>Single Product Pages</h2>
<div className="section__subheader space-x-2">
    <span><Link to={"/"}>Home</Link></span>
    <i className="ri-arrow-right-wide-fill"></i>
    <span><Link to={"/shop"}>Shop</Link></span>
    <i className="ri-arrow-right-wide-fill"></i>
    <span>Product Name</span>

</div>
      </section>

      <section className='section__container mt-8'>
<div className="flex flex-col items-center md:flex-row gap-8">
    {/* product image  */}
    <div className="md:w-1/2 w-full">
        <img src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0
        // .3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
        className='rounded-md w-full h-auto'/>
    </div>
    <div className="">
        <h3 className='text-2xl font-semibold mb-4'>Product name</h3>
        <p className='text-xl text-primary mb-4'>$100 <del>$130</del></p>
        <p className='text-gray-400 mb-4'>This is an Product Description</p>

        {/* additional product info */}
        <div className="">
            <p><strong>Category:</strong> accessories</p>
            <p><strong>Color:</strong> red</p>
            <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
            <Ratings rating={4}/>
            </div>

        </div>
        <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>Add to Card</button>
    </div>
</div>
      </section>
      {/* display Revies */}
      <section className='section__container mt-8'>
Reviews Here
      </section>
    </>
  )
}

export default SingleProduct
