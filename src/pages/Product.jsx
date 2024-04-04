import React, { useState } from 'react'
import { useParams} from "react-router-dom"
import Form from '../components/core/product/Form'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';


const Product = ({categories}) => {
    const {productId} = useParams()
    const [image, setImage] = useState(0)
    let product;
    const productArray = []

    for( let key in categories){
        productArray.push(...categories[key])
    }
    product = productArray.find( item => item.id === parseInt(productId))
    

  return (
    <div className=' py-20'>
        <div className=' lg:hidden '>

            <div className='flex flex-col gap-4  lg:hidden p-2 mb-6'>
                    <p className=' font-bold bg-green-600 w-fit px-4 rounded-2xl py-1'>{product.category} </p>
                    <h1 className=' text-2xl lg:text-[2.5rem] font-bold'>{product.title}</h1>
                    <h3 className=' font-semibold italic'>{product.description}</h3>
                    <div className=' flex gap-4'>
                        <p className=' bg-yellow-300 text-red-400 w-fit px-2 py-1 font-semibold rounded-lg'>Rs.{product.price}</p>
                        <p className=' bg-red-400 text-yellow-400 w-fit px-2 py-1 font-semibold rounded-lg'>{product.discountPercentage} % off</p>
                    </div>
                    <p className=''>1 Quantity includes {product.quantity} units</p>
            </div>
            <Swiper
                    slidesPerView={2}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {
                        product.images.map( (item, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img alt='something'  className=' rounded-3xl' src={item} />
                                </div>
                            </SwiperSlide>
                        )) 
                    }
            </Swiper>
        </div>

        <div className=' lg:w-10/12 mx-auto flex justify-evenly  gap-5'>
            

            <div className=' flex-col gap-5 hidden lg:flex'>
                {
                    product.images.map( (item, index) => (
                        <div className={`h-20 w-20 cursor-pointer rounded-2xl overflow-hidden ${image === index ? "border-2 border-black" : ""}`} onClick={() => setImage(index)} key={index}>
                            <img alt='product' className=' w-full h-full object-cover' src={item} />
                        </div>
                    ))
                }
            </div>

           <div className=' w-[40%] hidden lg:block'>
            <div className=' rounded-[4rem] overflow-hidden '>
                    <img alt=' product' className=' object-cover ' src={product.images[image]} />
                </div>
           </div>


            {/* Form */}
            <div className=' w-full md:w-3/4 lg:w-[40%] p-5 md:p-10 lg:p-0'>
                <div className=' flex-col gap-4 hidden lg:flex'>
                    <p className=' font-bold bg-green-600 w-fit px-4 rounded-2xl py-1'>{product.category} </p>
                    <h1 className=' text-2xl lg:text-[2.5rem] font-bold'>{product.title}</h1>
                    <h3 className=' font-semibold italic'>{product.description}</h3>
                    <div className=' flex gap-4'>
                        <p className=' bg-yellow-300 text-red-400 w-fit px-2 py-1 font-semibold rounded-lg'>Rs.{product.price}</p>
                        <p className=' bg-red-400 text-yellow-400 w-fit px-2 py-1 font-semibold rounded-lg'>{product.discountPercentage} % off</p>
                    </div>
                    <p className=''>1 Quantity includes {product.quantity} units</p>
                </div>
                <Form product={product} />
            </div>
        </div>
        
    </div>
  )
}

export default Product