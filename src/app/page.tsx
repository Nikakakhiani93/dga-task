'use client';
import React from 'react';
import { redirect } from 'next/navigation';
export default function Page() {
  if (localStorage.getItem('isAuthed')) {
    redirect('/dashboard');
  }

  redirect('/signin');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[#F8F8F8]'></main>
  );
}
