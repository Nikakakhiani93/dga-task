'use client';

import React, { useState, FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import sort from '../app/assets/icons/sort.svg';

type StudentProps = {
  student?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    personal_number: string;
  };
  click?: (e: boolean) => void;
  isEdit: boolean;
};

const defaultState = {
  name: '',
  email: '',
  phone: '',
  personal_number: '',
};
const StudentForm: FC<StudentProps> = ({ student, isEdit, click }) => {
  const router = useRouter();
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    if (student) {
      console.log(student, 'studeent');
      setData({
        ...student,
      });
    }
  }, [student]);

  useEffect(() => {
    if (isEdit) {
      setIsOpenModal(true);
    }
  }, [isEdit]);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.name) {
      setData({
        ...data,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const save = async (e: React.MouseEvent) => {
    if (
      data.name.length < 1 ||
      data.email.length < 1 ||
      data.phone.length < 1 ||
      data.personal_number.length < 1
    ) {
      return;
    }

    if (click) {
      click(false);
    }
    setIsOpenModal(false);
    if (!student) {
      fetch(`http://localhost:3000/api/students/create`, {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(() => {
        router.refresh();
      });
    } else {
      fetch(`http://localhost:3000/api/students/update/${student.id}`, {
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
      {!student && (
        <div className='py-[10px] w-full flex justify-between items-center  border-b-2 border-[#E5E5E5]	'>
          <h3 className='text-[22px] font-medium'>Students List</h3>
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
              onClick={() => setIsOpenModal(!isOpenModel)}
            >
              ADD NEW STUDENT
            </button>
          </div>
        </div>
      )}

      {isOpenModel && (
        <div className='` bg-main-background z-50 flex flex-col absolute w-full h-full top-0 left-0 flex items-center justify-center`'>
          <div className='w-full p-6 relative top-[125px] bg-white rounded-md lg:max-w-md shadow-2 pt-10 pb-16 rounded-[20px]'>
            <h1 className='text-3xl font-bold text-center text-gray-700'>
              {isEdit ? 'EDIT STUDENT' : 'ADD STUDENT'}
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
                  id='name'
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='name'
                  placeholder='name'
                  value={data.name}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-2 mt-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Email
                </label>
                <input
                  id='email'
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='email'
                  placeholder='email'
                  value={data.email}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-2 mt-6'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Phone
                </label>
                <input
                  id='phone'
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='phone'
                  placeholder='phone'
                  value={data.phone}
                  onChange={(e) => updateForm(e)}
                />
              </div>
              <div className='mb-2 mt-6'>
                <label
                  htmlFor='personalNumber'
                  className='block text-sm font-medium text-[#6C6C6C]'
                >
                  Personal Number
                </label>
                <input
                  id='personalNumber'
                  className='placeholder: text-[12px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  type='text'
                  name='personal_number'
                  placeholder='personal number'
                  value={data.personal_number}
                  onChange={(e) => updateForm(e)}
                />
              </div>

              <div className='mt-2'>
                <div
                  className='w-full px-4 py-2 tracking-wide text-center text-white text-[14px] mt-6 transition-colors duration-200 transform bg-[#FEAF00] rounded-md hover:bg-gray-600 focus:outline-none '
                  onClick={(e: React.MouseEvent) => save(e)}
                >
                  {student ? 'SAVE EDIT' : 'ADD'}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
