import React, { useEffect, useState } from 'react';
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { PiPlantBold } from "react-icons/pi";



const Offer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'datas.json'
          );
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log(data.list.slice(0, 5));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);





    return (
        <div className='pt-[40px] bg-gray-700 pb-[80px]'>


            <div>


                <div className='text-center  '>
                    <p className='text-blue-500 font-bold'>What We Do?</p>
                    <h1 className='text-4xl  font-serif font-semibold pt-2'>Our Offer</h1>
                    <p className='pt-4 text-white px-4 text-center mx-auto w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, consequatur. Aspernatur temporibus officiis quae aperiam!</p>

                </div>


                <div className='  grid md:grid-cols-3 gap-2 mx-auto px-8 ml-16 pt-24'>
                    <div className='w-[250px] p-4 rounded-lg broder border-1 hover:text-white  bg-gray-100 shadow-lg border-y-2 border-blue-400 hover:bg-gray-500'>
                        <MdOutlineChromeReaderMode className='mx-auto text-5xl  mb-4 text-blue-600' />
                        <h1 className='text-1xl font-serif font-semibold text-black'>Learn</h1>
                        <p className='font-extralight text-gray-600 pt-2 '>Lorem, ipsum dolor sit amet  consectetur  adipisicing elit.Voluptatem, quibusdam.</p>
                    </div>


                    <div className='w-[250px] p-4 rounded-lg broder border-1  bg-gray-100 shadow-lg border-y-2 border-blue-400 hover:bg-gray-500'>
                        <FaPenToSquare className='mx-auto text-5xl mb-4  text-blue-600' />
                        <h1 className='text-1xl font-serif font-semibold text-black'>Practice</h1>
                        <p className='font-extralight text-gray-600 pt-2'>Lorem, ipsum dolor sit amet  consectetur  adipisicing elit. Voluptatem, quibusdam.</p>
                    </div>


                    <div className='w-[250px] p-4 rounded-lg broder border-1  bg-gray-100 shadow-lg border-y-2 border-blue-400 hover:bg-gray-500'>
                        <PiPlantBold className='mx-auto text-5xl mb-4  text-blue-600' />
                        <h1 className='text-1xl font-serif font-semibold text-black'>Grow</h1>
                        <p className='font-extralight text-gray-600 pt-2'>Lorem, ipsum dolor sit amet  consectetur  adipisicing elit. Voluptatem, quibusdam.</p>
                    </div>
                   

                </div>


            </div>



        </div>
    );
};

export default Offer;