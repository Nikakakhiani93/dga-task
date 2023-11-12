'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import studentsDashboard from '../assets/icons/studentDashboard.svg';
import courceDashboard from '../assets/icons/courseDashboard.svg';
import paymentDashboard from '../assets/icons/paymentDashboard.svg';
import Header from '@/components/Header';

export default function Page({ children }: { children: React.ReactNode }) {
  const [studentLength, setStudentsLength] = useState(0);
  const [courseLength, setCourseLength] = useState(0);
  const [paymentLength, setPaymentLengh] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const students = await fetch('http://localhost:3000/api/students', {
      cache: 'no-store',
    });

    const courses = await fetch('http://localhost:3000/api/courses', {
      cache: 'no-store',
    });

    const payments = await fetch('http://localhost:3000/api/payment');

    Promise.all([students.json(), courses.json(), payments.json()]).then(
      ([st, courses, payments]) => {
        setStudentsLength(st.length);
        setCourseLength(courses.length);
        setPaymentLengh(payments.length);
      }
    );
  };

  return (
    <>
      <Header />

      <div className='relative flex flex-col justify-around px-8 overflow-hidden'>
        <div className='mt-4'>
          <div className='flex flex-wrap -mx-6'>
            <div className='w-full px-6 sm:w-1/2 xl:w-1/3 '>
              <Link href={'/dashboard/students'}>
                <div className='flex flex-col items-center bg-[#F0F9FF] px-5 py-5 bg-white rounded-md shadow-sm'>
                  <div className='w-full p-3 '>
                    <Image
                      className='mb-2'
                      src={studentsDashboard}
                      alt={'dashboard students'}
                      width={40}
                      height={40}
                    />
                    <span className='text-sm'>Students</span>
                  </div>

                  <div className='w-full text-end	mx-5'>
                    <h4 className='text-2xl font-bold text-gray-700'>
                      {studentLength}
                    </h4>
                  </div>
                </div>
              </Link>
            </div>

            <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
              <Link href={'/dashboard/courses'}>
                <div className='flex flex-col items-center bg-[#FEF6FB] px-5 py-5 bg-white rounded-md shadow-sm'>
                  <div className='w-full p-3 '>
                    <Image
                      className='mb-2'
                      src={courceDashboard}
                      alt={'dashboard students'}
                      width={25}
                      height={25}
                    />
                    <span className='text-sm'>Courses</span>
                  </div>

                  <div className='w-full text-end mx-5'>
                    <h4 className='text-2xl font-bold text-gray-700'>
                      {courseLength}
                    </h4>
                  </div>
                </div>
              </Link>
            </div>

            <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
              <Link href={'/dashboard/payment'}>
                <div className='flex flex-col items-center bg-[#FEFBEC] px-5 py-5 bg-white rounded-md shadow-sm'>
                  <div className='p-3 '>
                    <Image
                      className='mb-2'
                      src={paymentDashboard}
                      alt={'dashboard students'}
                      width={25}
                      height={25}
                    />
                    <span className='text-sm'>Payment</span>
                  </div>

                  <div className='w-full text-end mx-5'>
                    <h4 className='text-2xl font-bold text-gray-700'>
                      {paymentLength}
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
