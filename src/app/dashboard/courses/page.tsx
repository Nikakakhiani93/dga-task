import React from 'react';
import Course from '../../../components/Course';

async function getData() {
  const res = await fetch('http://localhost:3000/api/courses', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      {data.map((c: any) => (
        <Course
          key={c.id}
          id={c.id}
          courseDifficulty={c.course_difficulty}
          courseName={c.course_name}
          teacherId={c.teacher_id}
          starDate={c.start_date}
          endDate={c.end_date}
        />
      ))}
    </main>
  );
}
