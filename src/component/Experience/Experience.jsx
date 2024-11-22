import React from 'react'
import {FaCss3,FaHtml5,FaJs,FaReact,FaAmazon} from "react-icons/fa"
import { TbBrandMysql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className='p-5 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Language and Framework</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <FaHtml5 color='#ff5733' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <FaCss3 color='#264de4' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <FaJs color='#F7DF1E' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <FaReact color='#61DAF8' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <TbBrandMysql color='#00758f' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <FaGithub  color='#4078c0' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <SiMongodb  color='#4db33d' size={50}/>
        </span>
        <span className='p-4 bg-zinc-950 flex items-center rounded-2xl'>
        <SiNodedotjs   color='#215732' size={50}/>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Experience
