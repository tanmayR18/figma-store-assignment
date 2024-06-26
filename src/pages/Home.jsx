import React from 'react'
import Carousel from '../components/core/home/Carousel'
import Shop from '../components/core/home/Shop'
import Category from '../components/core/home/Category'

const Home = ({categories}) => {
    
  return (
    <div className=''>
        <Carousel categories={categories}/>
        <Shop/>
        <Category categories={categories}/>
    </div>
  )
}

export default Home