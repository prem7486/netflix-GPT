import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
 const [isSignInForm, setisSignInForm] = useState(true)
  const toggleBtn = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Background"/>
      </div>
      <form className='w-4/12 absolute py-16 px-20 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl py-2 my-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>}
        <input type="text" placeholder='Email Addres' className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>
        <input type="password" placeholder='Password' className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>
        <button className='py-5 my-4 w-full bg-red-600 rounded-lg border'>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p>{isSignInForm ? "New to Netflix?" : "User exits!"} <span onClick={toggleBtn}>{isSignInForm ? "Sign up" : "Sign in"}</span> here.</p>
      </form>
    </div>
  )
}

export default Login;

