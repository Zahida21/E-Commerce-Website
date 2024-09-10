import React from 'react'

const Newsletter = () => {
  return (
    <div className='Newsletter w-[75%] h-[40vh] flex flex-col items-center justify-center m-auto font-Poppins  pb-12 pt-0 pr-[130px] pl-[130px]  bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] gap-8 p-12'>
      <h1 className='text-slate-800 text-4xl font-semibold mt-16'>Unlock Exclusive Offers in Your Inbox!</h1>
      <p className='text-slate-800 text-lg'>Be the First to Know About Our Exclusive Sales by Subscribing to our newsletter</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border-slate-300'>
        <input className='w-[730px] ml-7 border-none outline-none text-slate-700 font-Poppins text-base' type="email" placeholder='Your Email id' />
        <button className='w-40 h-12 bg-black text-white rounded-full text-base cursor-pointer '>Subscibe</button>
      </div>
    </div>

  )
}

export default Newsletter
