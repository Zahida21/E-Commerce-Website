import React, { useContext } from 'react';
import star_icons from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Productdisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Check if product data is available
    if (!product) {
        return <div>Loading...</div>;
    }

    // Check if product properties are available
    const { image, name, old_price, new_price, id } = product;

    return (
        <div className='product_display flex ml-[110px] mr-[50px]'>
            <div className="proddisplay_left flex gap-[20px]">
                <div className="productdisplay_img_list flex flex-col gap-4 w-[100px]">
                    {image ? (
                        <>
                            <img className='h-[120px] w-auto object-cover' src={image} alt="Product" />
                            <img className='h-[120px] w-auto object-cover' src={image} alt="Product" />
                            <img className='h-[120px] w-auto object-cover' src={image} alt="Product" />
                            <img className='h-[120px] w-auto object-cover' src={image} alt="Product" />
                        </>
                    ) : (
                        <div>No images available</div>
                    )}
                </div>
                <div className="productdisplay-img flex-1">
                    {image ? (
                        <img className='productdisplay-main-img w-[1050px] h-[528px] object-fill' src={image} alt="Main Product" />
                    ) : (
                        <div>No main image available</div>
                    )}
                </div>
            </div>
            <div className="proddisplay_right ml-16 flex flex-col">
                <h1 className='text-gray-900 text-4xl font-bold'>{name || 'Product Name'}</h1>
                <div className="productdisplay_right_star flex items-center mt-3 gap-2 text-gray-950">
                    <img src={star_icons} alt="Star Icon" />
                    <img src={star_icons} alt="Star Icon" />
                    <img src={star_icons} alt="Star Icon" />
                    <img src={star_icons} alt="Star Icon" />
                    <img src={star_dull_icon} alt="Star Dull Icon" />
                    <p>{122}</p>
                </div>
                <div className="productdisplayright-prices mt-5 mb-5 gap-7 text-xl font-bold flex">
                    <div className="oldpricedisplay line-through text-gray-500">
                        ${old_price || 'N/A'}
                    </div>
                    <div className="newpricedisplay text-red-500">
                        ${new_price || 'N/A'}
                    </div>
                </div>
                <div className="productdisplayright-desc mt-4 mb-3">
                    This stylish blouse features a flattering fit and a soft, rounded neckline, perfect for any occasion. Made from high-quality, breathable fabric, it's designed for both comfort and elegance. Pair it with your favorite bottoms for a chic and polished look.
                </div>
                <div className="productdisplayright-size">
                    <h1 className='mt-7 text-gray-700 text-xl font-semibold'>Select Size</h1>
                    <div className="productdisplayright-sizes flex gap-5 mt-5 mb-5">
                        <div className="px-3 py-1 bg-gray-50 border border-gray-300 rounded-sm cursor-pointer">S</div>
                        <div className="px-3 py-1 bg-gray-50 border border-gray-300 rounded-sm cursor-pointer">M</div>
                        <div className="px-3 py-1 border bg-gray-50 border-gray-300 rounded-sm cursor-pointer">L</div>
                        <div className="px-3 py-1 border bg-gray-50 border-gray-300 rounded-sm cursor-pointer">XL</div>
                        <div className="px-3 py-1 border bg-gray-50 border-gray-300 rounded-sm cursor-pointer">XXL</div>
                    </div>
                </div>
                <button
                    className='mt-4 mb-2 px-6 py-2 w-[200px] text-base font-semibold cursor-pointer bg-red-500 text-white'
                    onClick={() => { addToCart(id) }}
                >
                    ADD TO CART
                </button>
                <p className='productdispright-category mt-3'>
                    <span className='font-semibold'>Category:</span> Women, T-Shirt, Crop Top
                </p>
                <p className='productdispright-tags mt-2'>
                    <span className='font-semibold'>Tags:</span> Modern, Latest
                </p>
            </div>
        </div>
    )
}

export default Productdisplay;
