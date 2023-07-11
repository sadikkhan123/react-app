import React from 'react'
import data from './data.json'
import img2 from '../components/asset/img2.png'
const Hero2 = () => {
  return (
    <>
    {/* about section just below the main hero section */}
      <section className="text-gray-600 body-font mx-auto md:ml-20" id='about '>
        <div className=" mx-auto flex px-5 md:py-20 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0 px-6">
<img src={img2} alt="Logo"/>

           </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
          <h2 className="title-font sm:text-2xl text-3xl md:mb-4 font-medium text-justify justify-center  text-[#0014a8]">
            
       A bit more about me !
      </h2>
      <p className="mb-8 leading-relaxed  w-2/3 justify-center  ">{data.hero2.desc}</p>
     
      <div className="flex lg:flex-row md:flex-col">
     
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero2