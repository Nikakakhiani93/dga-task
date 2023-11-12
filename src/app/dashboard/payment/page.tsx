import React from 'react';

import { Tpayment } from '@/app/types';
import Header from '@/components/Header';
async function getData() {
  const res = await fetch('http://localhost:3000/api/payment', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data, 'data');
  return (
    <>
      <Header />
      <main>
        <div className='flex flex-col mt-8'>
          <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 '>
            <div className='inline-block min-w-full h-[740px]  overflow-y-scroll align-middle'>
              <table className='min-w-full'>
                <thead>
                  <tr className='text-[#acacac]'>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Name
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Payment Schedule
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Bill Number
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase '>
                      Amount Paid
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase'>
                      Balance amount
                    </th>
                    <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase'>
                      Date{' '}
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-[#ffffff] '>
                  {data.map((c: Tpayment) => (
                    <tr
                      className='rounded-[8px] border-8 border-t-4 border-[#F8F8F8]'
                      key={c.id}
                    >
                      <td className='px-6 py-4'>{c.Name}</td>
                      <td className='px-6 py-4'>{c.Payment_Schedule}</td>
                      <td className='px-6 py-4'>{c.Bill_Number}</td>
                      <td className='px-6 py-4'>{c.Amount_Paid}</td>
                      <td className='px-6 py-4'>{c.Balance_amount}</td>
                      <td className='px-6 py-4'>{c.Date}</td>
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
