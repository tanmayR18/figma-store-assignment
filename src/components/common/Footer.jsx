import React from 'react'
import FooterSvg from './FooterSvg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const colors = ["rgb(242,78,30)", "rgb(15,169,88)", "rgb(199,185,255)", "rgb(255,199,0)"];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const bgColor = colors[randomColorIndex]; 


    return (
        <div style={{backgroundColor: bgColor}}>
            <div className=' flex flex-col md:flex-row items-center md:items-start justify-between w-full md:w-10/12 mx-auto 
             py-20 px-5 md:px-0 gap-y-10
            '>
                <div className=' flex'>
                    <FooterSvg />
                </div>

                <div className=' flex flex-wrap w-full md:w-[60%] gap-y-10'>

                    
                        <div className=' font-bold text-3xl w-full md:w-1/2 text-center md:text-left'>
                            OBJECTS  THAT INSPIRE.
                        </div>

                        <div className='flex flex-col gap-4 font-semibold w-[50%] md:w-fit'>
                            <Link className=' hover:underline' to={"#"}>Privacy Policy</Link>
                            <Link className=' hover:underline' to={"#"}>Terms of sales</Link>
                            <Link className=' hover:underline' to={"#"}>Contact Us</Link>
                        </div>

                    <div className=' flex flex-wrap gap-3 font-semibold md:font-normal md:gap-5 w-[50%] md:w-full text-xl md:text-3xl '>
                        <Link className=' hover:underline ' to={"#"}>FIGMA</Link>
                        <Link className=' hover:underline ' to={"#"}>INSTAGRAM</Link>
                        <Link className=' hover:underline' to={"#"}>TWITTER</Link>
                        <Link className=' hover:underline ' to={"#"}>YOUTUBE</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer