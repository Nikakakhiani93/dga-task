import CourseForm from '@/components/CourseForm';
export default function CoursesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className='container mx-auto'>{children}</section>;
}
