import React from 'react'

const Create = () => {
    return (
        <main className='bg-gray-100 flex items-center  min-h-screen flex-col'>
      <div className='mt-20'>
      <h2 className='text-center font-bold text-2xl text-slate-800 underline '>Add a Blog</h2>

<form action="" className=' mt-10 shadow-xl p-10 bg-white rounded'>
    <div>
        <label htmlFor="">Title:</label>
        <input type="text" placeholder='Title' className='bg-gray-100 shadow-xs p-2 w-full'/>
    </div>

    <div>
        <label htmlFor="">Content</label>
        <textarea name="" id="" className=' h-20 bg-gray-100 shadow-xs p-2 w-full mt-3 mb-2'></textarea>
    </div>

    <div>
        {/* <label htmlFor="">Images</label> */}
        <input type="file" className='bg-gray-100 p-2 mb-2 shadow-xs '/>
    </div>

    <div>
        <label htmlFor="">Author:</label>

        <select name="" id="" className=' ms-2 bg-gray-100 p-1 mt-1 shadow-xs'>
            <option value="">Ayokunle</option>
            <option value="">Kitan</option>
            <option value="">Damaola</option>
        </select>
    </div>

    <button type='submit' className='w-full py-2 text-center rounded bg-blue-500 hover:bg-blue-800 mt-4 text-white'>Add blog</button >
</form>
      </div>
        </main>
    )
}

export default Create
