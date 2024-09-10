import React, { useState, useContext } from 'react';
import logo from '../assets/logo.avif';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  
  const { gettotalCartItems } = useContext(ShopContext);

  return (
    <div className='flex justify-between items-center p-6 shadow-sm bg-white'>
      {/* Logo Section */}
      <div className="nav-logo flex items-center ml-12">
        <img className='h-12 md:h-16' src={logo} alt="ShopSphere Logo" />
        <p className='text-slate-950 text-2xl md:text-3xl font-semibold ml-3'>ShopSphere</p>
      </div>

      
      

      {/* Desktop Navigation Links */}
      <ul className='hidden md:flex items-center list-none gap-8 lg:gap-16 text-slate-800  font-medium'>
        <li className='flex flex-col items-center cursor-pointer' onClick={() => setMenu("shop")}>
          <Link className='text-[21px]' to='/'>Shop</Link>
          {menu === "shop" && <hr className='w-[80%] h-[3px] bg-red-600' />}
        </li>
        <li className='flex flex-col items-center cursor-pointer ' onClick={() => setMenu("mens")}>
          <Link className='text-2xl'  to='/mens'>Men</Link>
          {menu === "mens" && <hr className='w-[80%] h-[3px] bg-red-600' />}
        </li>
        <li className='flex flex-col items-center cursor-pointer' onClick={() => setMenu("womens")}>
          <Link className='text-2xl' to='/womens'>Women</Link>
          {menu === "womens" && <hr className='w-[80%] h-[3px] bg-red-600' />}
        </li>
        <li className='flex flex-col items-center cursor-pointer' onClick={() => setMenu("kids")}>
          <Link className='text-2xl' to='/kids'>Kids</Link>
          {menu === "kids" && <hr className='w-[80%] h-[3px] bg-red-600' />}
        </li>
      </ul>

      {/* Desktop Login and Cart Section */}
      <div className=' flex items-center gap-12 mr-24' >
        {localStorage.getItem('auth-token')
        ?<button className='w-24 md:w-32 h-10 md:h-12 border rounded-full border-gray-600 text-gray-800 text-sm md:text-base font-medium bg-white cursor-pointer active:bg-gray-50'  onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>: <Link to='/login'>
          <button className='w-24 md:w-32 h-10 md:h-12 border rounded-full border-gray-600 text-gray-800 text-sm md:text-base font-medium bg-white cursor-pointer active:bg-gray-50'>
            Login
          </button>
        </Link>}
       
        <div className="relative flex items-center">
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart Icon" className='h-6 md:h-8' />
          </Link>
          <div className="cart_count absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-5 h-5 flex justify-center items-center border rounded-full text-xs md:text-sm bg-red-500 text-white">
            {gettotalCartItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
