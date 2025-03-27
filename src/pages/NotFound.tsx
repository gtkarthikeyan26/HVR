
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-accent-2 to-white dark:from-dark dark:to-accent-1">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl mb-8 text-accent-4">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-accent-blue text-white rounded-full hover:bg-accent-blue/90 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto w-max hover-lift"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
