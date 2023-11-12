'use client';

import React, { FC, useState } from 'react';
import { Tstudent } from '@/app/types';
import { useRouter } from 'next/navigation';
import StudentForm from './StudentForm';
import Image from 'next/image';
import avatar from '../app/assets/images/profile.jpeg';
import edit from '../app/assets/icons/pen.svg';
import remove from '../app/assets/icons/trash.svg';

interface IStudent {
  id: number;
  name: string;
  email: string;
  phone: string;
  personalNumber: string;
}

const Student: FC<IStudent> = ({ id, name, email, phone, personalNumber }) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const handleDelete = async (studentID: number) => {
    fetch(`http://localhost:3000/api/students/delete/${studentID}`, {
      method: 'DELETE',
    }).then(() => {
      router.refresh();
    });
  };

  return (
    <>
      {showEdit && (
        <StudentForm
          student={{
            id: id,
            name: name,
            email: email,
            phone: phone,
            personal_number: personalNumber,
          }}
        />
      )}

      <td className='px-6 py-4 '>
        <div className='flex-shrink-0 w-20 h-20'>
          <Image
            className='w-20 h-20 rounded-[8px]'
            src={avatar}
            alt='avatar'
            width={500}
            height={500}
          />
        </div>
      </td>

      <td className='px-6 py-4 '>
        <div className='flex items-center'>
          <div>
            <div className='text-sm font-medium leading-5 text-gray-900'>
              {name}
            </div>
          </div>
        </div>
      </td>

      <td className='px-6 py-4 '>
        <div className='text-sm leading-5 text-gray-500'>{email}</div>
      </td>

      <td className='px-6 py-4 '>
        <span className='inline-flex px-2 text-xs font-semibold leading-5 '>
          {phone}
        </span>
      </td>

      <td className='px-6 py-4 text-sm leading-5 text-gray-500 '>
        {personalNumber}
      </td>

      <td className='px-6 py-4 text-sm font-medium leading-5 text-right '>
        <a
          href='#'
          className='flex text-indigo-600 hover:text-indigo-900'
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? (
            <Image src={edit} alt='edit' width={20} height={20} />
          ) : (
            <Image src={edit} alt='edit' width={20} height={20} />
          )}

          <Image
            onClick={() => handleDelete(id)}
            className='ml-6'
            src={remove}
            alt='edit'
            width={20}
            height={20}
          />
        </a>
      </td>
    </>
  );
};

export default Student;
