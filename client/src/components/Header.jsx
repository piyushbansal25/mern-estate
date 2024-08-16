import React, { useState } from 'react'
import {FaSearch} from  "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {useSelector}  from 'react-redux';
import { useEffect } from 'react';
 

export default function Header() {
  const {currentUser} =  useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermByUrl = urlParams.get('searchTerm');
    if (searchTermByUrl) {
      setSearchTerm(searchTermByUrl);
      };
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-black'>
          DM
        </span>
        <span className='text-zinc-500'>Estate</span>
      </h1>
      </Link>
      
      <form onSubmit={handleSubmit} className='bg-slate-50 p-3 rounded-lg flex items-center'>
        <input type="text"  placeholder="Search..." className='bg-transparent  focus:outline-none w-24 sm:w-64' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button>
          <FaSearch className='text-slate-700'/>
        </button>
      </form>
      
      
      <ul className='flex gap-4'>
        <Link  to="/">
        <li className='hidden sm:inline text-black hover:underline'>Home</li>
        </Link>
        <Link to="/about">
        <li className='hidden sm:inline text-black hover:underline'>About</li>
        </Link>
        <Link to="/profile">
        { currentUser ? ( <img className = 'rounded-full h-7 w-7 object-cover ' src = {currentUser.avatar} alt = 'profile' />) : (
        <li className=' text-black hover:underline'>Sign IN</li>) }
       
 
 </Link>
        
          
      </ul>

      </div>

    </header>
  )
}
