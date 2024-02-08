import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import profile from '../../assets/Images/profile.png'
import profile1 from '../../assets/Images/profile1.png'
import profile2 from '../../assets/Images/profile2.png'
import profile3 from '../../assets/Images/profile3.png'
import profile4 from '../../assets/Images/profile4.png'


export default function App() {
    return (
        <div className='px-[50px] pb-20 bg-purple-100 text-black'>
 
 <div>
    <h1 className='text-center text-4xl font-serif font-semibold pt-[120px] pb-[50px]'><span className='text-blue-600'>Testi</span>monials</h1>
 </div>

            

<div className='grid md:grid-cols-3 gap-8 px-4 items-center justify-center'>
<div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                        </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mrs Arriya</h1>
               </div>


               <div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto  rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                       </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mr Arriya</h1>
               </div>



               <div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                        </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mr Arriya</h1>
               </div>




               <div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                       </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mr Arriya</h1>
               </div>
               <div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                       </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mr Arriya</h1>
               </div>
               <div className='w-[285px] text-center shadow-lg p-6'>
               <div className='w-32 mx-auto rounded-full pb-2'> <img src={profile} alt="" /></div>

                    <p className='w-[250px] text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos voluptas quisquam earum tempora
                       </p>
                      
                        <h1 className='text-center pt-4 font-semibold font-serif'>Mr Arriya</h1>
               </div>
             
</div>
            
             

            
        </div>
    );
}

