import React, { useState, useEffect } from 'react'
import AllinOne from '../AllinOne'
import Navbar from '../Navbar'
import StoreCard from '../StoreCard'
import axios from 'axios'
import { serverUrl } from '../..'
import { toast } from 'react-toastify';

const Store = () => {
  const [request, setRequest] = useState(false)
  const [loadingState, setLoadingState] = useState(false)
  const [items, setItems] = useState([])
  const [item2, setItem2] = useState([])
  const [formData, setFormData] = useState({
    image: "",
    email: "",
    address: "",
    phonenumber: "",
    quantity: "",
    country: "",
    expiration: "",
    data: ""

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let filter = []
  const handleSearch = (e) => {
    if (e.target.value) {
      filter = items?.filter((x) => x?.data.toLowerCase().includes(e?.target.value.toLowerCase()))
      setItems(filter)

    } else {
      setItems(item2)
    }

  };



  const handleDelivery = async (e) => {
    e.preventDefault()
    if (!formData?.country || formData?.address === "" || formData?.phonenumber === null || "") return null
    setLoadingState(true)


    try {
      const res = await axios.post(`${serverUrl}/delivery`, formData, { headers: { "content-type": "multipart/form-data" } })
      if (res.status === 200 || 201) {
        setLoadingState(false)
        toast.success("Your delivery has been qeued successfully")

      }
    } catch (error) {
      console.log(error);
      setLoadingState(false)
      toast.success("Delivery request failed")

    }

  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your asynchronous operations go here
        const response = await axios.get(`${serverUrl}/store`);
        const data = await response.data;

        // Update state or perform other actions with the fetched data
        setItems(data)
        setItem2(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [])

  useEffect(() => { }, [filter])
  return (

    <div className='h-screen w-full'>
      <Navbar />

      <div className='pt-20 flex justify-center items-center sm: px-4'>
        {!request && <h1 className='font-semibold text-black mt-10'>Choose from the list of our available medications</h1>}
      </div>
      {!request && <div className='lg:flex lg:space-x-4 px-4 py-2  sm:gap-y-2'>
        <input type="text" name="" id="" className='border border-blue-500 h-[40px] w-full rounded-md px-2 font-light font-poppins' placeholder='Search drug by name' onChange={(e) => handleSearch(e)} />
        <button
          className='lg:my-0 bg-blue-500 font-poppins px-4 py-2 rounded-md sm:my-2'>Refresh</button>
      </div>}


      {!request ? <div className='lg:grid lg:grid-cols-3  sm:grid-col-1 py-10'>
        {items?.map((e, index) => (
          <StoreCard
            image={e?.image_url}
            expiration={e?.expiration}
            email={e?.email}
            data={e?.data}
            available={e?.available}
            request={request}
            setRequest={setRequest}
            formData={formData}
            setFormData={setFormData}


          />
        ))
        }

      </div>
        :

        <form action="" className=' pt-28 px-10' onSubmit={handleDelivery}>
          <div className='w-full'>

            <p className='font-poppins my-2 font-semibold'>Is this the medication you want to request for ?</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
              <textarea name="res" id="" cols="30" rows="20" value={formData?.data} className='border my-2 mx-auto text-sm w-full p-4 marker:font-poppins' disabled></textarea>
              <img src={formData?.image} alt="" className='w-full h-screen rounded-md my-2' />

            </div>
            <div>
              <p className='font-poppins font-semibold'>Delivery Details</p>
            </div>
            <div className=' my-2 grid lg:grid-cols-2 gap-x-4 sm:grid-cols-1'>
              <input type="text" name="country" id="" className='border border-blue-500 px-2 h-[40px] w-full rounded-sm  font-poppins font-light my-2' placeholder='Enter Country Name' onChange={(e) => handleChange(e)} />
              <input type="text" name="address" id="" className='border border-blue-500 px-2 h-[40px] w-full rounded-sm  font-poppins font-light my-2' placeholder='Enter Delivery Address' onChange={(e) => handleChange(e)} />
              <input type="text" name="phonenumber" id="" className='border border-blue-500 px-2 h-[40px] w-full rounded-sm  font-poppins font-light my-2' placeholder='Enter Phonenumber' onChange={(e) => handleChange(e)} />
              <input type="text" name="quantity" id="" className='border border-blue-500 px-2 h-[40px] w-full rounded-sm  font-poppins font-light my-2' placeholder='Enter Quanity (In packs)' onChange={(e) => handleChange(e)} />
            </div>
            {loadingState ?

              <button
                className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Processing Delivery</button>

              : <button
                type='submit'

                className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Request For Delivery</button>}

          </div>
        </form>
      }

      <AllinOne />
    </div>

  )
}

export default Store