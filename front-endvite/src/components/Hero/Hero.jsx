import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero from '../assets/hero_bg.png'
const Hero = () => {
  return (
    
    

    <div className='hero h-[70vh] flex bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] font-Poppins'>
        <div className="hero-left flex flex-col justify-center gap-[20px] pl-[150px] leading-snug  ">
        <h2 className='text-slate-950 text-5xl font-bold w-[90vh] font-Poppins '>World of style at your fingertips</h2>
        <div>
            <div className='flex  items-center gap-4'>
                
                
            </div>
                <p className='text-slate-800 text-xl font-medium p-5 pl-0'>“Welcome to ShopSphere, your ultimate destination for fashion-forward attire! Whether you’re refreshing your wardrobe or shopping for the whole family, our extensive range of men’s, women’s, and kids’ garments has something for everyone.</p>
                
            <div className="latest-button flex justify-center items-center gap-4 w-72 h-14 border rounded-full mt-7 bg-red-500 text-white text-xl font-medium">
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        </div>
        <div className="hero-right  flex h-[100%] w-[2000px] items-center  justify-center">
            <img className='' src={hero} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
