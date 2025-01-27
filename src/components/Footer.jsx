import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-blue-950 flex items-center justify-around py-20 px-10'>

       <div className='flex gap-[300px]'>
       <div className='text-white'>
            <h3 className='font-bold text-2xl mb-3'>Solutions</h3>
            <ul className='space-y-2'>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "blogs">Blogs</Link>
                </li>
                <li>
                    <Link to= "create">Add Blog</Link>
                </li>
                <li>Insights</li>
                <li>Commerces</li>
            </ul>
        </div>

        <div className='text-white'>
        <h3 className='font-bold text-2xl mb-3'>Support</h3>
            <ul>
                <li>Submits tickets</li>
                <li>Documentation</li>
                <li>Guides</li>
            </ul>
        </div>

        <div className='text-white'>
        <h3 className='font-bold text-2xl mb-3'>Company</h3>
            <ul>
                <li>About</li>
                <li>Blogs</li>
                <li>Jobs</li>
                <li>Press</li>
            </ul>
        </div>

        <div className='text-white'>
        <h3 className='font-bold text-2xl mb-3'>Legal</h3>
            <ul>
                <li>Terms of conditions</li>
                <li>Privacy Policy</li>
                <li>Lincense</li>
            </ul>
        </div>
       </div>
    </footer>
  )
}

export default Footer
