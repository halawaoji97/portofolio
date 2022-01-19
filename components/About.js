const About = () => {
  return (
    <section class=' leading-relaxed tracking-wider flex justify-center items-center md:h-screen'>
      <div class='shadow-lg bg-gradient-to-r  from-dark-bg to-cyan-700 py-6 px-4 rounded-2xl container text-center m-6 md:w-1/2'>
        <h3 class='font-normal text-2xl md:text-3xl tracking-widest text-cyan-light'>
          ABOUT ME
        </h3>
        <p class='text-cta-bg  md:text-xl py-6 px-6 font-normal'>
          experienced in teaching people who are <br /> learning about
          programming especially <br /> the front end, <br />
          able to create time targets in working <br />
          on projects and enjoy working with a team.
          <span class='my-2 block'>
            <a class='text-sm text-tertiary-text underline' href=''>
              visit me in Superprof
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
