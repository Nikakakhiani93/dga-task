'use client';
import React, { useState, FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tcourse } from '@/app/types';

type FormProps = {
  course?: {
    id: number;
    course_name: string;
    course_difficulty: string;
    teacher_id: string;
    start_date: string;
    end_date: string;
  };
};

const CourseForm: FC<FormProps> = ({ course }) => {
  const router = useRouter();

  const [data, setData] = useState({
    course_name: '',
    course_difficulty: '',
    teacher_id: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    if (course) {
      setData(course);
    }
  }, [course]);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.name)
      setData({
        ...data,
        [e.currentTarget.name]: e.currentTarget.value,
      });
  };

  const save = async () => {
    if (
      data.course_name.length < 1 ||
      data.course_difficulty.length < 1 ||
      data.start_date.length < 1 ||
      data.end_date.length < 1
    ) {
      return;
    }

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
  };

  return (
    <div>
      <input
        type='text'
        name='course_name'
        placeholder='course name'
        value={data.course_name}
        onChange={(e) => updateForm(e)}
      />
      <input
        type='text'
        name='course_difficulty'
        placeholder='course difficulty'
        value={data.course_difficulty}
        onChange={(e) => updateForm(e)}
      />
      <input
        type='date'
        name='start_date'
        placeholder='start date'
        value={data.start_date}
        onChange={(e) => updateForm(e)}
      />
      <input
        type='date'
        name='end_date'
        placeholder='end date'
        value={data.end_date}
        onChange={(e) => updateForm(e)}
      />
      <div onClick={() => save()}>{course ? 'SAVE EDIT' : 'ADD'}</div>
    </div>
  );
};

export default React.memo(CourseForm);