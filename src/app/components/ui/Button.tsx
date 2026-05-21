import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-primary text-primary-foreground hover:bg-green-hover shadow-sm': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-green-lighter': variant === 'secondary',
          'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline',
          'text-primary hover:bg-green-lighter': variant === 'ghost',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-7 py-3.5 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
