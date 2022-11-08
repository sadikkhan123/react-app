import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [menu,setmenu]=useState(0);
  const handleMenu = ()=>
  setmenu(!menu)
  return (
    <>
    <div className='bg-white fixed w-full flex justify-between items-center h-10 px-10 mb-36 top-0'>
    <h1 className='text 3xl'>Navbar</h1>
    <ul className='hidden md:flex gap-4'>
        <li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>home</li>
        <li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>about</li>
        <li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>skills</li>
        <li className='hover:text-[#4FE143] active:text-[#4FE143] cursor-pointer'>contact</li>
    </ul>
    <div className='md:hidden'>

</div>
        </div>
    <ul className='h-screen space-y-10 pt-14  md:hidden justify-center text-center hiddenh'>
        <li>home</li>
        <li>about</li>
        <li>skills</li>
        <li>contact</li>
    </ul>
    </>
  )
}

export default Navbar