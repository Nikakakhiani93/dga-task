'use client';
import Image from 'next/image';
import Link from 'next/link';
// import { redirect } from 'next/navigation';
import homeIcon from '../assets/icons/home.svg';
import courseIcon from '../assets/icons/courses.svg';
import studentIcon from '../assets/icons/students.svg';
import paymentIcon from '../assets/icons/payment.svg';
import avatar from '../assets/images/profile.jpeg';
import logout from '../assets/icons/logout.svg';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const isAuthed = localStorage.getItem('isAuthed');
  // if (!isAuthed) {
  //   redirect('/signin');
  // }

  const pathname = usePathname();
  // console.log(pathname, 'pathh');
  return (
    <section className='container mx-auto px-4 flex '>
      <aside className='w-[270px] h-[900px] bg-[#f2eae1] flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l z-10'>
        <div className='flex flex-col items-center mt-20 -mx-2'>
          <Image
            className='object-cover w-24 h-24 mx-2 rounded-full'
            src={avatar}
            alt='avatar'
            width={200}
            height={200}
          />
          <h4 className='mx-2 mt-5 font-medium text-black '>Karthi Madesh</h4>
          <p className='mx-2 mt-1 text-sm text-[#FEAF00]'>Admin</p>
        </div>

        <div className='flex flex-col justify-between items-center flex-1 mt-20'>
          <nav>
            <Link
              className={`${
                pathname == '/dashboard' ? 'bg-[#feaf00]' : ''
              } flex items-center px-8 py-2 text-black rounded-lg hover:bg-[#FEAF00]  dark:hover:bg-[#FEAF00]`}
              href={'/dashboard/'}
            >
              <Image
                className='w-5 h-5'
                src={homeIcon}
                alt={'home Icon'}
                width={20}
                height={20}
              />
              <span className='ml-4'>Home</span>
            </Link>

            <Link
              className={`${
                pathname == '/dashboard/courses' ? 'bg-[#feaf00]' : ''
              } flex items-center px-8 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-[#FEAF00]  dark:hover:bg-[#FEAF00]`}
              href={'/dashboard/courses'}
            >
              <Image
                className='w-5 h-5'
                src={courseIcon}
                alt={'home Icon'}
                width={20}
                height={20}
              />
              <span className='ml-4'>Course</span>
            </Link>

            <Link
              className={`${
                pathname == '/dashboard/students' ? 'bg-[#feaf00]' : ''
              } flex items-center px-8 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-[#FEAF00]  dark:hover:bg-[#FEAF00]`}
              href={'/dashboard/students'}
            >
              <Image
                className='w-5 h-5'
                src={studentIcon}
                alt={'student Icon'}
                width={20}
                height={20}
              />
              <span className='ml-4'>Students</span>
            </Link>

            <Link
              className={`${
                pathname == '/dashboard/payment' ? 'bg-[#feaf00]' : ''
              } flex items-center px-8 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-[#FEAF00]  dark:hover:bg-[#FEAF00]`}
              href={'/dashboard/payment'}
            >
              <Image
                className='w-5 h-5'
                src={paymentIcon}
                alt={'payment Icon'}
                width={20}
                height={20}
              />
              <span className='ml-4'>Payment</span>
            </Link>
          </nav>

          <Link
            className='flex px-8 py-2 mt-5 rounded-lg hover:bg-[#FEAF00]'
            href={'/logout'}
          >
            <p>logout</p>
            <Image
              className='ml-5'
              src={logout}
              alt='log out'
              width={15}
              height={15}
            />
          </Link>
        </div>
      </aside>
      <div className='w-64'>{children}</div>
    </section>
  );
}
