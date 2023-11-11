'use client';

import React, { FC, useState } from 'react';
import { Tstudent } from '@/app/types';
import { useRouter } from 'next/navigation';
import StudentForm from './StudentForm';

const Student: FC<Tstudent> = ({ id, name, email, phone, personalNumber }) => {
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

      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{personalNumber}</p>
        <div onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? 'CLOSE EDIT' : 'EDIT'}
        </div>
        <div onClick={() => handleDelete(id)}>DELETE</div>
      </div>
    </>
  );
};

export default Student;
