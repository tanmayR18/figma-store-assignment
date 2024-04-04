import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {

    const [scrolling, setScrolling] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(() => {
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
    <nav className={`fixed z-50 w-full duration-300 ${scrolling ? "" : " -translate-y-[100%]"}  ${scrollTop <= 0 ? "bg-[#ffc700]" : "bg-white"}
     sm:py-2 lg:p-3

    `}>
        <div className=' p-2 md:p-0 sm:w-[90%] mx-auto  justify-between items-center flex'>
            <div className=' flex gap-2'>
                <a 
                className='hidden lg:block font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white'
                href='/#shop'
                >
                    Shop
                </a>

                <a 
                className='hidden md:block font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white'
                href='#'>
                    About
                </a>

                <div 
                className='flex items-center justify-center md:p-2 cursor-pointer'> 
                    <IoSearchSharp size={25} />
                </div>
            </div>

            <Link
            to={"/"} className=' tracking-wide font-bold text-lg sm:text-2xl'>
                THE FIGMA STORE
            </Link>

            <div className=' flex gap-2'>   
                
                <select className=' hidden lg:flex bg-black text-white focus:outline-none focus:border-none rounded-3xl py-3 px-6 cursor-pointer'>
                    <option>UNITED STATE</option>
                    <option>JAPAN</option>
                    <option>CANADA</option>
                    <option>UNITED KINGDOM</option>
                    <option>EUROPEAN UNION</option>
                    <option>I'M JUST BROWSING</option>
                </select>

                <div 
                className='hidden md:block font-bold border-2 border-black px-6 py-2 rounded-3xl duration-300 hover:bg-black hover:text-white cursor-pointer'
                >
                    Cart 1
                </div>

                {/* Hamburgur for mobile view */}

                <div 
                className=' flex md:hidden cursor-pointer relative'>
                    
                    <GiHamburgerMenu
                    className={`${showDropDown && "hidden"}`}
                    onClick={() => setShowDropDown( prevState => !prevState)}
                    size={30} />

                    <RxCross2 
                    className={`${!showDropDown && "hidden"}`}
                    onClick={() => setShowDropDown( prevState => !prevState)}
                    size={30} />


                    <div className={`absolute top-10 right-0  w-32 font-bold rounded-lg  bg-white duration-300  ${showDropDown ? " opacity-100" : " opacity-0 invisible -translate-y-5"} flex flex-col gap-2`}>
                        <a 
                        className=' border-b p-2'
                        onClick={() => setShowDropDown(false)}
                        href='/#shop'>
                            Shop
                        </a>
                        <Link 
                        className=' border-b p-2'
                        onClick={() => setShowDropDown(false)}
                        to={"/#about"}>
                            About
                        </Link>
                        <Link 
                        className=' border-b p-2'
                        onClick={() => setShowDropDown(false)}
                        to={"/#cart"}>
                            Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar