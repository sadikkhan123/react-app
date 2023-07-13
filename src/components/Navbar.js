import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setmenu] = useState(0);
  const handleMenu = () =>
    setmenu(!menu)
   

  return (
    <>
   <div className='  text-white z-[100] fixed w-full flex justify-center items-center md:pt-10 md:p-2 '>
      <div className='w-full md:w-auto md:rounded-full bg-[rgba(31,32,35,.8);] items-center justify-between bg-opacity-90 backdrop-blur-sm h-10 gap-5 flex pl-1' >
      <img className="w-10 h-10 rounded-full hover:scale-[3] hover:rounded" src="sadik.jpeg" alt="Rounded avatar"></img>
      <div className='flex justify-center text-center cursor-pointer '>
      
          <svg
            className="pt-1"
            width="23px"
            height="23px"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          
          >
            <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
          </svg>
          <a href='#hero'><h1 className='text xl '>sadikkhan</h1></a>
        </div>
        <ul className='hidden md:flex gap-4 items-center pr-1'>
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={50} duration={500}><li className=''>Home</li></Link>
        <Link activeClass="active" to="hero2" spy={true} smooth={true} offset={50} duration={500}><li className=''>About</li></Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}><li className=''>skills</li></Link>
       <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}><li className=''>projects</li></Link>
        <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={50} duration={500}><li className=''>timeline</li></Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}><li className=''>contact</li></Link>
          <a href='cv.pdf'download><button className=" text-white ml-4 outline inline-flex bg-blue-500  py-2 px-6 focus:outline-none rounded-full text-sm  hover:bg-white hover:text-blue-500">Download cv</button></a>
        </ul>
        
        <div onClick={handleMenu} className='md:hidden px-4'>
          {!menu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-close"></i>}

        </div>

      </div>
      </div>
      <div className={menu ? ' fixed bg-[rgba(31,32,35,.8);]  top-0 bg-opacity-90 backdrop-blur-sm  left-0 h-screen w-[100%]  z-[100] mt-10 md:hidden justify-center text-center ease-in-out duration-500' : "-translate-x-full"} >
  
        <ul onClick={handleMenu} className= "pt-8 text-white ">
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>Home</li></Link>
        <Link activeClass="active" to="hero2" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>About</li></Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>Skills</li></Link>
       <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>Projects</li></Link>
        <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>Timeline</li></Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}><li className='py-5'>Contact</li></Link>
          <a href='cv.pdf'download><button className=" text-white ml-4 outline inline-flex bg-blue-500  py-2 px-6 focus:outline-none rounded-full text-sm  hover:bg-white hover:text-blue-500">Download cv</button></a>
        </ul>
      </div>

    </>
  )
}

export default Navbar