import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Indiebroz Studios<span className="text-brand">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-brand transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-brand text-dark-bg px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-hover transition-colors">
            Book Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-dark-border py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-brand transition-colors block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand text-dark-bg px-5 py-3 rounded-lg text-center font-bold hover:bg-brand-hover transition-colors mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Session
          </a>
        </div>
      )}
    </nav>
  );
}
