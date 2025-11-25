import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col  items-center justify-center text-center space-y-2 my-32'><h1 className='md:text-4xl  text-2xl font-semibold'>Never miss a Blog!!</h1>
    <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get latest blog,new tech and exclusive news</p>
    <form action="" className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
      <input type="text"  className='border border-gray-300 rounded-md h-full w-full  border-r-0 outline-none px-3 text-gray-500' placeholder='Enter your email id' required/>
      <button type='submit' className='text-white bg-[#5151c7] cursor-pointer rounded-md rounded-l-none  md:px-12 px-8 h-full  hover:bg-primary transition-all '>Subscribe</button>
    </form>
    </div>
  )
}

export default Newsletter