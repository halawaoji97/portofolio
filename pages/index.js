import About from '../components/About';
import Hero from '../components/Hero';
import Line from '../components/Line';
import Project from '../components/Project';
import Tech from '../components/Tech';
import Layout from '../layout';
import ScrollToTop from '../utils/scrollToTop';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Line />
        <About />
        <Line />
        <Tech />
        <Line />
        <Project />
        <ScrollToTop />
      </Layout>
    </>
  );
}
