// This is a simplified version of UI components
// In a real application, each of these would be in separate files with full implementations

import React from 'react';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default',
  size = 'default',
  ...props 
}) => {
  // Simplified implementation for static site
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors
        ${variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
        ${variant === 'outline' ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' : ''}
        ${variant === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : ''}
        ${size === 'default' ? 'h-10 px-4 py-2 text-sm' : ''}
        ${size === 'sm' ? 'h-9 rounded-md px-3 text-xs' : ''}
        ${size === 'lg' ? 'h-11 rounded-md px-8 text-base' : ''}
        rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Components
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <div 
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <div 
      className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <h3 
      className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <p
      className={`text-sm text-muted-foreground ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <div 
      className={`p-6 pt-0 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children,
  className,
  ...props 
}) => {
  return (
    <div 
      className={`flex items-center p-6 pt-0 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Input Components
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ 
  className,
  ...props 
}) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm 
        ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 
        ${className || ''}`}
      {...props}
    />
  );
};

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ 
  className,
  ...props 
}) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm 
        ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
      {...props}
    />
  );
};

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children,
  variant = 'default',
  className,
  ...props 
}) => {
  return (
    <div
      className={`inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors
        ${variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/80' : ''}
        ${variant === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : ''}
        ${variant === 'outline' ? 'text-foreground' : ''}
        ${variant === 'destructive' ? 'bg-destructive text-destructive-foreground hover:bg-destructive/80' : ''}
        ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Separator Component
interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className,
  ...props
}) => {
  return (
    <div
      className={`shrink-0 bg-border
        ${orientation === 'horizontal' ? 'h-[1px] w-full' : ''}
        ${orientation === 'vertical' ? 'h-full w-[1px]' : ''}
        ${className || ''}`}
      {...props}
    />
  );
}; 