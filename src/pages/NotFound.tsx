
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory-light texture-bg">
      <div className="text-center p-8 glass-card rounded-lg">
        <h1 className="text-5xl font-serif font-semibold text-maroon mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <a href="/" className="cta-button inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
