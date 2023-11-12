import React from 'react';
import Student from '../../../components/Student';
import StudentForm from '../../../components/StudentForm';
import { Tstudent } from '@/app/types';
async function getData() {
  const res = await fetch('http://localhost:3000/api/payment', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div className='flex flex-col mt-8'>
        <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 '>
          <div className='inline-block min-w-full h-[740px]  overflow-y-scroll align-middle'>
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
                {data.map((c: any) => (
                  <tr
                    className='rounded-[8px] border-8 border-t-4 border-[#F8F8F8]'
                    key={c.id}
                  >
                    <td>{c.Name}</td>
                    <td>{c.Payment_Schedule}</td>
                    <td>{c.Bill_Number}</td>
                    <td>{c.Amount_Paid}</td>
                    <td>{c.Balance_amount}</td>
                    <td>{c.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
