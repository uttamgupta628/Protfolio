import React from 'react'
import img1 from "../../assets/img1.png"
import Textchanger from '../../Textchanger'


const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20'>
  <div className='md:w-2/4 md:pt-10 relative -top-5 md:-top-10'>
    <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><Textchanger/></h1>
    <p className='text-sm md:text-2xl tracking-tight mt-4'>I specialize in web development, with hands-on experience in HTML, CSS, JavaScript, React, and various web technologies to build dynamic solutions.</p>
    <button className='mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
      Contact Me
    </button>
  </div>
  <div className='flex justify-center md:justify-end w-full md:w-2/4'>
    <img 
      className='w-72 h-72 md:w-[400px] md:h-[400px] rounded-full object-cover' 
      src={img1} 
      alt="Profile" 
    />
  </div>
</div>

  )
}

export default Home
