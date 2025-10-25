
import React from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
  return (
    <header className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.3),transparent_40%)]"></div>

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter hero-gradient-text">
          Terminal Takeover
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          The command line is evolving. Discover the top 75 AI agents, assistants, and platforms transforming the shell from a simple interface into an intelligent development partner.
        </p>
        <div className="mt-8">
          <a 
            href="#directory" 
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/30"
          >
            Explore The Directory
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 scroll-indicator">
        <a href="#directory" aria-label="Scroll to directory">
          <ArrowDownIcon className="w-8 h-8 text-slate-400" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
