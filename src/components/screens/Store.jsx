import React from 'react'
import AllinOne from '../AllinOne'
import Navbar from '../Navbar'
import StoreCard from '../StoreCard'

const Store = () => {
  return (

    <div className='h-screen w-full'>
      <Navbar />
   
      <div className='pt-20 flex justify-center items-center sm: px-4'>
        <h1 className='font-semibold text-black mt-10'>Choose from the list of our available medications</h1>        
      </div>
     
      
      <div className='lg:grid lg:grid-cols-3  sm:grid-col-1 py-10'>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />

      </div>

      <AllinOne />
    </div>

  )
}

export default Store