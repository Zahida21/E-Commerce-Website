import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item  w-[330px] hover:scale-105 duration-500'>
     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='ml-1.5'>{props.name}</p>
        <div className='item-prices flex gap-4 ml-1.5'>
            <div className="item-price-new text-slate-950 text-lg font-semibold">
                ${props.new_price}
            </div>
            <div className="item-price-old  text-slate-600 text-lg font-medium line-through">
                ${props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
