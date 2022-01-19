import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Tech from '../components/Tech';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-br from-dark-bg to-dark-secondary tracking-wider'>
      <Navbar />
      <Hero />
      <Line />
      <About />
      <Line />
      <Tech />
      <Line />
      <Project />
      <Footer />
    </div>
  );
}
