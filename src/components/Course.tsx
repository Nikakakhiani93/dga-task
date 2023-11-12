'use client';
import React, { FC, useState } from 'react';
import { Tcourse } from '@/app/types';
import { useRouter } from 'next/navigation';
import CourseForm from './CourseForm';
import Image from 'next/image';
import avatar from '../app/assets/images/profile.jpeg';
import edit from '../app/assets/icons/pen.svg';
import remove from '../app/assets/icons/trash.svg';

interface ICourse {
  id: number;
  courseName: string;
  courseDifficulty: string;
  teacherId: string;
  starDate: string;
  endDate: string;
}

const Course: FC<ICourse> = ({
  id,
  courseName,
  courseDifficulty,
  teacherId,
  starDate,
  endDate,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();

  const handleDelete = async (courseID: number) => {
    fetch(`http://localhost:3000/api/courses/delete/${courseID}`, {
      method: 'DELETE',
    }).then(() => {
      setShowEdit(false);

      router.refresh();
    });
  };

  const handleEditClick = () => {
    setShowEdit(false);
  };

  return (
    <>
      {showEdit && (
        <CourseForm
          click={() => handleEditClick()}
          course={{
            id: id,
            course_name: courseName,
            course_difficulty: courseDifficulty,
            teacher_id: teacherId,
            start_date: starDate,
            end_date: endDate,
          }}
          isEdit={true}
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
              {courseName}
            </div>
          </div>
        </div>
      </td>

      <td className='px-6 py-4 '>
        <div className='text-sm leading-5 text-gray-500'>
          {courseDifficulty}
        </div>
      </td>

      <td className='px-6 py-4 '>
        <span className='inline-flex px-2 text-xs font-semibold leading-5 '>
          {teacherId}
        </span>
      </td>

      <td className='px-6 py-4 text-sm leading-5 text-gray-500 '>{starDate}</td>

      <td className='px-6 py-4 text-sm leading-5 text-gray-500 '>{endDate}</td>

      <td className='px-6 py-4 text-sm font-medium leading-5 text-right '>
        <p
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
        </p>
      </td>
    </>
  );
};

export default Course;
