import Image from 'next/image';
import {
  FaFigma,
  FaJs,
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Tech = () => {
  return (
    <section
      data-aos='fade'
      data-aos-offset='200'
      data-aos-delay='50'
      data-aos-duration='1000'
      id='tech'
      className=' leading-relaxed tracking-wider flex justify-center items-center md:h-screen'
    >
      <div className='shadow-lg bg-gradient-to-r  from-dark-bg to-cyan-700 py-6 px-4 rounded-2xl container text-center m-6 md:w-1/2'>
        <h3 className='font-normal text-2xl md:text-3xl tracking-widest text-cyan-light'>
          TECHNOLOGIES
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 px-10 md:px-12'>
          <div className='col-span-1'>
            <div
              className='flex items-center my-4'
              data-aos='fade-right'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaHtml5 size={32} />
              </span>
              <p className='font-medium text-cta-bg'>HTML</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-right'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4 relative'>
                <FaCss3 size={32} />
              </span>
              <p className='font-medium text-cta-bg'>CSS</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-right'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaJs size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Javascript</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-right'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaBootstrap size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Bootstrap</p>
            </div>
          </div>

          <div className='md:justify-self-end'>
            <div
              className='flex items-center my-4'
              data-aos='fade-left'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <SiTailwindcss size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Tailwindcss</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-left'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaFigma size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Figma</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-left'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaReact size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Reactjs</p>
            </div>
            <div
              className='flex items-center my-4'
              data-aos='fade-left'
              data-aos-duration='700'
            >
              <span className='text-cyan-light rounded-full transition-all ease-in duration-800 hover:animate-bounce bg-dark-bg flex justify-center items-center border-2 h-14 w-14 border-cyan-light  mr-4'>
                <FaGithub size={32} />
              </span>
              <p className='font-medium text-cta-bg'>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
