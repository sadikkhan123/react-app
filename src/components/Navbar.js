import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setmenu] = useState(0);
  const handleMenu = () =>
    setmenu(!menu)
  return (
    <>
      <div className='bg-white z-[100] fixed w-full flex justify-between items-center h-10 px-10 top-0'>
        <div className='flex justify-center text-center cursor-pointer'>
          <svg
            className="pt-1"
            width="23px"
            height="23px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          
          >
            <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
          </svg>
          <h1 className='text xl '>sadikkhan</h1>
        </div>
        <ul className='hidden md:flex gap-4'>
        <a href='#hero'><li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>home</li></a>
          <a href='#about'><li className='hover:text-[#4FE143] active:text-[#4FE143]  cursor-pointer'>about</li></a>
          <a href='#skills'><li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>skills</li> </a>
          <a href='#contact'><li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>contact</li></a>
        </ul>
        <div onClick={handleMenu} className='md:hidden'>
          {!menu ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-close"></i>}

        </div>

      </div>
      <div className={menu ? ' bg-white fixed top-0  left-0 h-screen w-[100%]  z-[100] mt-10 md:hidden justify-center text-center ease-in-out duration-500' : "-translate-x-full"} >
  
        <ul onClick={handleMenu}>
          <a href='#hero'><li className=''>home</li></a>
          <a href='#about'><li className='pt-10 '>about</li></a>
          <a href='#skills'><li className='pt-10 '>skills</li></a>
          <a href='#contact'><li className='pt-10 '>contact</li></a>
        </ul>
      </div>

    </>
  )
}

export default Navbar