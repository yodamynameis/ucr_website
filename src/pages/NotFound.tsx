import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const [glitchText, setGlitchText] = useState('404');
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchVariations = ['404', '4Ø4', '4０4', '４04', '40４', 'ERR', '???', '4O4'];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const randomText = glitchVariations[Math.floor(Math.random() * glitchVariations.length)];
      setGlitchText(randomText);

      setTimeout(() => {
        setGlitchText('404');
        setIsGlitching(false);
      }, 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 3 + (i % 3),
    size: 20 + (i % 4) * 10,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-20"
            style={{
              left: `${10 + (element.id * 12)}%`,
              top: `${15 + (element.id * 10)}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div
              className="bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-sm animate-bounce"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
              }}
            ></div>
          </div>
        ))}

        {/* Circuit Pattern */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
            <path d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-ping" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Glitch Effect 404 */}
          <div className="mb-8 relative">
            <h1
              className={`text-9xl sm:text-[12rem] lg:text-[15rem] font-black mb-4 transition-all duration-200 ${
                isGlitching
                  ? 'text-red-400 transform skew-x-2 scale-105'
                  : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'
              }`}
              style={{
                textShadow: isGlitching ? '2px 2px 0px #ff0000, -2px -2px 0px #00ffff' : 'none',
                filter: isGlitching ? 'hue-rotate(180deg)' : 'none',
              }}
            >
              {glitchText}
            </h1>

            {/* Glitch Lines */}
            {isGlitching && (
              <>
                <div className="absolute top-1/4 left-0 right-0 h-1 bg-red-400 opacity-70 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-cyan-400 opacity-70 animate-pulse"></div>
              </>
            )}
          </div>

          {/* Error Messages */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              System <span className="text-red-400 animate-pulse">Malfunction</span> Detected
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              The page you're looking for has been <span className="text-cyan-400">disconnected</span> from the mainframe.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our robotic systems are working to restore the connection.
              Meanwhile, let's get you back to the hub's main interface.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={() => window.history.back()}
              className="text-white font-medium px-6 py-3 rounded-xl border border-white/30 bg-transparent hover:border-violet-400 hover:text-violet hover:bg-white/10 backdrop-blur-sm flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Back
            </button>

            <a
              href="/"
              className="text-white font-medium px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 flex items-center gap-2 transition duration-300"
            >
              <Home className="w-5 h-5" /> Return to Home
            </a>
          </div>

          {/* Fun Error Codes */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-mono">
              Error Code: SYSTEM_DISCONNECTED_404 | Status:
              <span className="text-red-400 animate-pulse ml-1">OFFLINE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
