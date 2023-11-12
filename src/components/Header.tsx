import React from 'react';
import Image from 'next/image';

import notification from '../app/assets/icons/notification.svg';
import back from '../app/assets/icons/back.svg';

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between px-6 py-4 bg-white '>
        <div className='flex items-center'>
          <div className='relative'>
            <button className='relative z-10 block overflow-hidden rounded-full shadow focus:outline-none'>
              <Image
                className='object-cover w-full h-full'
                src={back}
                alt='back icon'
                width={10}
                height={10}
              />
            </button>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='relative p-[8px] mx-4 lg:mx-0 border rounded-lg border-[#E5E5E5]'>
            <input
              className='w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500'
              type='text'
              placeholder='Search'
            />
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='w-5 h-5 text-gray-500'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </span>
          </div>
          <div>
            <Image
              className='ml-6'
              src={notification}
              alt={'notification'}
              width={20}
              height={20}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
