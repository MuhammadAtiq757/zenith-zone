import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { IoGitNetwork } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";

export default function App() {


  return (
    <div className='px-8 pt-[160px] bg-gray-300 pb-[80px]'>
<div className=' px-8 pb-[50px]'>
<p className='text-sm text-blue-400'>LEARN MORE</p>
<h1 className='font-serif text-black text-4xl font-bold pt-2'>Features</h1>
<p className='w-[300px] pt-2 text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Delectus, quis odit ipsum sequi officiis numquam.</p>

</div>



    
 <div className='grid md:grid-cols-4 gap-4 items-center text-black justify-center px-8'>
 <div className='bg-gray-300 rounded-lg shadow-lg text-center  p-6'>
       <IoGitNetwork className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold pt-4'>Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>


       <div className='bg-gray-300 rounded-lg shadow-lg text-center  p-6'>
       <MdOutlineSettings className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold pt-4'> Settings</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>


       <div className='bg-gray-300 rounded-lg shadow-lg text-center  p-6'>
       <MdOutlineSystemUpdateAlt className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold pt-4'>Update</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>


       <div className='bg-gray-300 rounded-lg shadow-lg text-center  p-6'>
       <FaFlag  className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold pt-4'>Plan</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
       
 </div>
    
       

    
    </div>
  );
}
