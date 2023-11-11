'use client';

import React, { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = async () => {
    const data = {
      email,
      password,
    };
    const request = await fetch(`http://localhost:3000/api/sign-in`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const response = await request.json();

    if (response.message === 'User logged in') {
      localStorage.setItem('isAuthed', 'authed');
      // redirect('/dashboard');
      router.push('/dashboard');
    } else {
      localStorage.removeItem('isAuthed');
    }
  };

  return (
    <div className='bg-main-background relative main flex flex-col items-center justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 bg-white rounded-md lg:max-w-md shadow-2 pt-28 pb-16 rounded-[20px]'>
        <h1 className='text-3xl font-bold text-center text-gray-700'>
          Sign In
        </h1>
        <p className='flex justify-center text-[14px] text-[#6C6C6C] mt-3 pb-6'>
          {' '}
          Enter your credentials to access your account
        </p>
        <form className='mt-6'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-[#6C6C6C]'
            >
              Email
            </label>
            <input
              id='email'
              placeholder='Ender your email'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2 mt-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-[#6C6C6C]'
            >
              Password
            </label>
            <input
              id='password'
              placeholder='Ender your password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>

          <div className='mt-2'>
            <button
              className='w-full px-4 py-2 tracking-wide text-white text-[14px] mt-6 transition-colors duration-200 transform bg-[#FEAF00] rounded-md hover:bg-gray-600 focus:outline-none '
              onClick={(e) => {
                e.preventDefault();
                auth();
              }}
            >
              SIGN IN
            </button>
          </div>
        </form>

        <p className='mt-4 text-sm text-center text-gray-700'>
          Forgot your password ?{' '}
          <Link
            href='/forget'
            className='text-xs text-[#FEAF00] hover:underline'
          >
            Resset Password
          </Link>
        </p>
      </div>
    </div>
  );
}
