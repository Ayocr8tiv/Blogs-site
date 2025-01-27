import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
   <nav className='h-[50px] shadow flex justify-between items-center px-10'>
        <div className='flex items-center'>
            <Link to= "/">
                <img src="./Group 1 (1).png" alt="" />
            </Link>

            <div className=' flex items-center bg-gray-100 rounded p-1 mx-4'>
                 <CiSearch />
                     <input type="earch" placeholder='Search..' className='focus:outline-none'/>
            </div>
        </div>

        <div className='flex items-center'>
        <div className='me-3'>
            <FaRegBell className='text-2xl relative'/>
            <p className='h-4 w-4 bg-red-600 text-white rounded-full 
            text-xs flex items-center justify-center absolute top-2 right-19'>2</p>
        </div>
        <div><CgProfile className='text-3xl'/></div>
        </div>
        
   </nav>
  )
}

export default Navbar
