import { cn } from '@/lib/utils/cn';
import React from 'react';
import { IconType } from 'react-icons';

type IconProps = {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & React.HTMLAttributes<HTMLSpanElement>;

const Icon: React.FC<IconProps> = ({ icon, size = 'md' }) => {
  const sizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-xl sm:text-3xl lg:text-4xl',
    xl: 'text-3xl sm:text-4xl lg:text-5xl',
  };

  return (
    <span className={cn(sizes[size])}>
      {React.createElement(icon)}
    </span>
  );
};

export default Icon;
