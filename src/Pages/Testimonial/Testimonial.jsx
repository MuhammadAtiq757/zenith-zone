import React, { useState, useEffect } from 'react';
import profile from '../../assets/Images/profile.png';

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setShowMore(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Your card data
  const cardData = [
    { name: 'Mrs Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    { name: 'Mr Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    { name: 'Mrs Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    { name: 'Mr Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    { name: 'Mrs Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    { name: 'Mr Arriya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas quisquam earum tempora' },
    // Add more data as needed
  ];

  return (
    <div className='px-[50px] pb-20 bg-gray-100 text-black'>
      <div>
        <h1 className='text-center text-4xl font-serif font-semibold pt-[70px] pb-[50px]'>
          <span className='text-blue-600'>Testimonials</span>
        </h1>
      </div>

      <div className='grid md:grid-cols-3 gap-8 px-4 items-center justify-center'>
        {/* Render all cards or only three/six cards based on the showMore state */}
        {cardData.slice(0, showMore ? 3 : 6).map((item, index) => (
          <div key={index} className='w-[285px] text-center shadow-lg p-6'>
            <div className='w-32 mx-auto rounded-full pb-2'>
              {' '}
              <img src={profile} alt='' />
            </div>
            <p className='w-[250px] text-sm font-thin'>{item.description}</p>
            <h1 className='text-center pt-4 font-semibold font-serif'>{item.name}</h1>
          </div>
        ))}
      </div>

      {/* Render "Show More" button only on mobile devices */}
      {isMobile && (
        <div className='text-center mt-4'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
            onClick={toggleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}
