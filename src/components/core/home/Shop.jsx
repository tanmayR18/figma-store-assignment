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
    
        <div id='shop' className='relative md:h-full md:bg-contain bg-center md:bg-[url(https://store.figma.com/cdn/shop/files/desktop_2400x.png?v=1702333702)] bg-no-repeat'>
            <div className=' md:hidden'>
                <img className=' object-cover w-full h-full' src='https://store.figma.com/cdn/shop/files/mobile_200x.png?v=1702333716' />
                
            </div>
            {/* <div className='hidden md:block'>
                <img className=' object-cover w-full h-full' src='https://store.figma.com/cdn/shop/files/desktop_2400x.png?v=1702333702)' />
            </div> */}
             <div className='absolute bottom-20 md:static md:h-screen  flex flex-col justify-end md:justify-center gap-2 w-full md:w-1/2  lg:gap-3 p-5 md:pl-10 '> 
                 <h2 className=' font-extrabold text-[2.5rem] text-center md:text-left'>
                     FIGMA X WORK <br className=' hidden md:block'/> LOUDER
                 </h2>
                 <p className=' text-2xl md:text-[2rem] text-center md:text-left'>
                     Meet the limited edition Figma Creator Micro Keyboard
                 </p>
                 <button className=' text-white bg-black px-12 py-3 rounded-3xl font-bold self-center w-fit'>
                     PREORDER
                 </button>
             </div> 
        </div>
        
  )
}

export default Shop