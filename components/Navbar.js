import Image from 'next/image';
import Link from 'next/link';
import PhotoProfil from '../public/img/Group 36.png';
import Union from '../public/img/Union.png';

const Navbar = () => {
  return (
    <header className='bg-gradient-to-b from-dark-secondary to-dark-bg fixed rounded-br-3xl rounded-bl-3xl flex py-4 h-64 w-full rounded z-50 md:h-28 '>
      <div className='container flex justify-center items-center mx-auto align-items-center py-8'>
        <div className='md:invisible bg-white flex justify-center items-center w-20 h-16 rounded-bl-3xl cursor-pointer fixed z-10 top-0 right-0'>
          <Image src={Union} alt='menu' className='text-dark-bg' />
        </div>
        <div className='brand h-12 w-12 invisible md:visible lg:visible relative'>
          <Image
            src={PhotoProfil}
            className='h-full'
            alt=''
            layout='fill' // required
            objectFit='cover'
          />
        </div>
        <nav className='absolute md:static lg:static h-full py-12 border-2 rounded-2xl w-full md:w-1/2 md:border-none'>
          <ul className='flex w-96 md:w-full h-full justify-around flex-col md:flex-row lg:flex-row  items-center'>
            <li className='block px-1'>
              <Link href='/'>
                <a className='text-white hover:text-cyan-light active:text-cyan-light font-bold md:font-semibold lg:font-semibold  transition-all ease-in delay-75'>
                  Home
                </a>
              </Link>
            </li>
            <li className='block px-1'>
              <Link href='#about' data-aos-anchor='#about'>
                <a className='text-white hover:text-cyan-light active:text-cyan-light font-bold md:font-semibold lg:font-semibold  transition-all ease-in delay-75'>
                  About
                </a>
              </Link>
            </li>
            <li className='block px-2'>
              <Link href='#tech'>
                <a
                  href='#tech'
                  className='text-white hover:text-cyan-light active:text-cyan-light font-bold md:font-semibold lg:font-semibold  transition ease-in delay-75'
                >
                  Technology
                </a>
              </Link>
            </li>
            <li className='block px-2'>
              <Link href='#project'>
                <a
                  href='#project'
                  className='text-white hover:text-cyan-light active:text-cyan-light font-bold md:font-semibold lg:font-semibold  transition ease-in delay-75'
                >
                  Project
                </a>
              </Link>
            </li>
            <li className='block px-2'>
              <Link href='#contact'>
                <a
                  href='#contact'
                  className='text-white hover:text-cyan-light active:text-cyan-light font-bold md:font-semibold lg:font-semibold  transition ease-in delay-75'
                >
                  Contact Me
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
