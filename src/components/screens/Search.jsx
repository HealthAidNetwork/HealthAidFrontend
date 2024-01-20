import React from 'react'
import Navbar from '../Navbar'
import AllinOne from '../AllinOne'

const Search = () => {
  return (

    <div className='h-screen w-full'>
      <Navbar />
      <div className='px-10 pt-20 file:font-poppins'>

        <div className='mt-10 font-poppins'>
          <p>Upload the image of the medication you want to request for alongside your email address</p>
    
          <input type="file" name="" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' />
        
         <input type="text" name="" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4'  placeholder='Email address' />
        </div>
        <button className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Request</button>

      </div>





      <AllinOne />
    </div>

  )
}

export default Search