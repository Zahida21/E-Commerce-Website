import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descbox mt-[100px] mb-[100px] mr-[110px] ml-[110px] '>
        <div className="descboxnavigator flex ">
            <div className="descboxnavbox flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-gray-300">Description</div>
            <div className="descboxnavbox fade flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-gray-300 bg-gray-50 text-gray-700">Reviews (122)</div>
        </div>
      <div className="decbox-desc flex flex-col gap-6 border border-gray-300 p-[45px] pb-[70px] mt-2 ">
        <p>Shopsphere is an e-commerce website that facilitates seamless online shopping, specializing in a wide range of men's wear, women's wear, and kids' wear. It has gained immense popularity due to its curated selection of high-quality fashion products, competitive pricing, and user-friendly interface. With a commitment to customer satisfaction, Shopsphere ensures that every shopping experience is convenient, reliable, and enjoyable, making it the go-to destination for stylish and quality apparel.</p>
        <p>
        Shopsphere offers a curated selection of men's wear, women's wear, and kids' wear, presented with detailed descriptions, high-quality images, and clear pricing. Each product page provides all the necessary information at a glance, making it easy to find and choose the perfect items. With an intuitive interface, Shopsphere ensures a smooth and enjoyable shopping experience, helping you discover fashion that fits your style.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
