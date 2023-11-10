'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const isAuthed = localStorage.getItem('isAuthed');
  if (isAuthed === 'authed') {
    console.log('asads');
    localStorage.removeItem('isAuthed');
    router.push('/');
  }
}
