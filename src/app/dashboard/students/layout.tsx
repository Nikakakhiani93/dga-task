import React from 'react';
export default function StudentsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className='container mx-auto'>{children}</section>;
}
