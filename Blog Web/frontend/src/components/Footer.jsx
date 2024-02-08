import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='mt-8 w-full bg-black md:px-[500px] px-8 flex justify-between text-sm md:text-md py-8 md:mt-8'>
    <div className='flex flex-col text-white'>
        <p><a href="#" >Featured Blogs</a></p>
        <p><a href="#" >Most viewed</a></p>
        <p><a href="#" >Readers choice</a></p>
    </div>
    
    <div className='flex flex-col text-white'>
        <p><a href="#" >Most engaging</a></p>
        <p><a href="#" >Recent Posts</a></p>
    </div>
    
    <div className='flex flex-col text-white'>
        <p><a href="#" >Privacy Policy</a></p>
        <p><a href="#" >About us</a></p>
        <p><a href="#" >Terms & Conditions</a></p>
        <p><a href="#" >Terms & Services</a></p>
    </div>
      
    </div>
    <p className='py-2 pb-2 text-center text-white bg-black'>All rights reserved @2023</p>
    </>
    
  )
}

export default Footer
