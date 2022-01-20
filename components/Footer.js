import Link from 'next/link';
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id='contact'
      className='mt-12 relative left-0 bottom-0 right-0 bg-gradient-to-b from-dark-secondary to-dark-bg  rounded-t-2xl rounded-r-2xl'
    >
      <div className='container mx-auto'>
        <h3 className='font-normal text-2xl md:text-3xl tracking-widest text-cyan-light text-center py-6 md:my-0'>
          CONTACT ME
        </h3>
      </div>
      <div className='flex justify-around w-64 md:w-96 mx-auto items-center py-6'>
        <Link href='https://id.linkedin.com/in/ooziduhu-halawa-a64340207'>
          <a
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            target='_blank'
            className='text-cyan-light rounded-full bg-dark-bg flex justify-center items-center border-2 h-10 w-10 border-cyan-light  mr-4'
          >
            <FaLinkedin size={24} />
          </a>
        </Link>
        <Link href='https://www.instagram.com/halawa_oji'>
          <a
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            target='_blank'
            className='text-cyan-light rounded-full bg-dark-bg flex justify-center items-center border-2 h-10 w-10 border-cyan-light  mr-4'
          >
            <FaInstagram size={24} />
          </a>
        </Link>
        <Link href='mailto:ozidhalawa97@gmail.com'>
          <a
            data-aos='fade-left'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            target='_blank'
            className='text-cyan-light rounded-full bg-dark-bg flex justify-center items-center border-2 h-10 w-10 border-cyan-light  mr-4'
          >
            <FaEnvelope size={24} />
          </a>
        </Link>
        <Link href='https://www.facebook.com/ozid.halawa'>
          <a
            data-aos='fade-left'
            data-aos-duration='700'
            data-aos-easing='ease-in'
            data-aos-mirror='true'
            data-aos-once='false'
            target='_blank'
            className='text-cyan-light rounded-full bg-dark-bg flex justify-center items-center border-2 h-10 w-10 border-cyan-light  mr-4'
          >
            <FaFacebookF size={24} />
          </a>
        </Link>
      </div>
      <p className='copyright text-sm py-12 text-center text-cta-bg font-normal'>
        Copyright &copy; 2022 | built by Oji
      </p>
    </footer>
  );
};

export default Footer;
