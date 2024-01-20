import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const Pricing = () => {
    return (
        <div className='w-full text-white my-24'>
            <div className='w-full h-[800px] absolute mix-blend-overlay bg-slate-900'></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-slate-200 text-center py-8'>
                    <h2 className='text-3xl uppercase py-8'>Pricing</h2>
                    <h2 className='text-5xl font-bold text-white py-8'>The right price fo your research</h2>
                    <p className='text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-2xl shadow-2xl relative'>
                        <span className='py-1 px-3 text-[20px] rounded-2xl bg-indigo-200 text-sm text-white'>STANDARD</span>
                        <div>
                            <p className='text-6xl py-4 font-bold'>$49<span className='text-2xl'>/mo</span> </p>
                        </div>
                        <p className='text-xl py-8 text-slate-500'>Lorem Ipsum is simply dummy text of the printing</p>
                        <div className='text-2xl '>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <button className='w-full py-2 text-lg bg-indigo-600 text-white my-8'>Get started</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-2xl shadow-2xl relative'>
                        <span className='py-1 px-3 text-[20px] rounded-2xl bg-indigo-200 text-sm text-white'>STANDARD</span>
                        <div>
                            <p className='text-6xl py-4 font-bold'>$49<span className='text-2xl'>/mo</span> </p>
                        </div>
                        <p className='text-xl py-8 text-slate-500'>Lorem Ipsum is simply dummy text of the printing</p>
                        <div className='text-2xl '>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <p className='flex'><AiOutlineCheck className='w-r text-green-600 mr-4' />  Lorem, Ipsum dolor</p>
                            <button className='w-full py-2 text-lg bg-indigo-600 text-white my-8'>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing