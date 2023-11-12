'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [studentLength, setStudentsLength] = useState(0);
  const [courseLength, setCourseLength] = useState(0);

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

    Promise.all([students.json(), courses.json()]).then(([st, courses]) => {
      setStudentsLength(st.length);
      setCourseLength(courses.length);
    });
  };

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden'>
      <h1>Dashboard</h1>
      <div>{studentLength}</div>
      <div>{courseLength}</div>
    </div>
  );
}
