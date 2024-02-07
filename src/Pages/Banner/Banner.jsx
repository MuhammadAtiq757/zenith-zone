import React from 'react';
import banner from '../../assets/Images/banner.png'


const Banner = () => {
    return (
        <div className='pt-16  bg-purple-300 ' >



<div className='grid md:grid-cols-2 gap-2 pb-20 px-[80px] '>

{/* content section */}
<div className='mt-[80px] w-[300px] '>
<h1 className='text-3xl text-black  font-serif font-bold w-[300px]'>Your roadmap to product management.</h1>
<p className='text-black pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 Velit reprehenderit ducimus soluta nihil magnam nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, qui.</p>

 <div className="join mt-6 w-[250px]">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="bg-gray-600 p-2 join-item ">Subscribe</button>
</div>
</div>


{/* image section */}
<div className=''>
<img className='mt-10 h-[380px]' src={banner} alt="" />

</div>


</div>


        </div>
    );
};

export default Banner;



