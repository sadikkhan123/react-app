import React from 'react'
import data from './data.json'
import img1 from '../components/asset/img1.png'
const Hero = () => {
  return (
    <>
    {/* this is the main hero section with download cv button for css the tailwind css framework is used  */}
    <section className="  text-gray-600 body-font  -mt-[142px] sm:p-0 md:mx-auto mb-16 " id='hero'>
    <div  className="container mx-auto flex px-0 md:px-5 py-2 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 sm:p-0   flex flex-col md:items-start md:text-left   ">
      <h1 className="md:text-[40px] sm:text-3xl px-10  text-3xl md:mb-4 leading-5 ">Hi, <br/><br/>  Myself <span className="text-blue-500">  Sadik Khan</span>,<br/><br />I'm a </h1><br/>
      <p className="sm:text-2xl md:text-[20px] p-0 mb-8 leading-relaxed    px-10  ">{data.hero.desc}</p>
      
      </div>
      <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-10">
        {/* these svgs are svg images used in website  */}
   
<img src={img1} alt="Logo" />
      </div>
    </div>
  </section></>
  )
}

export default Hero