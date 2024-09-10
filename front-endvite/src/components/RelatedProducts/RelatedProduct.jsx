import React from 'react'
import Item from '../items/item'
import { useEffect, useState } from 'react'

const RelatedProduct = () => {
  const [relatedproducts, setRelatedproducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/relateditem')
      .then((response) => response.json())
      .then((data) => setRelatedproducts(data));
  }, [])

  return (
    <div className='relatedproducts flex flex-col items-center gap-3 h-[90vh]'>
      <h1 className='text-gray-950 text-4xl font-semibold'>Related Products</h1>
      <hr className='w-[200px] h-[6px] border rounded-sm bg-gray-900' />
      <div className="relatedproduct-item mt-[50px] flex gap-7">
        {relatedproducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
