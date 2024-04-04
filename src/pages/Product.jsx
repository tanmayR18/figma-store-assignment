import React, { useState } from 'react'
import { useParams} from "react-router-dom"
import Form from '../components/core/product/Form'

const Product = ({categories}) => {
    const {productId} = useParams()
    const [image, setImage] = useState(0)
    let product;
    const length = Object.entries(categories).length

    for (let i = 0 ; i<length;i++){
        const foundItem = Object.entries(categories)[i][1].find(item=> item.id === parseInt(productId));
        if(foundItem !== undefined){
            console.log(foundItem);
            product = foundItem
        }
    }


  return (
    <div className=' pt-20'>
        <div className=' w-10/12 mx-auto flex justify-evenly  gap-5'>
            

            <div className=' flex flex-col gap-5'>
                {
                    product.images.map( (item, index) => (
                        <div className={`h-20 w-20 cursor-pointer rounded-2xl overflow-hidden ${image === index ? "border-2 border-black" : ""}`} onClick={() => setImage(index)} key={index}>
                            <img className=' w-full h-full object-cover' src={item} />
                        </div>
                    ))
                }
            </div>

           <div className=' w-[40%]'>
            <div className=' rounded-[4rem] overflow-hidden '>
                    <img className=' object-cover ' src={product.images[image]} />
                </div>
           </div>

            {/* Form */}
            <div className='w-[40%]'>
                <div className='flex flex-col gap-4'>
                    <p className=' font-bold bg-green-600 w-fit px-4 rounded-2xl py-1'>{product.category} </p>
                    <h1 className=' text-[2.5rem] font-bold'>{product.title}</h1>
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