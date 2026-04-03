import React from 'react';

interface LogoSymbolProps {
  size?: number;
  className?: string;
  color?: string;
}

export const LogoSymbol: React.FC<LogoSymbolProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 
        Refined Monogram: 
        Combining V and F through a shared structural axis.
        Geometric, precise, and sophisticated.
      */}
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* The 'V' component (Diagonal to Pivot) */}
        <path d="M 6 8 L 16 26" />
        
        {/* The 'F' component (Vertical base and horizontal bars) */}
        <path d="M 16 26 L 16 6" />
        <path d="M 16 6 L 26 6" />
        <path d="M 16 14 L 23 14" />
      </g>
    </svg>
  );
};

export default LogoSymbol;
