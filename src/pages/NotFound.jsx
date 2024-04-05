import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' bg-black text-white font-bold h-screen flex flex-col justify-center items-center gap-5 pt-20'>

        <h1 className=' text-2xl'>Page not found</h1>
        
        <Link 
        className=' bg-blue-500 p-4 px-6 rounded-2xl'
        to={"/"}>
            Home
        </Link>
    </div>
  )
}

export default NotFound