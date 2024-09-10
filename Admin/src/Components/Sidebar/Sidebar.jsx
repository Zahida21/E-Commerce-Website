import React from 'react'
import { Link } from 'react-router-dom'
import addproduct_icon from '../../assets/Product_Cart.svg'
import listproduct_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col pt-[30px] gap-5 w-[100%] max-w-[250px] h-[100vh] bg-white max-800:pt-[30px] max-800:pb-[30px] max-800:pl-0 max-800:pr-0 max-800:flex-row max-800:w-[100%] max-800:max-w-[none] max-800:h-auto max-800:justify-center '>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
    <div className="sidebar-item flex items-center justify-center mt-0 mb-0 mr-[20px] ml-[20px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border rounded-md bg-[#f6f6f6] gap-5 cursor-pointer  max-800:m-0">
        <img src={addproduct_icon} alt="" />
       <p>Add Product</p>
    </div>
    </Link>
    <Link to={'/listproduct'} style={{textDecoration:"none"}}>
    <div className="sidebar-item flex items-center justify-center mt-0 mb-0 mr-[20px] ml-[20px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border rounded-md bg-[#f6f6f6] gap-5 cursor-pointer max-800:m-0">
        <img src={listproduct_icon} alt="" />
       <p>Product List</p>
    </div>
    </Link>
    
    </div>
  )
}

export default Sidebar
