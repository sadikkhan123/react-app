import React from 'react'
import data from './data.json'
import img2 from '../components/asset/img2.png'
const Hero2 = () => {
  return (
    <>
    {/* about section just below the main hero section */}
      <section className="text-gray-600 body-font mx-auto mb-24 bg-slate-200 p-6" id='hero2'>
        <div className="  flex md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0 px-10">
<img  src={img2} alt="Logo"/>

           </div>
          <div className="lg:flex-grow md:w-1/2 sm:p-0   flex flex-col md:items-start md:text-left   ">
          <h2 className=" md:text-[40px] sm:text-3xl px-10  text-3xl md:mb-4   text-blue-500">
            
       A bit more about me !
      </h2>
      <p className="sm:text-2xl md:text-[20px] p-0 mb-8 leading-relaxed    px-10  ">{data.hero2.desc}</p>
     
      <div className="flex lg:flex-row md:flex-col">
     
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero2