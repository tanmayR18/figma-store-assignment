import React, { useState } from 'react'
import { toast } from "react-hot-toast"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Form = ({product}) => {
    
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [quantity, setQuantity] = useState(1)
    const [ formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email:"",
        address: "",
        phoneNo: ""
    })

    const increaseQuantity = () => {
        if( (quantity+1)*product.quantity > product.stock ) toast.error("Sorry! We don't have that much in stock.") 
        setQuantity( prevState => prevState + 1)
    }

    const decreaseQuantity = () => {
        if( quantity <= 0) return
        setQuantity( prevState => prevState - 1)
    }

    const  handleInputChange= (e) =>{ 
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.firstName === "" 
        || formData.lastName === ""  
        || formData.email === ""   
        || formData.address === ""
        || formData.phoneNo === ""){
            toast.error("Please fill out all fields")
            return;
        }

        if (!formData.email.match(validRegex)) {
            toast.error("Enter a valid email")
            return
        }

        if(formData.phoneNo.trim().length !== 10 || isNaN(formData.phoneNo.trim())) {
            toast.error("Enter Valid Phone number")
            return
        }

        toast.success("Order Placed Successfully")
        console.log(" Form Data",formData)

        setFormData({
            firstName:"",
            lastName: "",
            email:"",
            address: "",
            phoneNo: ""
        })
        
        setQuantity(1)
    }

  return (
    <form 
        className=' border rounded-lg p-4 my-4 flex flex-col gap-4'
        onSubmit={handleSubmit}>

            <div className=' flex flex-col'>
                <label>
                    First Name:
                </label>
                <input className='my-input' type="text" name="firstName" onChange={handleInputChange} value={formData.firstName} />
            </div>

            <div className=' flex flex-col'>
                <label>
                    Last Name:
                </label>
                <input className='my-input' type="text" name="lastName" onChange={handleInputChange} value={formData.lastName} />
            </div>

            <div className=' flex flex-col'>
                <label>
                    Email:
                </label>
                <input className='my-input' type="text" name="email" onChange={handleInputChange} value={formData.email} />
            </div>

            <div className=' flex flex-col'>
                <label>
                    Phone No:
                </label>
                <input className='my-input' type="text"  name="phoneNo" onChange={handleInputChange} value={formData.phoneNo} />
            </div>

            <div className=' flex flex-col'>
                <label>
                    Address:
                </label>
                <textarea  className='my-input resize-none' name="address" onChange={handleInputChange} value={formData.address} />
            </div>

            {/* Quantity counter */}
            <div className=' flex justify-center items-center gap-5'>
                <div 
                className=' hover:bg-black hover:text-white duration-300 p-2 md:p-4 border-2 border-black cursor-pointer  rounded-full'
                onClick={decreaseQuantity}>
                    <FaMinus />
                </div>
                <div className=' font-bold text-lg'>
                    {quantity}
                </div>
                <div 
                className=' hover:bg-black hover:text-white duration-300 p-2 md:p-4 border-2 border-black cursor-pointer  rounded-full'
                onClick={increaseQuantity} >
                    <FaPlus />
                </div>
            </div>

            <button
            className=' bg-blue-600 py-2 md:py-3 text-white font-bold text-lg rounded-md'
            disabled = {quantity*product.quantity > product.stock}
            >
                {
                    quantity*product.quantity > product.stock ? "Out of stock" : "Order"
                }
            </button>
        </form>
  )
}

export default Form