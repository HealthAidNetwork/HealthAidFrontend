import React, { useState, useEffect } from 'react'
import AllinOne from '../AllinOne'
import Navbar from '../Navbar'
import StoreCard from '../StoreCard'
import axios from 'axios'
import { serverUrl } from '../..'

const Store = () => {

 
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your asynchronous operations go here
        const response =  await axios.get(`${serverUrl}/store`);
        const data = await response.data;
        console.log(data);

        // Update state or perform other actions with the fetched data
        setItems(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [])
  return (

    <div className='h-screen w-full'>
      <Navbar />

      <div className='pt-20 flex justify-center items-center sm: px-4'>
        <h1 className='font-semibold text-black mt-10'>Choose from the list of our available medications</h1>
      </div>


      <div className='lg:grid lg:grid-cols-3  sm:grid-col-1 py-10'>
        {items?.map((e, index)=>(
          <StoreCard 
          image = {e?.image}
          expiration={e?.expiration}
          name = {e?.name}
          available={e?.available}

          
          />
        ))}
     

      </div>

      <AllinOne />
    </div>

  )
}

export default Store