import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({categories}) => {
    const list = Object.entries(categories)
    console.log()
  return (
    <div>
        <div className=' w-3/4 mx-auto grid grid-cols-3 gap-x-10 '>
            {
                list.map( (item,index) => (
                    <Link to={`/categories/${item[0]}`}  key={index}>
                        <div className=' rounded-2xl overflow-hidden'>
                            <img className=' object-' src={item[1][0].thumbnail} />
                        </div>
                        <p>Category</p>
                        <h5>{item[0]}</h5>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Category