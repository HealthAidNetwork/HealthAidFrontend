import React from 'react'
import img from '../assets/drugs.jpg'
import { serverUrl } from '..'

const StoreCard = ({image,name, available, expiration}) => {
  return (
    <div className='mx-3 mt-4 font-poppins rounded-md shadow-2xl p-10'>
      <div className='text-sm'>
        <img src={ image ?`${serverUrl}${image}` : img} alt=""  className='w-full h-screen rounded-md my-2'/>
        <p><span className='font-semibold'>Drug name</span>: {name}</p>
        <p><span className='font-semibold'>Available</span>: {available ? 'YES' : 'NO'}</p>
        <p><span className='font-semibold'>Expiration</span>: {expiration}</p>
    
      </div>
      <button className='px-4 py-2 rounded-sm bg-blue-500 w-full my-2'>Request</button>

    </div>
  )
}

export default StoreCard