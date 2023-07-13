import React from 'react'
import jsonData from "./data.json"

const projectsData = () => {

  console.log(jsonData);
  return (
    <div className='grid md:grid-cols-4 gap-4 px-3 pt-28 'id="project">
      {jsonData.projects.map((item)=>{
        return(
<div
    className=" mb-10 bg-slate-200 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src={item.img}
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
           {item.name}
      </h5>
      <p className="mb-4 text-base text-neutral-600 ">
      {item.desc}
      </p>
     
    </div>
  </div>
        )
      })}
    
  </div>
    
  )
}

export default projectsData