import React from 'react'
import {AiFillLinkedin,AiFillInstagram,AiFillGithub} from "react-icons/ai"
import { FaBeer } from "react-icons/fa";

const Footer = () => {
  return (
  <>
  {/* footer section */}
  <footer className=" body-font w-full left-0 right-0 bottom-0   bg-[#222222] text-white">
  <div className="  px-3 py-2 w-full flex items-center justify-between sm:flex-row flex-col mx-auto">
    <div className="flex itmes-center gap-2 mx-2">
      <svg
        className="pt-1"
        width="23px"
        height="23px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
      </svg>
      sadikkhan
    </div>
    <p className="text-sm  sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4 ">
      © 2022 Sadikkhan - all rights reserved
    </p>
    <a href="https://github.com/sadikkhan123">
      <p className=" flex justify-center text-sm  sm:ml-4 sm:pl-4 sm:mt-0 mt-4 items-center ">
        {" "}
        made with ❤️ and opensource on
        <svg
          className="w-5 h-5 mx-1"
          // style={{ fill: "#686868" }}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
        </svg>
      </p>
    </a>
    <div className='flex gap-4'>
    <a href='https://www.linkedin.com/in/sadik-khan-4b3ba9255/'><AiFillLinkedin size={35}/></a>
          <a href='https://github.com/sadikkhan123/'><AiFillGithub size={35}/></a>
          <a href='https://www.instagram.com/sadikkhan_007/'><AiFillInstagram size={35}/></a>
         
          </div> 
  </div>
</footer>

  </>
  )
}

export default Footer