'use client';
import { redirect, useRouter } from 'next/navigation';

export default function Page() {
  localStorage.removeItem('isAuthed');
  redirect('/signin');
}
