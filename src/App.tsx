import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;