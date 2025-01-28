import React from 'react'
import { CiHome } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { TbLogs } from "react-icons/tb";





const SideBar = () => {
    return (
        <aside className='min-h-screen  w-[25%]  '>
            <div>
                <div className='flex items-center m-4  rounded p-2
                 hover:bg-gray-100 cursor-pointer hover:text-purple-600
                  hover:font-bold duration-300 ease-out '>
                    <CiHome />
                    <p className='ms-4'>Dashboard</p>
                </div>
                <div className='flex items-center m-4  rounded p-2
                 hover:bg-gray-100 cursor-pointer hover:text-purple-600
                  hover:font-bold duration-300 ease-out '>
                    <AiOutlineTeam />
                    <p className='ms-4'>Team</p>
                </div>
                <div className='flex items-center m-4  rounded p-2
                 hover:bg-gray-100 cursor-pointer hover:text-purple-600
                  hover:font-bold duration-300 ease-out '>
                    <LuShoppingBag />
                    <p className='ms-4'>Projects</p>
                </div>
                <div className='flex items-center m-4  rounded p-2
                 hover:bg-gray-100 cursor-pointer hover:text-purple-600
                  hover:font-bold duration-300 ease-out '>
                    <SlCalender />
                    <p className='ms-4'>Calender</p>
                </div>
                <div className='flex items-center m-4  rounded p-2
                 hover:bg-gray-100 cursor-pointer hover:text-purple-600
                  hover:font-bold duration-300 ease-out '>
                    <TbLogs />
                    <p className='ms-4'>Blogs</p>
                </div>

            </div>
        </aside>
    )
}

export default SideBar
