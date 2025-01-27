import React from 'react'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <>
    <main className='bg-gray-100 px-[300px] min-h-screen pt-4'>
        <Blog title= "This is First blog" author= "Kitan" />
        <Blog title= "This is Second blog"author= "Sidney"  />
        <Blog title= "This is Third blog" author= "Demola" />
        <Blog title= "This is Forth blog" author= "Damola"  />
        <Blog title= "This is Fifth blog" author= "Ehis"  />
        <Blog title= "This is Sixth blog" author= "Alex" />
    </main>
    </>
  )
}

export default Blogs
