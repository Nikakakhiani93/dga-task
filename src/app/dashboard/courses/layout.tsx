'use client';

import CourseForm from '@/components/CourseForm';

export default function CoursesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h1>Add new course</h1>
        <CourseForm />
      </div>
      {children}
    </section>
  );
}
