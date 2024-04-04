import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = ({categories}) => {
    const {category} = useParams()
    // const [ selectedCategory, setSelectedCategory] = useState()

    let selectedCategory = []

    
    // useEffect(() => {
    //     for (let key in categories){
    //         if(key === category){
    //             console.log(true, key, category, categories[key])
    //             setSelectedCategory(categories[key]);
    //         }
    //     }
    // },[])

    for (let key in categories){
        if(key === category){
            console.log(true, key, category, categories[key])
            // setSelectedCategory(categories[key]);
            selectedCategory = categories[key]
        }
    }

    const getUrl = (url) => {
        return url.replaceAll(" ", "-")
    }


  return (
    <div className=' py-20 min-h-screen flex flex-col gap-5 w-10/12 mx-auto'>
        <h1 className=' font-bold text-2xl '>
            Category: <span className=' italic'>{category}</span>
        </h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10'>
            {
                selectedCategory.map( item => (
                    // <Link to={`/product/${category}/${getUrl(item.title)}`} className='' key={item.id}>
                    <Link to={`/product/${item.id}`} className='' key={item.id}>
                        <img className=' rounded-2xl' src={item.thumbnail} />
                        <div className='flex justify-between'>
                            <div className=' font-bold'>
                                <p>New!</p>
                                <h3>{item.title}</h3>
                            </div>
                            <div className=' font-semibold'>
                                <p>Rs. {item.price}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Category