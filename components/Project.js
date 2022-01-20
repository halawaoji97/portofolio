import dataProject from '../data/data.json';
import Link from 'next/link';

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
          {dataProject.project.map((item, index) => {
            return (
              <div
                key={index}
                data-aos='zoom-in'
                data-aos-duration={index * 700}
                data-aos-easing='ease-in'
                data-aos-mirror='true'
                data-aos-once='false'
                className='shadow-lg bg-gradient-to-r group  from-dark-bg to-cyan-700 rounded-2xl transition-all origin-left duration-700 ease-out '
              >
                <div className='rounded-2xl  relative'>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className='h-full w-full rounded-2xl relative'
                  />
                </div>
                <div
                  data-aos='slide-right'
                  data-aos-duration={index * 700}
                  data-aos-easing='ease-in'
                  data-aos-mirror='true'
                  data-aos-once='false'
                  className='bg-gradient-to-r from-dark-bg to-cyan-700 rounded-bl-2xl  rounded-tr-2xl  text-center w-48  absolute top-0 right-0 group-hover:hidden'
                >
                  <h6 className='text-cyan-light text-xl py-2'>{item.name}</h6>
                </div>
                <div className='bg-gradient-to-r from-dark-bg to-cyan-700 rounded-2xl  text-center flex justify-center items-center flex-col shadow-lg absolute top-0 right-0 bottom-0 left-0 w-full px-12 py-0 scale-y-0 group-hover:scale-y-100 transition-tansform ease-in duration-700 origin-top opacity-0 group-hover:opacity-100'>
                  <h6 className='text-cyan-light uppercase text-xl py-2'>
                    {item.name}
                  </h6>
                  <p className='text-cta-bg  md:text-l pb-6  font-normal '>
                    {item.description}
                  </p>
                  <Link href={item.linkWesbsite}>
                    <a
                      target='_blank'
                      className='bg-gradient-to-r from-main-hue to-cyan-light transition-all ease-in duration-0 hover:duration-700 hover:animate-pulse hover:from-cyan-light hover:to-main-hue text-white rounded-full py-3 px-12 md:ml-6 font-medium'
                    >
                      Visit
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
