import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({categories}) => {
    const list = Object.entries(categories)
    
  return (
    <div className='py-10 flex flex-col gap-5'>
        <div className=' text-center font-bold text-3xl'>
            CATEGORIES
        </div>
        
        {/* Category grid */}
        <div className=' w-3/4 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                list.map( (item,index) => (
                    <Link to={`/categories/${item[0]}`}  key={index}>
                        <div className=' rounded-2xl overflow-hidden'>
                            <img alt='productThumbnail' className=' object-' src={item[1][0].thumbnail} />
                        </div>
                        <p>Category</p>
                        <h5 className=' capitalize font-bold text-lg'>{item[0]}</h5>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Category