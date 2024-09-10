import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item'

const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category '>
        <img className='block mt-[30px] mb-[30px] ml-auto mr-auto w-[82%] '  src={props.banner}alt="" />
        <div className="shopcategory-indexSort flex mb-0 mt-0 ml-36 mr-32 justify-between items-center ">
          <p>
            <span className='font-semibold '>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcatogory-sort pt-2 pb-2 pr-5 pl-5 border flex items-center cursor-pointer border-[#888] rounded-full">
            Sort by  <img className=' ml-1.5 h-2' src={dropdown_icon} alt="" />
          </div>
        </div>
      <div className="shopCatagory-Product mt-5 mb-5 ml-36 mr-36 grid grid-cols-4 gap-14">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center mt-[110px] mb-[110px] mr-auto ml-auto w-56 h-16 border rounded-3xl bg-[#ededed] text-gray-600 font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
