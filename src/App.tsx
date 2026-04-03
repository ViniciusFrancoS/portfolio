import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stack from './components/Stack/Stack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <footer className="footer-minimal">
        <div className="container footer-content">
          <p>Vinicius Franco © {new Date().getFullYear()}</p>
          <p className="footer-mono">Desenvolvedor Full Stack</p>
        </div>
      </footer>
    </>
  );
}

export default App;
