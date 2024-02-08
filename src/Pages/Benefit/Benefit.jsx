import React from 'react';
import benefit from '../../assets/Images/benifit.png'
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Benefit = () => {
    return (
        <div className='pt-[150px] bg-orange-100  pb-[100px]'>

            <div className='grid md:grid-cols-2 gap-4 '>

                {/* image-section */}
                <div>
                    <img src={benefit} alt="" />
                </div>

                {/* content-section */}
                <div className='text-start pl-6'>
<div className='px-4'>
    <p className='text-blue-400'>WHY OUR PROBLEM?</p>
    <h1 className='text-4xl font-serif text-black font-bold pt-2'>Benefits</h1>
    <p className='pt-2 text-sm text-gray-700 w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Iure quasi repudiandae quod.</p>
</div>

<div className=' grid md:grid-cols-2 items-center justify-center px-2 gap-4 pt-8 mr-[50px] text-gray-700'>
<p className='flex  justify-center gap-2 mr-14  mt-2'><IoIosArrowDropdownCircle className='text-blue-600 text-2xl ' />Lorem ipsum dolor sit.</p>
<p className='flex  justify-center gap-2 mr-14  mt-2'><IoIosArrowDropdownCircle className='text-blue-600 text-2xl ' />Lorem ipsum dolor sit.</p>
<p className='flex  justify-center gap-2 mr-14  mt-2'><IoIosArrowDropdownCircle className='text-blue-600 text-2xl ' />Lorem ipsum dolor sit.</p>
<p className='flex  justify-center gap-2 mr-14  mt-2'><IoIosArrowDropdownCircle className='text-blue-600 text-2xl ' />Lorem ipsum dolor sit.</p>
</div>

                </div>


            </div>



        </div>
    );
};

export default Benefit;