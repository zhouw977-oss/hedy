import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-paper min-h-screen selection:bg-white selection:text-black text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-paper/80 border-b border-white/5">
        <a href="#" className="text-xl font-display font-bold tracking-tighter text-white">
          ALEX.
        </a>
        
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-white/70">
          <a href="#about" className="hover:text-white transition-colors">Info</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-paper z-30 flex flex-col items-center justify-center gap-8 text-white"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display font-bold">Info</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display font-bold">Work</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display font-bold">Contact</a>
        </motion.div>
      )}

      <main>
        <Hero />
        <About />
        <WorkGrid />
        <Contact />
      </main>
    </div>
  );
}
