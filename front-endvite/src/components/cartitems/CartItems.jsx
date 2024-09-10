import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const{all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
  return (
    <div className='cartitems mt-[100px] mb-[100px] ml-[170px] mr-[170px]'>
        <div className="cartitms-format-main grid grid-cols-6 items-center gap-16 p-5 text-gray-700 text-xl font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-slate-100 border-0' />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
            <div className="cartItems-format grid grid-cols-6 items-center gap-16 p-5 text-gray-700 text-sm font-medium ">
                <img src={e.image}alt="" className='carticon-product-icon h-[62px] ' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity w-[64px] h-[50px] border border-slate-200 bg-white'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='w-[15px] ml-[40px] mr-[40px] cursor-pointer' src={remove_icon}onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
            }
            return null;

        })}
        <div className="cartitms-down flex mt-[100px] mb-[100px]" >
            <div className="cartitems-total flex flex-col flex-1 mr-[200px] gap-10">
                <h1 className='text-3xl font-semibold'>cart Totals</h1>
                <div>
                    <div className="cartitems-total-items flex justify-between pt-[15px] pb-[15px]">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item flex justify-between pt-[15px] pb-[15px]">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item flex justify-between pt-[15px] pb-[15px]">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                
                </div>
                <button className='w-[262px] h-[58px] bg-red-500 text-white text-base font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode flex-1 text-base font-medium">
                <p className='text-gray-800'>If you have a promo code, Enter it here</p>
                <div className="cartims-promobox w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#dbd8d8]">
                    <input className='border-none outline-none bg-transparent text-base w-[330px] h-[50px]' type="text" placeholder='promo code' />
                    <button className='w-[153px]  h-[58px] text-base bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItems
