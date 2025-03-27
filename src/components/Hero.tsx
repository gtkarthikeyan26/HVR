import { ArrowDownCircle } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-[#f0f0f0] to-transparent dark:from-[#64ffda]/5 dark:to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center animate-fade-in dark:text-[#e6f1ff]">
            Crafting Visual<br />Stories That Inspire
          </h1>
          
          <p className="text-xl text-gray-800 dark:text-[#8892b0] max-w-2xl mx-auto mb-10 animate-fade-in"
  style={{ willChange: 'opacity, transform' }}
>
  Award-winning video editor & motion graphics designer creating 
  immersive visual experiences that captivate and engage.
</p>

          <div className="flex justify-center mt-8 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <a href="#portfolio" className="btn-minimalist">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
      
      <a href="#portfolio" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300 text-[#1d4ed8] dark:text-[#64ffda]" aria-label="Scroll down">
        
      </a>
    </section>;
}