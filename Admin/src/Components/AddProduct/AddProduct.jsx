import React, { useState } from 'react'
import uploadarea from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image,setimage] = useState(false);
    const [productDetail, setProductDetail] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler=(e)=>{
        setimage(e.target.files[0]);
    }

    const changeHandler=(e)=>{
        setProductDetail({...productDetail,[e.target.name]:e.target.value})
    }

    const Add_Product = async()=>{
        console.log(productDetail);
        let responseData;
        let product = productDetail;

        let formData=new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image =responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                   'Content-Type':'application/json',

                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
            
        }
        
    }

    return (
        <div className='addproduct box-border w-[100%] max-w-[800px] pt-[30px] pb-[30px] pr-[50px] pl-[50px] mt-[20px] mb-[20px] ml-[30px] mr-[30px] rounded-md bg-white max-800:w-auto max-800:p-[30px] max-800:m-[20px] '>
            <div className="addproduct-itemfield w-[100%] text-[#575656] text-base   pt-[15px] pb-[15px] ">
                <p className='mb-2'>Product title</p>
                <input value={productDetail.name} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded pl-[15px] border border-slate-500 outline-none text-[#575656] font-poppins text-sm' type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price flex gap-[40px]">
                <div className="addproduct-itemfield w-[100%] text-[#575656] text-base   pt-[15px] pb-[15px]  ">
                    <p className='mb-2'>Price</p>
                    <input value={productDetail.old_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded pl-[15px] border border-slate-500 outline-none text-[#575656] font-poppins text-sm' type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield w-[100%] text-[#575656] text-base   pt-[15px] pb-[15px]">
                    <p className='mb-2'>Offer Price</p>
                    <input value={productDetail.new_price} onChange={changeHandler} className='box-border w-[100%] h-[50px] rounded pl-[15px] border border-slate-500 outline-none text-[#575656] font-poppins text-sm' type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield w-[100%] text-[#575656] text-base    pt-[15px] pb-[15px]">
                <p className='mt-2 mb-2 ml-0 mr-0'> Product Category</p>
                <select value={productDetail.category} onChange={changeHandler} name="category" className='addproduct-selector p-[10px] w-[100px] h-[50px] text-sm text-[#575656] border border-slate-500 rounded '>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield w-[100%] text-[#575656] text-base  pb-[10px] ">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):uploadarea} className='thumbnailimage h-[120px] w-[120px] rounded-xl object-contain mt-[10px] mb-[10px] ml-0 mr-0' />
                </label>
                <input onChange={imageHandler} className='box-border w-[100%] h-[50px] rounded pl-[15px] border border-slate-500 outline-none text-[#575656] font-poppins text-sm' type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{Add_Product()}} className='add-productbutton mt-[20px] w-[160px] h-[50px] rounded-md bg-[#6079ff] border-none cursor-pointer text-white text-base font-medium'>Add</button>
        </div>
    )
}

export default AddProduct
