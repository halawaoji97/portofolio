const About = () => {
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
      id='about'
      className='about leading-relaxed tracking-wider flex justify-center items-center md:h-screen'
    >
      <div className='shadow-lg bg-gradient-to-r  from-dark-bg to-cyan-700 py-6 px-4 rounded-2xl container text-center m-6 md:w-1/2'>
        <h3 className='font-normal text-2xl md:text-3xl tracking-widest text-cyan-light'>
          ABOUT ME
        </h3>
        <p
          className='text-cta-bg  md:text-xl py-6 px-6 font-normal'
          data-aos='zoom-in'
          data-aos-duration='700'
          data-aos-easing='ease-in'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          experienced in teaching people who are <br /> learning about
          programming especially <br /> the front end, <br />
          able to create time targets in working <br />
          on projects and enjoy working with a team.
          <span className='my-2 block'>
            <a className='text-sm text-tertiary-text underline' href=''>
              visit me in Superprof
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
