
import React, { useState, useEffect } from 'react';
import { toast } from "sonner";

const LaunchCountdown = () => {
  // Set the countdown date (10 days from now for demonstration)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [launchDate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setWhatsapp('');
      toast.success("Thank you! You'll be notified about our launch.", {
        description: "We'll send exclusive offers to your email and WhatsApp."
      });
    }, 1500);
  };

  return (
    <section className="section-spacing relative overflow-hidden" id="notify-me">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
              Launching Soon - Limited Stock!
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Join our exclusive launch list and grab the best deals before anyone else!
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="glass-card w-full md:w-24 h-24 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-3xl md:text-4xl font-semibold text-maroon animate-pulse-subtle">
                    {value < 10 ? `0${value}` : value}
                  </span>
                </div>
                <span className="text-sm text-gray-600 capitalize">{unit}</span>
              </div>
            ))}
          </div>
          
          {/* Notification Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="whatsapp" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cta-button w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Notify Me'}
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  We respect your privacy and will never spam you.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
