import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Tech from '../components/Tech';
import Layout from '../layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Line />
      <About />
      <Line />
      <Tech />
      <Line />
      <Project />
    </Layout>
  );
}
