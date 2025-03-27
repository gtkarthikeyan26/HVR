
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import ThreeCanvas from '@/components/ThreeCanvas';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  // Smooth fade-in animation on page load and theme initialization
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Preload critical resources
    const preloadImages = [
      '/lovable-uploads/753fa809-8201-47b9-9e23-5c43711539f7.png',
      '/lovable-uploads/c161bbd7-8160-44d4-a9da-b01128873093.png',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <PageTransition>
      <CustomCursor />
      <ThreeCanvas />
      <Navbar />
      <main className="min-h-screen overflow-hidden dark:bg-[#0a192f]">
        <Hero />
        <Portfolio />
        <About />
        <Services />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
