import React from 'react'

// https://store.figma.com/cdn/shop/files/mobile_200x.png?v=1702333716
// 
const Shop = () => {
  return (
   // className='bg-cover object-cover object-center md:bg-contain md:bg-center bg-no-repeat bg-[url(https://store.figma.com/cdn/shop/files/mobile_200x.png?v=1702333716)] md:bg-[url(https://store.figma.com/cdn/shop/files/desktop_2400x.png?v=1702333702)] pt-96 pb-4 md:p-0'
            // <div className=' h-screen flex flex-col justify-end md:justify-center gap-2 w-full md:w-1/2  lg:gap-3 p-5 md:pl-10 '>
            //     <h2 className=' font-extrabold text-[2.5rem] text-center md:text-left'>
            //         FIGMA X WORK <br className=' hidden md:block'/> LOUDER
            //     </h2>
            //     <p className=' text-2xl md:text-[2rem] text-center md:text-left'>
            //         Meet the limited edition Figma Creator Micro Keyboard
            //     </p>
            //     <button className=' text-white bg-black px-12 py-3 rounded-3xl font-bold w-fit'>
            //         PREORDER
            //     </button>
            // </div> 
    
        <div id='shop' className='relative md:h-full md:bg-contain bg-center  bg-no-repeat flex flex-col gap-10 pt-20  lg:py-10 lg:pt-32 '>


            <div className='p-2 text-2xl sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] group font-bold text-center md:w-10/12 mx-auto flex items-center justify-center flex-wrap gap-x-5 lg:gap-y-2'>
                <p className=' group-hover:opacity-50  duration-300'>FIGMA'S</p> 
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-burst.static.svg?v=34745811441670751621705692308' /> 
                <p className=' group-hover:opacity-50  duration-300'>COLLECTION</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-hourglass.static.svg?v=133626873782927219541705692308' />
                <p className=' group-hover:opacity-50  duration-300'>OF</p>
                <p>LAYERS</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-zag.static.svg?v=102718930007740203771705692308' />
                <p className=' group-hover:opacity-50  duration-300'>AND</p> 
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-dots.static.svg?v=39142388321885661271705692308'/> 
                <p>COMPONENTS</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-sun.static.svg?v=163357932534391307201705692308' />
                <p className=' group-hover:opacity-50  duration-300'>FOR</p> 
                <p className=' group-hover:opacity-50  duration-300'>YOU</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-comet.static.svg?v=16892712658856357451705692308'/>
                <p className=' group-hover:opacity-50  duration-300'>AND</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-snake.static.svg?v=34100567131936571961705692308' />
                <p className=' group-hover:opacity-50  duration-300'>YOUR</p>  
                <img src='https://store.figma.com/cdn/shop/t/12/assets/word-symbol-tri.static.svg?v=32742515804419710851705692308' />
                <p className=' group-hover:opacity-50  duration-300'>FRIENDS</p>
                
            </div>

            <div className=' relative'>
                <div className=' md:hidden'>
                    <img className=' object-cover w-full h-full' src='https://store.figma.com/cdn/shop/files/mobile_200x.png?v=1702333716' />
                    
                </div>
                <div className='hidden md:block'>
                    <img className=' object-cover w-full h-full' src='https://store.figma.com/cdn/shop/files/desktop_2400x.png?v=1702333702)' />
                </div>
                <div className='absolute bottom-20 md:top-[50%] md:-translate-y-1/2 md:h-fit  flex flex-col justify-end md:justify-center gap-2 w-full md:w-1/2  lg:gap-3 p-5 md:pl-10 '> 
                        <h2 className=' font-extrabold text-[2.5rem] text-center md:text-left'>
                            FIGMA X WORK <br className=' hidden md:block'/> LOUDER
                        </h2>
                        <p className=' text-2xl md:text-[2rem] text-center md:text-left'>
                            Meet the limited edition Figma Creator Micro Keyboard
                        </p>
                        <button className=' text-white bg-black px-12 py-3 rounded-3xl font-bold self-center md:self-start w-fit'>
                            PREORDER
                        </button>
                </div> 
                </div>
            </div>
        
  )
}

export default Shop