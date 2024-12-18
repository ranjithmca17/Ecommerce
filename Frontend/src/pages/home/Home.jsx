import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealSection from './DealSection'
import Blogs from '../Blogs/Blogs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <HeroSection/>
      <TrendingProducts/>
      <DealSection/>
      <Blogs/>
    </div>
  )
}

export default Home
