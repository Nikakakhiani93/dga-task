'use client';

import React, { useState, FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type StFormProps = {
  student?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    personal_number: string;
  };
};
const StudentForm: FC<StFormProps> = ({ student }) => {
  const router = useRouter();

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
    <div>
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
    </div>
  );
};

export default StudentForm;
