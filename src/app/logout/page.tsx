'use client';

import { redirect, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const isAuthed = localStorage.getItem('isAuthed');
  if (isAuthed === 'authed') {
    localStorage.removeItem('isAuthed');
    router.push('/signin');
  }
}
