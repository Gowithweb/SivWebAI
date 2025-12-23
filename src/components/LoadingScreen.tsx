import { useEffect, useState } from "react";
import sivwebaiLogo from "@/assets/sivwebai-logo.png";

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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-foreground via-primary-dark to-foreground transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-bright blur-xl opacity-50 animate-pulse" />
          <img
            src={sivwebaiLogo}
            alt="SivWebAI"
            className="relative w-24 h-24 object-contain"
          />
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-bright bg-clip-text text-transparent">
              SivWebAI
            </span>
          </h1>
          <p className="text-white/70 mt-1 text-sm tracking-wide">
            End-to-End Web Solutions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-72 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent-bright transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <p className="text-xs text-white/60 tracking-wide">
          {progress < 30 && "Initializing system…"}
          {progress >= 30 && progress < 60 && "Loading modules…"}
          {progress >= 60 && progress < 90 && "Optimizing experience…"}
          {progress >= 90 && "Ready"}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
