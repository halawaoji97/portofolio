import Image from 'next/image';
import PhotoProfil from '../public/img/profil_photo-removebg-preview.png';
import DownloadIcon from '../public/img/download_icon.svg';

const Hero = () => {
  const Mailto = ({ email, subject = '', body = '', children, className }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
      <a
        target='_blank'
        href={`mailto:${email}${params}`}
        className={className}
      >
        {children}
      </a>
    );
  };

  return (
    <section className=' md:py-32 lg:py-32  rounded-br-3xl rounded-bl-3xl'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center md:justify-between items-center py-10'>
        <div
          data-aos='fade'
          data-aos-duration='1000'
          data-aos-easing='ease-in'
          data-aos-mirror='true'
          data-aos-once='false'
          className='bg-gradient-to-r from-dark-bg to-cyan-700  mx-auto md:order-1 hover:bg-grey-primary rounded-full w-60 h-60 md:w-80 md:h-80  lg:h-96 lg:w-96 shadow-lg  relative'
        >
          <Image
            data-aos='fade-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            src={PhotoProfil}
            alt='Halawa Oji'
            className='p-2'
            layout='fill'
          />
        </div>
        <div className='text-center md:text-left py-7 md:px-16'>
          <h1
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='text-4xl md:text-6xl py-4 font-bold bg-clip-text text-transparent bg-gradient-to-l from-cyan-light to-main-hue'
          >
            hello, I'M OJI
          </h1>

          <span
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className=' font-normal text-2xl md:text-3xl tracking-widest
              bg-clip-text text-transparent bg-gradient-to-l from-cyan-light to-main-hue'
          >
            Front End Developer
          </span>

          <p
            data-aos='fade-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='py-6 text-cta-bg font-normal leading-relaxed md:text-xl'
          >
            Knack of building web applications <br />
            with front end skill based the <br />
            design mockup
          </p>

          <div
            data-aos='fade-in'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            className='flex gap-4 justify-center md:items-stretch md:justify-start mt-12 md:mt-16'
          >
            <a
              href='https://drive.google.com/file/d/1uLhenQ9OXqLtee0SSe10C-y7DOvJ9YnW/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-cta-bg hover:bg-accent-bg flex items-center gap-1 text-sm rounded-full py-3 px-10 text-dark-bg font-medium transition-all ease-in duration-0 hover:duration-300 hover:animate-pulse'
            >
              <Image className='inline' src={DownloadIcon} alt='dowload cv' />
              <span>CV</span>
            </a>
            <Mailto
              className='bg-gradient-to-r from-main-hue to-cyan-light transition-all ease-in duration-0 hover:duration-700 hover:animate-pulse hover:from-cyan-light hover:to-main-hue text-white rounded-full py-3 px-12 md:ml-6 font-medium'
              email='ozidhalawa97@gmail.com'
              subject='Hiring'
              body='Hi Oji,'
            >
              Hire me!
            </Mailto>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
