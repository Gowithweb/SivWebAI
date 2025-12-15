import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import sivwebaiLogo from '@/assets/sivwebai-logo.png';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onLoadComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-foreground via-primary-dark to-foreground flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-bright/20 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent-bright rounded-2xl blur-xl opacity-60 animate-pulse scale-110"></div>
          <div className="relative w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-subtle overflow-hidden">
            <img 
              src={sivwebaiLogo} 
              alt="SivWebAI" 
              className="w-24 h-24 object-contain"
            />
            <Sparkles className="w-6 h-6 text-accent-bright absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-bright bg-clip-text text-transparent">SivWebAI</span>
          </h1>
          <p className="text-white/80 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            End-to-End Web Solutions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent-bright transition-all duration-300 relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-white/60 animate-pulse">
          {progress < 30 && 'Initializing...'}
          {progress >= 30 && progress < 60 && 'Loading Components...'}
          {progress >= 60 && progress < 90 && 'Preparing Experience...'}
          {progress >= 90 && 'Almost Ready...'}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;