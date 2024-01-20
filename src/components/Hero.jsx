import React from 'react'
import bgImage from '../assets/doctor.png'



const Hero = () => {

    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between pt-20 '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto font-poppins'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='lg:text-xl md:text-xl sm:text-lg'> We are a digital platform that facilitates the donation and distribution of unused prescription medications to individuals who cannot afford them, ensuring wider access to essential healthcare resources.</p>
                    <h1 className='py-3 lg:text-3xl md:text-2xl font-bold my-2'>Give HealthAid Network A Trial </h1>

                    <button className='py-3 md:w-[200px]'>Get Started</button>

                </div>
                <div>
                    <img className='w-full rounded-full' src={bgImage} alt=""  />
                </div>
        
            </div>
        </div>
    )
}

export default Hero   