import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  return (
    <div 
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '3rem 3rem',
      }}
    >
      {/* Organic blurred shapes */}
      {/* Cyan glows */}
      <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(0,207,255,0.15)_0%,transparent_70%)] blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(0,207,255,0.15)_0%,transparent_70%)] blur-3xl translate-x-1/2 translate-y-1/3 pointer-events-none"></div>
      
      {/* Dark spots / shadows */}
      <div className="absolute top-1/4 right-0 w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,transparent_70%)] blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,transparent_70%)] blur-3xl -translate-x-1/3 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,transparent_80%)] blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[80rem] h-[80rem] bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,transparent_80%)] blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>


      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};