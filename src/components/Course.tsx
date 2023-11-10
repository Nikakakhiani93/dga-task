'use client';
import React, { FC, useState } from 'react';
import { Tcourse } from '@/app/types';
import { useRouter } from 'next/navigation';
import CourseForm from './CourseForm';

const Course: FC<Tcourse> = ({
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
      router.refresh();
    });
  };

  return (
    <>
      {showEdit && (
        <CourseForm
          course={{
            id: id,
            course_name: courseName,
            course_difficulty: courseDifficulty,
            teacher_id: teacherId.toString(),
            start_date: starDate,
            end_date: endDate,
          }}
        />
      )}
      <div>
        <p>{courseName}</p>
        <p>{courseDifficulty}</p>
        <p>{teacherId}</p>
        <p>{starDate}</p>
        <p>{endDate}</p>
        <div onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? 'CLOSE EDIT' : 'EDIT'}
        </div>
        <div onClick={() => handleDelete(id)}>DELETE</div>
      </div>
    </>
  );
};

export default Course;
