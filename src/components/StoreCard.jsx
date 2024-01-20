import React from 'react'
import img from '../assets/drugs.jpg'

const StoreCard = () => {
  return (
    <div className='mx-3 mt-4 font-poppins rounded-md shadow-2xl p-10'>
      <div className='text-sm'>
        <img src={img} alt=""  className=' rounded-md my-2'/>
        <p><span className='font-semibold'>Drug name</span>: Arthemether (500mg)</p>
        <p><span className='font-semibold'>Available</span>: Yes</p>
        <p><span className='font-semibold'>Expiration</span>: 2025-04-02</p>
    
      </div>
      <button className='px-4 py-2 rounded-sm bg-blue-500 w-full my-2'>Request</button>

    </div>
  )
}

export default StoreCard