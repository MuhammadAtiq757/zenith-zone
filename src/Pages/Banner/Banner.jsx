import React from 'react';
import banner from '../../assets/Images/banner.png'


const Banner = () => {
    return (
        <div className='pt-16'>



<div className='grid md:grid-cols-2 gap-2  px-[60px]'>

{/* content section */}
<div className='mt-[80px] w-[300px] '>
<h1 className='text-3xl font-serif font-semibold '>Your roadmap to product management.</h1>
<p className='text-gray-600 pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 Velit reprehenderit ducimus soluta nihil magnam nulla?</p>

 <div className="join mt-6 "> 

  <input className="input input-bordered join-item w-[180px]"  placeholder="Email"/>
  <button className="join-item  p-2 text-white bg-[#4e79b9] ">Subscribe</button>
</div>
</div>


{/* image section */}
<div>
<img className='mt-10' src={banner} alt="" />

</div>


</div>


        </div>
    );
};

export default Banner;