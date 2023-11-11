import React from 'react';
import Student from '../../../components/Student';

async function getData() {
  const res = await fetch('http://localhost:3000/api/students', {
    cache: 'no-store',
  });

  return res.json();
}
export default async function Page() {
  const data = await getData();
  return (
    <main>
      {data.map((c: any) => (
        <Student
          key={c.id}
          id={c.id}
          name={c.name}
          email={c.email}
          phone={c.phone}
          personalNumber={c.personal_number}
        />
      ))}
    </main>
  );
}
