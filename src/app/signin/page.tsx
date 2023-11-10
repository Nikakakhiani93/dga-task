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
    <div className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl'>
        <h1 className='text-3xl font-bold text-center text-gray-700'>
          Sign In
        </h1>
        <p className='text-dimgray'>
          {' '}
          Enter your credentials to access your account
        </p>
        <form className='mt-6'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-gray-800'
            >
              Email
            </label>
            <input
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='password'
              className='block text-sm font-semibold text-gray-800'
            >
              Password
            </label>
            <input
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>

          <div className='mt-2'>
            <button
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
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
            className='text-xs text-blue-600 hover:underline'
          >
            Resset Password
          </Link>
        </p>
      </div>
    </div>
  );
}
