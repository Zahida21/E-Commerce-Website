import React from 'react'
import cross_icon from '../../assets/cross_icon.png'
import { useState,useEffect } from 'react'
const ListProduct = () => {
    
    const [allproducts, setAllproducts] = useState([])

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllproducts(data)})

    }
    useEffect(() => {
        fetchInfo();
    },[] )

    const remove_product=async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

  return (
    <div className='list-product flex flex-col items-center w-[100%]  h-[740px] pt-[10px] pb-[10px] pl-[50px] pr-[50px] m-[30px] rounded-md bg-white max-800:box-border max-800:w-[95%] max-[]:h-[100%] max-800:pt-[10px] max-800:pb[10px] max-800:pl-[30px] max-800:pr-[30px] mt-[20px] mb-[20px] ml-auto mr-auto '>
      <h1 className='text-3xl font-medium pt-3 pb-3'>All Products List</h1>
      <div className="listproduct-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] pt-[20px] pb-[20px] pl-0 pr-0 text-[#454545] text-base font-semibold  max-800:pt-[15px] max-800:pb-[15px] max-800:pl-[0px] max-800:pr-0 max-800:text-[#454545] max-800:text-xs overflow-y-auto ">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts w-[100%] overflow-y-auto">
        <hr />
        {allproducts.map((product,index)=>{
                return (
                  <React.Fragment key={product.id}>  {/* Use product.id as the key */}
                      <div className="listproduct-format-main max-800:pt-[15px] max-800:pb-[15px] max-800:pl-[0px] max-800:pr-0 max-800:text-[#454545] max-800:text-xs grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] pt-[20px] pb-[20px] pl-0 pr-0 text-[#454545] text-base listproduct format items-center font-medium">
                          <img src={product.image} alt="" className="listproduct-producticon h-[80px] max-800:h-[60px]" />
                          <p>{product.name}</p>
                          <p>${product.old_price}</p>
                          <p>${product.new_price}</p>
                          <p>{product.category}</p>
                          <img onClick={() => { remove_product(product.id) }} className="listproduct-removeicon cursor-pointer m-auto" src={cross_icon} alt="" />
                      </div>
                      <hr />
                  </React.Fragment>
              );
          
           
        })}
      </div>
    </div>
  )
}

export default ListProduct
