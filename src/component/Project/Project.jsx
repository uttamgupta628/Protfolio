import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    
    const projectdetail=[{
        projectname: "Plants selling ecommerce website",
        languageused: "Html , Css , java-Script , Bootstrap",
        codelink: "https://github.com/uttamgupta628/plant_website"
    },{
        projectname: "Calculator",
        languageused: "Html , Css , java-Script",
        codelink: "https://github.com/uttamgupta628/calculator-js"
    },
    {
        projectname: "Todo App",
        languageused: "Html , Css , React , Bootstrap",
        codelink: "https://github.com/uttamgupta628/Todo"
    }
]
  return (
    <div id='Projects' className='p-4 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
      {projectdetail.map((item, ind) => 
          <ProjectCard key={ind} title={item.projectname} main={item.languageused} code={item.codelink}/>
        )}
      </div>
    </div>
  )
}

export default Project
