import React from 'react';
import Course from '../../../components/Course';
import CourseForm from '@/components/CourseForm';
import { Tcourse } from '@/app/types';
import Header from '@/components/Header';

async function getData() {
  const res = await fetch('http://localhost:3000/api/courses', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <Header />
      <main>
        <CourseForm isEdit={false} />
        <div className='flex flex-col mt-8'>
          <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 '>
            <div className='inline-block min-w-full align-middle'>
              <table className='min-w-full'>
                <thead>
                  <tr className='text-[#acacac]'>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '></th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Course Name
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Level
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Instructor
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Start Date
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      End Date
                    </th>
                    <th className='px-6 py-3 '></th>
                  </tr>
                </thead>
                <tbody className='bg-[#ffffff] '>
                  {data.map((c: Tcourse) => (
                    <tr
                      className='rounded-[8px] border-8 border-t-4 border-[#F8F8F8]'
                      key={c.id}
                    >
                      <Course
                        id={c.id}
                        courseName={c.course_name}
                        courseDifficulty={c.course_difficulty}
                        teacherId={c.teacher_id}
                        starDate={c.start_date}
                        endDate={c.end_date}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
