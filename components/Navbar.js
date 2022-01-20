import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PhotoProfil from '../public/img/Group 36.png';
import Union from '../public/img/Union.png';
import Close from '../public/img/Close.svg';
import dataProject from '../data/data.json';

const Navbar = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    settoggleSidebar(!toggleSidebar);
  };

  return (
    <header className='bg-gradient-to-b from-dark-secondary relative to-dark-bg md:fixed rounded-br-3xl rounded-bl-3xl flex md:py-4 p-0 h-0 w-full rounded z-50 md:h-28 '>
      <div className='container flex justify-center items-center mx-auto align-items-center py-8 relative'>
        <button
          className='md:invisible bg-white flex justify-center items-center w-20 h-16 rounded-bl-3xl cursor-pointer  fixed z-10 top-0 right-0'
          onClick={handleClick}
        >
          {toggleSidebar ? (
            <Image src={Close} alt='Open' className='text-dark-bg' />
          ) : (
            <Image src={Union} alt='Close' className='text-dark-bg' />
          )}
        </button>
        <Link href='/'>
          <a className='h-12 w-12 invisible md:visible lg:visible relative'>
            <Image
              src={PhotoProfil}
              className='h-full'
              alt='Halawa Oji'
              layout='fill' // required
              objectFit='cover'
              priority
            />
          </a>
        </Link>
        <nav
          className={`${
            toggleSidebar ? 'scale-x-100' : 'scale-x-0'
          }  fixed top-0 left-0 right-0 flex  transition-tansform ease-in duration-700 origin-top-right md:scale-x-100 lg:scale-x-100 md:visible  md:flex md:static lg:static h-96 md:h-auto md:py-12 rounded-2xl md:w-1/2`}
        >
          <ul className='flex w-full md:w-full h-full md:h-auto justify-around bg-gradient-to-b from-dark-secondary  to-dark-bg md:bg-transparent md:from-transparent md:to-transparent rounded-2xl flex-col md:flex-row lg:flex-row items-center py-10'>
            {dataProject.navLink.map((item, index) => {
              return (
                <li
                  key={index}
                  className='block h-8 relative group'
                  onClick={handleClick}
                >
                  <span className='block container h-0.5 w-full bg-gradient-to-r rounded-full from-main-hue to-cyan-light absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
                  <Link href={`#${item.href}`}>
                    <a className='text-white hover:text-cyan-light active active:text-cyan-light font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'>
                      {item.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
