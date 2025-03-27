import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button 
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-[#f0f0f0] hover:bg-[#e5e5e5] dark:bg-[#112240] dark:hover:bg-[#1d2d50]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-[#222222]" />
      ) : (
        <Sun size={18} className="text-[#64ffda]" />
      )}
    </Button>
  );
}