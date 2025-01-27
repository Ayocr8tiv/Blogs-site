import React from 'react'

const Blog = (props) => {
  return (
    <div className=' p-4 bg-white shadow-xs mb-4 rounded '>
        <h2 className='font-bold text-gray-600 text-xl'>{props.title}</h2>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quisquam quod facere blanditiis nulla, minima libero non quasi tempore rerum, porro explicabo temporibus sunt veniam nisi vel. Qui obcaecati repellendus quo, quos nam dicta, sit veritatis esse suscipit quidem officiis a, assumenda voluptatibus! Odio soluta doloremque, ad hic at tempora.</p>
        <p>Author: <b className='text-gray-600'>{props.author}</b></p>
    </div>
  )
}

export default Blog
