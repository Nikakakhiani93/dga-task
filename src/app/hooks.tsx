import { redirect } from 'next/navigation';

export const useRedirect = (path: string) => {
  redirect;
};

export const isGuest = () => localStorage.getItem('isAuthed');
