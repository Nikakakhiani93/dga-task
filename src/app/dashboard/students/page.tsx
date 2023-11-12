import React from 'react';
import Student from '../../../components/Student';
import StudentForm from '../../../components/StudentForm';
import { Tstudent } from '@/app/types';
import Header from '@/components/Header';

async function getData() {
  const res = await fetch('http://localhost:3000/api/students', {
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
        <StudentForm isEdit={false} />

        <div className='flex flex-col px-6 mt-8'>
          <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 '>
            <div className='inline-block min-w-full align-middle'>
              <table className='min-w-full'>
                <thead>
                  <tr className='text-[#acacac]'>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '></th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Name
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Email
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Phone
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Personal Number
                    </th>
                    <th className='px-6 py-3 '></th>
                  </tr>
                </thead>
                <tbody className='bg-[#ffffff] '>
                  {data.map((c: Tstudent) => (
                    <tr
                      className='rounded-[8px] border-8 border-t-4 border-[#F8F8F8]'
                      key={c.id}
                    >
                      <Student
                        id={c.id}
                        name={c.name}
                        email={c.email}
                        phone={c.phone}
                        personalNumber={c.personal_number}
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
