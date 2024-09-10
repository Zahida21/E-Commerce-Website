import React from 'react';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    // Default breadcrumb text
    const defaultCategory = "Women";
    const defaultName = "Elegant Luxe Long Sleeve Top";

    return (
        <div className='breadcrum flex items-center gap-2 text-gray-800 text-lg font-semibold mt-[50px] mb-[50px] ml-[110px] mr-[50px] capitalize'>
            HOME <img src={arrow_icon} alt="" /> 
            SHOP <img src={arrow_icon} alt=""/> 
            {product ? product.category : defaultCategory} 
            <img src={arrow_icon} alt=""/> 
            {product ? product.name : defaultName}
        </div>
    );
};

export default Breadcrum;
