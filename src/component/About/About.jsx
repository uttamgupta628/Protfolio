import React from 'react'
import {IoArrowForward} from "react-icons/io5"
import img2 from "../../assets/img2.jpg"
const arr=[{
  name: "Frontend Developer",
  detail: "A passionate Frontend Developer proficient in HTML, CSS, JavaScript, React, and responsive design, creating seamless, user-friendly websites and applications with a focus on performance."},
  {
  name :"Backend Developer",
  detail :"As a backend developer, I specialize in server-side logic, database management, and API integration. I ensure seamless data flow, performance, and security for applications."
  },
  { 
  name :"Competitive programming",
  detail :"I am passionate about competitive programming, solving complex algorithmic challenges, and honing problem-solving skills. I enjoy participating in contests to improve my coding efficiency."
}]

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 relative'>
      <h2 className='text-2xl md:text-4xl text-white font-bold absolute left-4 top-4'>About</h2>
      <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
        <img className='md:h-80 mr-10' src={img2} alt="" />
        <ul>
            {arr.map((item)=><div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1"/>
                <span className='w-96'>
                  <h1 className='text-xl md:text-2xl fonto-semibold leading-normal'>{item.name}</h1>
                  <p className='text-sm md:text-md leading-tight'>{item.detail}</p>
                </span>
            </div>)}
        </ul>
      </div>
    </div>
  )
}

export default About
