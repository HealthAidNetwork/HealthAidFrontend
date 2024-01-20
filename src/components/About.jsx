import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32 font-poppins'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-3xl md:text-lg sm: text-[25px] sm:px-8 font-bold'>We look forward to making the world a better place</h2>
                    <p className='text-lg py-6 text-gray-500'> Young and Impactful.</p>
                </div>
                <di className="grid  md:grid-cols-3 gap-1 px-2 text-center">
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-5xl font-bold text-indigo-400'>100%</p>
                        <p className='text-gray-400 mt-2'>Impactful Donation</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-5xl font-bold text-indigo-400' >24/7</p>
                        <p className='text-gray-400 mt-2'>Digital Accessibility</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-5xl font-bold text-indigo-400'> 100%</p>
                        <p className='text-gray-400 mt-2'>Healthcare Equality</p>
                    </div>
                </di>
            </div>
        </div>
    )
}

export default About  