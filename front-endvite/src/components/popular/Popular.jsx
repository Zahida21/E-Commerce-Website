import React from 'react'
import { useState,useEffect } from 'react'
import Item from '../items/item'


const Popular = () => {
const [popularProducts, setPopularProducts] = useState([])

useEffect(() => {
fetch('http://localhost:4000/popularinwomen').then((response)=>response.json()).then((data)=>setPopularProducts(data));
}, [])

  return (
    <div className='popular flex flex-col items-center gap-2 h-[90vh] '>
      <h1 className='text-slate-950 text-5xl font-semibold font-Poppins mt-5 mb-3'>Top Trending Women's Styles!</h1>
      <hr className= 'w-56  h-2  box-content border-black'  />
      <div className="popular-item mt-12 flex gap-8 cursor-pointer">
        {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
