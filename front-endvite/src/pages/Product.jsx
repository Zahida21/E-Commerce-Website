import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import Productdisplay from '../components/Productdisplay/productdisplay'
import DescriptionBox from '../components/DiscriptionBox/DescriptionBox'
import RelatedProduct from '../components/RelatedProducts/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
const {productId}=useParams();
const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
       <Productdisplay product={product}/>
       <DescriptionBox/>
       <RelatedProduct/>
    </div>
  )
}

export default Product
