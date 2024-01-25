import React, { useState } from 'react'
import Navbar from '../Navbar'
import AllinOne from '../AllinOne'
import axios from 'axios';
import { serverUrl } from '../..';
import { toast } from 'react-toastify';
import { data } from 'autoprefixer';

const Search = () => {

  const [loadingState, setLoadingState] = useState(false)
  const [uploadLoadingState, setUploadLoadingState] = useState(false)

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
  const [reqData, setReqData] = useState(null)

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleProcessImage = async (e) => {
    setLoadingState(true)
    e.preventDefault()
    if (!formData?.image || formData?.image === "" || formData?.email === null || "") return null


    try {
      const res = await axios.post(`${serverUrl}/uploads/${formData?.email}`, formData, { headers: { "content-type": "multipart/form-data" } })


      if (res.status === 200 || 201) {
        setReqData(res.data?.processed_data)
        setFormData({ ...formData, data: res.data?.processed_data })
        setLoadingState(false)

      }
    } catch (error) {
      console.log(error, 'ERRPR');
      setLoadingState(false)

    }

  }

  const handleUploadToStore = async (e) => {
    setUploadLoadingState(true)
    e.preventDefault()
    if (!formData?.image || formData?.image === "" || formData?.email === null || "") return null


    try {
      const res = await axios.post(`${serverUrl}/store`, formData, { headers: { "content-type": "multipart/form-data" } })


      if (res.status === 200 || 201) {
        setUploadLoadingState(false)
        toast.success('Item uploaded to store successfully')


      }
    } catch (error) {
      console.log(error, 'ERRPR');
      setUploadLoadingState(false)
      toast.warning("Item upload failed")

    }

  }







  return (

    <div className='h-screen w-full'>
      <Navbar />

      <form action="" >

        <div className='px-10 pt-20 font-poppins'>

          <div className='mt-10 font-poppins'>
            <p>Upload the image of the medication you want to add to our store, alongside your email address</p>
          <div className='lg:flex lg:space-x-4'>
              {reqData && <div className=''>
                <textarea name="data" id="" cols="30" rows="20" value={formData?.data} className='border mt-2 mx-auto text-sm w-full p-4 marker:font-poppins' onChange={(e) => handleChange(e)}></textarea>
              </div>}
              {formData.image ? (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    className="h-3/2 lg:w-1/2 sm:w-full"
                  />
                </div>
              ) : (
                <p className="text-gray-400 mt-2">No image selected</p>
              )}

          </div>
            <input type="file" name="image" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' onChange={(e) => handleImageChange(e)} />
            <p classname='my-2'>Medication Expiration Date</p>
            <input type="date" name="expiration" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' onChange={(e) => handleChange(e)} />

            <input type="text" name="email" id="" className=' font-light w-full border-blue-500 my-2  border rounded-md px-2 py-4' placeholder='Email address' onChange={(e) => handleChange(e)} />
          </div>
          {loadingState && !reqData ?

            <button
              className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Processing Image... Please wait</button>

            :
            ""
          }
          {!loadingState && reqData === null &&

            <button
              onClick={(e) => handleProcessImage(e)}

              className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'>Process Image</button>
          }

          {reqData && !uploadLoadingState && <button

            onClick={(e) => handleUploadToStore(e)}

            className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'
          >Verify the description above and upload to store

          </button>

          }
          {
            uploadLoadingState && <button

              className='px-4 py-2 rounded-sm bg-blue-500 w-full mt-4'
            >Uploading ...

            </button>
          }

        </div>
      </form>











      <AllinOne />
    </div>

  )
}

export default Search