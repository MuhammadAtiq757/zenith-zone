import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-100 px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Home</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>About</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Blog</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Contact</a></li>
      </ul>
    </div>
    <a className=" text-3xl font-serif font-bold"><small className='text-3xl font-serif font-bold text-[#4e79b9] p-3'>Zenith</small></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Home</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>About</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Blog</a></li>
      <li className='hover:bg-blue-500 hover:text-white rounded'><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <h2 className=' p-2 text-white bg-[#4e79b9] rounded'>GET STARTED</h2>
  </div>
</div>
        </div>
    );
};

export default Header;