import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"
const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className="header__content z-30">
        <h4>UP TO 20% Discount on</h4>
        <h1>Offer Only Two Days</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Deserunt atque, tempora minus beatae facilis nam perferendis tenetur quis ratione enim?
        </p>
        <button><Link className='btn' to='/shop'>EXPLORE NOW</Link></button>
      </div>
      <div className="">
        <img src={bannerImg} alt="banner img" />
      </div>
    </div>
  )
}

export default Banner
