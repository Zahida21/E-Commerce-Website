import React from 'react'
import { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const login = async () => {

    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }


  }

  const signup = async () => {

    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }

  return (
    <div className='loginsignup w-[100%] h-[100vh] bg-pink-100  pt-[80px] '>
      <div className="loginsignup-container w-[580px] h-[560px] m-auto pt-[10px] pb-[30px] pl-[60px] pr-[60px] bg-white">
        <h1 className='mt-5 text-3xl font-medium mb-5 ml-0 mr-0'>{state}</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-8 ">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} className='h-14 w-[100%] pl-5 border border-gray-300 outline-none text-gray-600 text-lg' type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='h-14 w-[100%] pl-5 border border-gray-300 outline-none text-gray-600 text-lg' type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} className='h-14 w-[100%] pl-5 border border-gray-300 outline-none text-gray-600 text-lg' type="password" placeholder='Password' />
        </div>
        <button onClick={() => { state === 'Login' ? login() : signup() }} className='cursor-pointer w-[450px] h-14 border rounded-lg text-white bg-red-500 mt-7 border-none text-2xl font-medium'>Continue</button>
        {state === "Sign Up" ? <p className="loginsignup-login mt-5 text-gray-800 text-lg font-normal ">Already Have an account? <span onClick={() => { setState("Login") }} className=' cursor-pointer text-red-500 font-semibold '>Login here</span></p> : <p className="loginsignup-login mt-5 text-gray-800 text-lg font-normal ">Create an account <span onClick={() => { setState("Sign Up") }} className=' cursor-pointer text-red-500 font-semibold '>Click here</span></p>}


        <div className="loginsignup-agree flex items-center justify-center mt-6 gap-5 text-gray-800 font-normal text-base">
          <input className='cursor-pointer' type="checkbox" name='' id='' />
          <p>By continuing, I agree to use the terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup
