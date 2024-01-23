import React, { useState } from 'react'
import Navbar from '../Navbar'
import AllinOne from '../AllinOne'
import axios from 'axios';
import { serverUrl } from '../..';
import { data } from 'autoprefixer';
import { toast } from 'react-toastify';

const Search = () => {

  const [loadingState, setLoadingState] = useState(false)
  const [formData, setFormData] = useState({
    image: "",
    email: "",
    address: "",
    phonenumber: "",
    quantity: "",
    country: "",
    data: ""

  });
  const [reqData, setReqData] = useState(null)

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleProcessImage = async (e) => {
    e.preventDefault()
    if (!formData?.image || formData?.image === "" || formData?.email === null || "") return null
    setLoadingState(true)


    try {
      const res = await axios.post(`${serverUrl}/uploads/${formData?.email}`, formData, { headers: { "content-type": "multipart/form-data" } })


      if (res.status === 200 || 201) {
        setReqData(res.data?.processed_data)
        setFormData({ ...formData, data: res.data?.processed_data })
        setLoadingState(false)

      }
    } catch (error) {
      setLoadingState(false)

    }

  }

  const handleDelivery = async (e) => {
    e.preventDefault()
    if (!formData?.country || formData?.address === "" || formData?.phonenumber === null || "") return null
    setLoadingState(true)


    try {
      setFormData({ ...formData, data: reqData })
      const res = await axios.post(`${serverUrl}/delivery`, formData, { headers: { "content-type": "multipart/form-data" } })
      if (res.status === 200 || 201) {
        setLoadingState(false)
        toast.success("Your delivery has been qeued successfully")

      }
    } catch (error) {
      console.log(error);
      setLoadingState(false)

    }

  }




  return (

    <div className='h-screen w-full'>
      <Navbar />
      {!reqData ?
        <form action="" onSubmit={handleProcessImage}>

          <div className='px-10 pt-20 font-poppins'>

            <div className='mt-10 font-poppins'>
              <p>Upload the image of the medication you want to request for alongside your email address</p>
              {formData.image ? (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Event Preview"
                    className="w-full h-1/2"
                  />
                </div>
              ) : (
                <p className="text-gray-400 mt-2">No image selected</p>
              )}

              <input type="file" name="image" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' onChange={(e) => handleImageChange(e)} />

              <input type="text" name="email" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' placeholder='Email address' onChange={(e) => handleChange(e)} />
            </div>
            {loadingState ?

              <button
                className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Processing Image</button>

              : <button
                type='submit'

                className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Process</button>}

          </div>
        </form>

        :
        <form action="" className=' pt-28 px-10' onSubmit={handleDelivery}>
          <div className='w-full'>
            <p className='font-poppins my-2 font-semibold'>Is this the medication you searched for ?</p>
            <div className='flex justify-between'>
              <textarea name="res" id="" cols="30" rows="20" value={reqData} className='border my-2 mx-auto text-sm w-full p-4 marker:font-poppins' disabled></textarea>
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

export default Search