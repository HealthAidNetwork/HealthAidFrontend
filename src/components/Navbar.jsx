import React, {useState} from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
import logo from '../assets/health.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) 
    return (
        <div className='h-[80px] z-10 bg-zinc-200 fixed drop-shadow-sm w-full'>
            <div className='px-2 flex justify-between items-center w-full h-full font-poppins'>
                <div className='flex items-center jus'>
                    <div className='flex items-center'> <p className='text-sm font-bold sm:text-sm'></p> <img src={logo} alt="" srcset="" width={40} /></div>
                    {/* Hidden, but on medium screen, you flex */}
                   
                </div>
                {/* When the screen is above medium(md) you flex, else hide(hidden) */}
                <ul className='hidden md:flex'>
                    <Link to="/">   <li className='text-sm hover:cursor-pointer hover:text-blue-600' >Home</li></Link>
                    <Link to="/store"> <li className='text-sm hover:cursor-pointer hover:text-blue-600'>Store</li></Link>
                    <Link to="/search"> <li className='text-sm hover:cursor-pointer hover:text-blue-600'>Search</li></Link>

                </ul>
    
                {/* Show menu button when is less than medium (md)screen  */}
                <div className='md:hidden mr-4'>

                   {!nav ?  <AiOutlineMenu className='w-5' onClick={handleClick} /> : <ImCancelCircle  size={20} onClick={handleClick}/> }

                </div>
            </div>

            <ul className={!nav ?'hidden': 'absolute bg-zinc-200 w-full px-8'}>
                <Link to="/"><li className='border-b-2 border-zinc-300 w-full text-sm hover:cursor-pointer hover:text-blue-600'>Home</li></Link>
                <Link to="/store"><li className='border-b-2 border-zinc-300 w-full text-sm hover:cursor-pointer hover:text-blue-600'>Store</li></Link>
                <Link to="/search"><li className='border-b-2 border-zinc-300 w-full text-sm hover:cursor-pointer hover:text-blue-600'>Search</li></Link>

                
                
                
            
            </ul>
        </div>

    )
}

export default Navbar
