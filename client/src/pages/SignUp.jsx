import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
  <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form className='flex flex-col gap-3'>
      <input type="text" placeholder = "username" className = 'border p-3 rounded-lg' id = 'username'></input>
      <input type="email" placeholder = "email" className = 'border p-3 rounded-lg' id = 'email'></input>
      <input type="password" placeholder = "password" className = 'border p-3 rounded-lg' id = 'password'></input>
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '>SIGN UP</button>

    </form>
    <div className='flex gap-2 mt-3'>
      <p>Have an Account?</p>
      <Link to={"/sign-in"}>
        <span className='text-red-500 hover:underline'>Sign IN</span>
      </Link>
      
      </div> 
  </div>
  
  );
}
