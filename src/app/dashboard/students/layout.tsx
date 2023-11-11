'use client';

import StudentForm from '@/components/StudentForm';
import React from 'react';
export default function StudentsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h1>Add new student</h1>
        <StudentForm />
      </div>
      {children}
    </section>
  );
}
