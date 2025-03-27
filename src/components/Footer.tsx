
import { ArrowUp, Linkedin, Mail, Instagram, Youtube, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-16 px-4 md:px-6 relative bg-[#f0f0f0] text-[#2d2d2d]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Gokul HVR</h3>
            <p className="text-sm text-[#2d2d2d]/70 mb-6">
              Professional video editor and motion graphics designer
              specializing in storytelling and visual narratives.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/gokul-hvr-863227285" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:gokulhvr.social@gmail.com" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#2d2d2d]/70 hover:text-[#1d4ed8] transition-colors link-hover inline-block">Home</a>
              </li>
              <li>
                <a href="#about" className="text-[#2d2d2d]/70 hover:text-[#1d4ed8] transition-colors link-hover inline-block">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#2d2d2d]/70 hover:text-[#1d4ed8] transition-colors link-hover inline-block">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-[#2d2d2d]/70 hover:text-[#1d4ed8] transition-colors link-hover inline-block">Services</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1d4ed8] flex-shrink-0 mt-1" />
                <span className="text-[#2d2d2d]/70">
                  #83, Annai Marya Nagar, Madhana kuppam, Korattur, Chennai -600 099.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#1d4ed8] flex-shrink-0 mt-1" />
                <span className="text-[#2d2d2d]/70">+91 99401 65935</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#1d4ed8] flex-shrink-0 mt-1" />
                <a href="mailto:gokulhvr.social@gmail.com" className="text-[#2d2d2d]/70 hover:text-[#2d2d2d] transition-colors duration-300">
                  gokulhvr.social@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[#2d2d2d]/50">
            &copy; {currentYear} Gokul HVR. All rights reserved.
          </p>
          
          <button onClick={scrollToTop} className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
