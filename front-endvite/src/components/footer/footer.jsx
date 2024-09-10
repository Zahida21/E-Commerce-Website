import React from 'react'
import footer_logo from '../assets/logo.avif'
import insta from '../assets/instagram_icon.png'
import pinterst from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-12 '>
        <div className="footerlogo flex items-center gap-1 ">
            <img className='h-20'src={footer_logo} alt="" />
            <p className='text-slate-700 text-4xl font-bold'>ShopSphere</p>
        </div>
        <ul className="footerlinks flex list-none gap-12 text-slate-700 text-xl ">
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
      <div className="footer-social-icons flex gap-5">
        <div className="footer-container p-[10px] pb-[6px] bg-slate-50 border-[#ebebeb] cursor-pointer">
            <img src={insta}alt="" />
        </div>
        <div className="footer-container  p-[10px] pb-[6px] bg-slate-50 border-[#ebebeb] cursor-pointer">
            <img src={pinterst}alt="" />
        </div>
        <div className="footer-container  p-[10px] pb-[6px] bg-slate-50 border-[#ebebeb] cursor-pointer">
            <img src={whatsapp}alt="" />
        </div>
      </div>
      <div className="footer-copywrite flex flex-col items-center gap-7 w-[100%] mb-[30px] text-[#1a1a1a] text-xl ">
        <hr className='w-[80%] border-none rounded-xl h-[3px] bg-[#c7c7c7]' />
        <p>Copyright &copy; 2024 - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
