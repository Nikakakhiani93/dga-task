'use client';
import React, { useState, FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tcourse } from '@/app/types';
import Image from 'next/image';
import sort from '../app/assets/icons/sort.svg';

type FormProps = {
  course?: {
    id: number;
    course_name: string;
    course_difficulty: string;
    teacher_id: string;
    start_date: string;
    end_date: string;
  };
  click?: (e: boolean) => void;
  isEdit: boolean;
};

const defaultState = {
  course_name: '',
  course_difficulty: '',
  teacher_id: '',
  start_date: '',
  end_date: '',
};
const CourseForm: FC<FormProps> = ({ course, isEdit, click }) => {
  const router = useRouter();
  const [isOpenModel, setIsOpenModal] = useState(false);

  const [data, setData] = useState(defaultState);

  useEffect(() => {
    if (course) {
      setData(course);
    }
  }, [course]);

  useEffect(() => {
    if (isEdit) {
      console.log('ssasas');
      setIsOpenModal(true);
    }
  }, [isEdit]);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.name)
      setData({
        ...data,
        [e.currentTarget.name]: e.currentTarget.value,
      });
  };

  const save = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (
      data.course_name.length < 1 ||
      data.course_difficulty.length < 1 ||
      data.start_date.length < 1 ||
      data.end_date.length < 1
    ) {
      return;
    }

    if (click) {
      click(false);
    }
    setIsOpenModal(false);

    if (!course) {
      fetch(`http://localhost:3000/api/courses/create`, {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(() => {
        router.refresh();
      });
    } else {
      fetch(`http://localhost:3000/api/courses/update/${course.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }).then(() => {
        router.refresh();
      });
    }

    setData(defaultState);
  };

  if (!isOpenModel && isEdit) {
    return null;
  }

  return (
    <div className='px-6'>
      {!course && (
        <div className='py-[10px] w-full flex justify-between items-center  border-b-2 border-[#E5E5E5]	'>
          <h3 className='text-[22px] font-medium'>Course List</h3>
          <div className='flex align-center'>
            <Image
              className='mr-6'
              src={sort}
              alt={'sort'}
              width={15}
              height={15}
            />
            <button
              className='py-3 px-6 rounded-[8px] text-[#fff] bg-[#FEAF00]'
              onClick={() => setIsOpenModal(true)}
            >
              ADD NEW COURSE
            </button>
          </div>
        </div>
      )}

      {isOpenModel && (
        <div className='` bg-main-background z-50 flex flex-col absolute w-full h-full top-0 left-0 flex items-center justify-center`'>
          <div className='w-full p-6 relative top-[125px] bg-white rounded-md lg:max-w-md shadow-2 pt-10 pb-16 rounded-[20px]'>
            <h1 className='text-3xl font-bold text-center text-gray-700'>
              {isEdit ? 'EDIT COURSE' : 'ADD COURSE'}
            </h1>
            <form className='mt-6'>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Name
                </label>
                <input
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='course_name'
                  placeholder='course name'
                  value={data.course_name}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Name
                </label>
                <input
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='course_difficulty'
                  placeholder='course difficulty'
                  value={data.course_difficulty}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Name
                </label>
                <input
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='date'
                  name='start_date'
                  placeholder='start date'
                  value={data.start_date}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Name
                </label>
                <input
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='date'
                  name='end_date'
                  placeholder='end date'
                  value={data.end_date}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mt-2'>
                <div
                  className='w-full px-4 py-2 tracking-wide text-center text-white text-[14px] mt-6 transition-colors duration-200 transform bg-[#FEAF00] rounded-md hover:bg-gray-600 focus:outline-none '
                  onClick={(e: React.MouseEvent) => save(e)}
                >
                  {course ? 'SAVE EDIT' : 'ADD'}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseForm;
