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
};
const StudentForm: FC<StudentProps> = ({ student }) => {
  const router = useRouter();
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    personal_number: '',
  });

  useEffect(() => {
    if (student) {
      setData({
        ...student,
      });
    }
  }, [student]);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.name) {
      setData({
        ...data,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const save = async () => {
    if (
      data.name.length < 1 ||
      data.email.length < 1 ||
      data.phone.length < 1 ||
      data.personal_number.length < 1
    ) {
      return;
    }

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
  };

  return (
    <div className='px-6'>
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
      {isOpenModel && (
        <div>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={data.name}
            onChange={(e) => updateForm(e)}
          />
          <input
            type='text'
            name='email'
            placeholder='email'
            value={data.email}
            onChange={(e) => updateForm(e)}
          />
          <input
            type='text'
            name='phone'
            placeholder='phone'
            value={data.phone}
            onChange={(e) => updateForm(e)}
          />
          <input
            type='text'
            name='personal_number'
            placeholder='personal number'
            value={data.personal_number}
            onChange={(e) => updateForm(e)}
          />
          <div onClick={() => save()}>{student ? 'SAVE EDIT' : 'ADD'}</div>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
