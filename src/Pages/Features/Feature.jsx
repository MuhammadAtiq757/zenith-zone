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
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className='px-8 pt-[160px]'>
<div className=' px-8 pb-[50px]'>
<p className='text-sm text-blue-400'>LEARN MORE</p>
<h1 className='font-serif text-4xl font-semibold pt-2'>Features</h1>
<p className='w-[300px] pt-2 text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Delectus, quis odit ipsum sequi officiis numquam.</p>

</div>



      <Swiper 
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
       <div className='bg-gray-200  p-6'>
       <IoGitNetwork className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold'>Create Product Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
        </SwiperSlide>


        <SwiperSlide>
       <div className='bg-gray-200  p-6'>
       <MdOutlineSettings className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold'>Create Product Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
        </SwiperSlide>


        <SwiperSlide>
       <div className='bg-gray-200  p-6'>
       <MdOutlineSystemUpdateAlt className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold'>Create Product Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
        </SwiperSlide>


        <SwiperSlide>
       <div className='bg-gray-200  p-6'>
       <FaFlag  className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold'>Create Product Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className='bg-gray-200  p-6'>
       <IoGitNetwork className='mx-auto text-4xl text-blue-600 font-bold' />
       <h3 className='mt-2 text-xl font-serif font-semibold'>Create Product Roadmap</h3>
       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur
         adipisicing elit. Illo, quasi.</p>
         <p className='mt-4 text-blue-500 text-sm'>Learn More...</p>
       </div>
        </SwiperSlide>
       
      </Swiper>

    
    </div>
  );
}
