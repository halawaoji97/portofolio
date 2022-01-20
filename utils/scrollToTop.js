import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className='fixed bottom-0 right-0 h-24 w-24 cursor-pointer'>
        {isVisible && (
          <FaAngleUp
            className='text-cyan-light fixed  m-6 bottom-0 right-0 cursor-pointer h-24 w-24'
            onClick={scrollToTop}
            size={48}
          />
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
