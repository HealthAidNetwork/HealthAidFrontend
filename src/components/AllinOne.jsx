import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const AllinOne = () => {
    return (
        <div className='bg-primary w-full mt-24 font-poppins text-white'>
            <div className='max-w-[1240px] mx-auto px-2 py-4'>
                {/* <h2 className='text-5xl font-bold text-center py-3'>All-In-One Platform</h2>
                <p className='text-2xl py-8 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4'>
                    <div className='flex'>

                        <div>
                            <AiOutlineCheck className='w-6 mt-2 font-bold mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='text-sm font-bold'>Location</h3>
                            <p className='text-sm pt-2 pb-4'>1234 abc, Abuja Nigeria</p>
                            <p className='text-sm pt-2 pb-4'>1234 abc, Delhi Qatar</p>
                            <p className='text-sm pt-2 pb-4'>1234 abc, NY US</p>
                        </div>


                    </div>
                    <div className='flex'>

                        <div>
                            <AiOutlineCheck className='w-6 mt-2 font-bold mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='text-sm font-bold'>Contact</h3>
                            <p className='text-sm pt-2 pb-4'>You can reach us through our social media handles</p>
                            <p className='text-sm pt-2 pb-4'>Facebook: HealthAidNetwork</p>
                            <p className='text-sm pt-2 pb-4'>Twitter:   @HealthAidNetwork</p>
                            <p className='text-sm pt-2 pb-4'>Instagram: @HealthAidNetwork</p>
                        </div>


                    </div>
             
                    <div className='flex'>

                        <div>
                            <AiOutlineCheck className='w-6 mt-2 font-bold mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='text-sm font-bold'>Support</h3>
                            <p className='text-sm pt-2 pb-4'>HealthAidNetwork@support.com</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default AllinOne