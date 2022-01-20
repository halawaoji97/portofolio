import React from 'react';

const ScrollToBottom = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return <div></div>;
};

export default ScrollToBottom;
