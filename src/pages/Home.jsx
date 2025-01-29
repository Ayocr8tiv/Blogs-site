import React from 'react'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
// import RightSideBar from '../components/RightSideBar'

const Home = () => {
  return (
    <>
      <main className='w-[100%] flex items-center'>
          <SideBar/>
          <Main/>
          {/* <RightSideBar/> */}
      </main>
    </>
  )
}

export default Home
