import React from 'react'
import supportImage from '../assets/support.jpg'
import { BiPhone } from 'react-icons/bi'
import { HiGlobeAlt } from 'react-icons/hi'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Support = () => {
    return (
        <div className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImage} alt="" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative '>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Support</h2>
                    <p className='text-5xl font-bold py-6 text-center'>Findind the right team</p>
                    <p className='py-4 text-3xl text-slate-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16  px-4 pt-12 sm:pt-12 text-black'>
                    <div className='bg-white rounded-xl shadow-xl '>
                        <div className='p-8'>

                            <BiPhone className='bg-indigo-500 w-16 h-16  text-white rounded-lg py-3 mt-[-4rem]' />

                            <h3 className='text-2xl font-bold my-6'>Impactful Donation</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex text-[15px] font-bold text-indigo-600'>Contact Us <AiOutlineArrowRight className='ml-2 mt-1' />  </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl '>
                        <div className='p-8'>

                            <BiPhone className='bg-indigo-500 w-16 h-16  text-white rounded-lg py-3 mt-[-4rem]' />

                            <h3 className='text-2xl font-bold my-6'>Digital accessibility</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex text-[15px] font-bold text-indigo-600'>Contact Us <AiOutlineArrowRight className='ml-2 mt-1' />  </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl '>
                        <div className='p-8'>

                            <HiGlobeAlt className='bg-indigo-500 w-16 h-16  text-white rounded-lg py-3 mt-[-4rem]' />

                            <h3 className='text-2xl font-bold my-6'>Healthcare Equality</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex text-[15px] font-bold text-indigo-600'>Contact Us <AiOutlineArrowRight className='ml-2 mt-1' />  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support 