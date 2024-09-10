import React from 'react'
import navlogo from '../../assets/logo.avif'
import navprofile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between pt-3 pb-3 pr-14 pl-12 shadow-[0_1px_3px_-2px_#000] mb-1 bg-white'>
        <div className='flex items-center'>
        <img className='nav-logo w-[70px] max-800:w-[57px]' src={navlogo} alt="" />
        <div>

        
        <p className='text-slate-950 text-2xl  font-semibold ml-1 max-800:text-xl'>ShopSphere</p>
        <p className=' -mt-1 text-base text-purple-700 font-normal ml-1 max-800:text-sm'>Admin Panel</p>
        </div>
        </div>
        <img className='w-[75px] max-800:w-[63px]' src={navprofile} alt="" />
      
    </div>
  )
}

export default Navbar
