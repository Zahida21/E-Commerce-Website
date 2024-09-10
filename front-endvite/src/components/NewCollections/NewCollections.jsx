import React from 'react'
import { useState,useEffect } from 'react'
import Item from '../items/item'

const NewCollections = () => {

const [new_collection, setNew_collection] = useState([])
useEffect(() => {
  fetch('http://localhost:4000/newcollection').then((response)=>response.json()).then((data)=>setNew_collection(data))
}, [])

  return (
    <div className='new-collections  flex flex-col items-center gap-2 mb-[90px]  font-Poppins'>
        <h1 className='text-slate-950 text-5xl font-semibold mb-3 '>NEW COLLECTIONS</h1>
        <hr className='w-52  h-2  box-content border-black '/>
        <div className="collections grid grid-cols-4 mt-[50px] gap-8 cursor-pointer ">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
      
    </div>
  )
}

export default NewCollections
