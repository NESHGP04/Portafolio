import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '@components/Layout';
import Hero from '@components/Hero';
import About from '@components/About';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Contact from '@components/Contact';

export default function Home() {
  const { state } = useLocation();

  // Cuando se llega desde otra página con el dock
  useEffect(() => {
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state]);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
