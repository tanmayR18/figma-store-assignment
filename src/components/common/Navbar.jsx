import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TfiLocationPin } from "react-icons/tfi";


const Navbar = () => {

    const [scrolling, setScrolling] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(() => {
        
        // For checking  scrolling  on window scroll event.
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > scrollTop) {
                setScrolling(false);
            } else {
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        if( scrolling || showDropDown ) setShowDropDown(false)
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [scrollTop]);
    
  return (
    <nav className={`fixed z-50 w-full duration-300 ${scrolling ? "" : " -translate-y-[100%]"}  ${scrollTop <= 0 ? " border-transparent" : "bg-white"}
    py-2 lg:p-3

    `}>
        <div className=' p-2 md:p-0 sm:w-[90%] mx-auto  justify-between items-center flex'>

            {/* Links and Hamburgur btn */}
            <div className=' flex gap-2'>
                <a 
                className='hidden lg:block font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white'
                href='/#shop'
                >
                    Shop
                </a>

                <button 
                className='hidden lg:block cursor-pointer font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white'
                href='#'>
                    About
                </button>

                {/* Hamburgur for mobile view */}
                <div 
                className='flex lg:hidden cursor-pointer border-2 border-black rounded-full p-1 sm:p-2'>
                    
                    <GiHamburgerMenu
                    className={`${showDropDown && "hidden"}`}
                    onClick={() => setShowDropDown( prevState => !prevState)}
                    size={20} />

                    <RxCross2 
                    className={`${!showDropDown && "hidden"}`}
                    onClick={() => setShowDropDown( prevState => !prevState)}
                    size={20} />


                    <div className={`absolute left-0 top-14 w-screen h-screen flex flex-col gap-10 p-10 font-bold   bg-white transition-transform duration-300  ${showDropDown ? " scale-y-100" : " scale-y-0 text-white"} origin-top flex flex-col gap-2`}>
                        <div className={`' flex flex-col gap-4 text-[2.5rem] font-bold ' `}>
                            <a 
                            className=''
                            onClick={() => setShowDropDown(false)}
                            href='/#shop'>
                                Shop
                            </a>
                            <Link 
                            className=''
                            onClick={() => setShowDropDown(false)}
                            to={"/#about"}>
                                About
                            </Link>
                        </div>

                        <div className=' flex flex-col gap-3'>
                            <Link className=' hover:underline' to={"#"}>Privacy Policy</Link>
                            <Link className=' hover:underline' to={"#"}>Terms of sales</Link>
                            <Link className=' hover:underline' to={"#"}>Contact Us</Link>
                        </div>

                    </div>
                </div>

                <div 
                className='flex items-center justify-center md:p-2 cursor-pointer'> 
                    <IoSearchSharp size={20} />
                </div>
            </div>

            {/* Company Name */}
            <Link
            to={"/"} className=' font-bold text-lg md:text-2xl'>
                THE FIGMA STORE
            </Link>

            {/* DropDown and Cart */}
            <div className=' flex gap-2 items-center'>   
                
                <select className=' hidden lg:flex bg-black text-white focus:outline-none focus:border-none rounded-3xl py-3 px-6 cursor-pointer'>
                    <option>UNITED STATE</option>
                    <option>JAPAN</option>
                    <option>CANADA</option>
                    <option>UNITED KINGDOM</option>
                    <option>EUROPEAN UNION</option>
                    <option>I'M JUST BROWSING</option>
                </select>

                <div className=' flex lg:hidden'>
                    <TfiLocationPin size={20}/>
                </div>

                <div 
                className='hidden md:block font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white cursor-pointer'
                >
                    Cart 1
                </div>

                <div className='blocl md:hidden font-bold border-2 border-black px-2 sm:px-3 sm:py-1 rounded-3xl duration-300 hover:bg-black hover:text-white cursor-pointer'> 
                    1
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar