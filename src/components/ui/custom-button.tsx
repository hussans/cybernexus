import React, { useRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(1)';
    }
  };

  const handleMouseDown = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(0.95)';
    }
  };

  const handleMouseUp = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(1.05)';
    }
  };

  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-white text-black hover:bg-white/20 hover:backdrop-blur-sm hover:text-white hover:border hover:border-white/50 active:bg-white/30 active:border-white/70",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700",
    outline: "text-zinc-400 hover:text-white flex items-center gap-2"
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ transform: 'scale(1)', willChange: 'transform' }}
      {...props}
    >
      {children}
    </button>
  );
};
