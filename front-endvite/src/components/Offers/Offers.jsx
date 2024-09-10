import React from 'react'
import exclusive_image from '../assets/styleman.png'


const Offers = () => {
  return (
    <div className='offers mt-20 w-[75%] h-[55vh] flex m-auto  pt-0 pb-0 pr-[5px] pl-[40px]  mb-[50px] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] font-Poppins '>
        <div className="offers-left flex-1 flex gap-5 ml-16 flex-col justify-center ">
            <h1 className='text-slate-900 text-6xl font-semibold '>Exclusive</h1>
            <h1 className='text-slate-900 text-6xl font-semibold '>Offers For You</h1>
            <p className='text-slate-900 text-xl font-semibold '> Don’t miss out on the season's hottest picks!</p>
            <button className='w-60 h-14 border rounded-full bg-red-600 border-none text-white text-xl font-medium mt-[30px]  cursor-pointer  '>Check Now</button>
        </div>
        <div className="offers-right flex-1 flex items-center justify-end ">
            <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
