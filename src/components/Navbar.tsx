
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll position for navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className={cn(
        "mx-auto container px-4 md:px-6 flex items-center justify-between",
        isScrolled ? "glass-light dark:glass-dark" : "",
        isScrolled ? "rounded-full py-2 my-2 max-w-6xl" : ""
      )}>
        <a 
          href="#home" 
          className="text-xl font-semibold tracking-tight transition-opacity duration-200 hover:opacity-70"
        >
          GOKUL<span className="text-[#1d4ed8] dark:text-[#64ffda]">HVR</span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full glass-light dark:glass-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-[#0a192f] pt-24 px-6 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="absolute top-6 right-6">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full glass-light dark:glass-dark"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xl font-medium animate-fade-in"
              onClick={handleLinkClick}
              style={{ animationDelay: `${navLinks.indexOf(link) * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
