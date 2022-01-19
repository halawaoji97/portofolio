import Project1 from '../public/img/Oji bakery.png';
import Project2 from '../public/img/garos.png';
import Project3 from '../public/img/Shoot.png';
import Image from 'next/image';

const Project = () => {
  return (
    <section
      data-aos='fade'
      data-aos-offset='200'
      data-aos-delay='50'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
      data-aos-mirror='true'
      data-aos-once='false'
      data-aos-anchor-placement='center'
      id='project'
      className='md:h-screen justify-center items-center flex'
    >
      <div className='container mx-auto px-6 md:px-0'>
        <h3 className='font-normal text-2xl md:text-3xl tracking-widest text-cyan-light text-center my-4 md:my-0'>
          PROJECT
        </h3>
        <div className='grid my-12 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center'>
          <div
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='shadow-lg bg-gradient-to-r  from-dark-bg to-cyan-700 rounded-2xl relative'
          >
            <div className='rounded-2xl relative'>
              {/* <img src='../src/img/Oji bakery.png' alt='' className='rounded-2xl' /> */}
              <Image
                src={Project1}
                alt='Project 1 | Oji Bakery'
                className='h-full w-full'
              />
            </div>
            <div className='bg-gradient-to-r  from-dark-bg to-cyan-700 rounded-bl-2xl hover:rounded-2xl rounded-tr-2xl absolute  text-center hover:w-full w-48 hover:h-full top-0 hover:bottom-0 hover:left-0 right-0 flex justify-center gap-4 items-center'>
              <h6 className='text-cyan-light text-xl py-2'>Oji Bakery</h6>
            </div>
          </div>

          <div
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='bg-grey-primary rounded-2xl relative'
          >
            <div className='rounded-2xl relative'>
              <Image
                src={Project2}
                alt='Project 2 | Garos'
                className='h-full w-full rounded-2xl'
              />
            </div>
            <div className='bg-gradient-to-r  from-dark-bg to-cyan-700 rounded-bl-2xl hover:rounded-2xl rounded-tr-2xl absolute  text-center hover:w-full w-48 hover:h-full top-0 hover:bottom-0 hover:left-0 right-0 flex justify-center gap-4 items-center'>
              <h6 className='text-white text-xl py-2'>Garos</h6>
            </div>
          </div>

          <div
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='bg-grey-primary rounded-2xl relative'
          >
            <div className='rounded-2xl relative'>
              <Image
                src={Project3}
                alt='Project 3 | Watch Movies'
                className='h-full w-full rounded-2xl'
              />
            </div>
            <div className='bg-gradient-to-r  from-dark-bg to-cyan-700 rounded-bl-2xl hover:rounded-2xl rounded-tr-2xl absolute  text-center hover:w-full w-48 hover:h-full top-0 hover:bottom-0 hover:left-0 right-0 flex justify-center gap-4 items-center'>
              <h6 className='text-white text-xl py-2'>Watch Movie</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
