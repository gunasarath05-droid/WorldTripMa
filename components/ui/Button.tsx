'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, href, ...props }, ref) => {

        const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';

        const variants = {
            primary: 'bg-primary text-white hover:bg-blue-900 shadow-md hover:shadow-lg focus:ring-primary',
            secondary: 'bg-accent text-white hover:bg-yellow-600 shadow-md hover:shadow-lg focus:ring-accent',
            outline: 'border-2 border-primary text-primary hover:bg-blue-50 focus:ring-primary',
            ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        };

        const sizes = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base',
            lg: 'px-8 py-3.5 text-lg',
        };

        const classes = twMerge(baseStyles, variants[variant], sizes[size], className);
        const content = (
            <>
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </>
        );

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {content}
                </Link>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                disabled={disabled || isLoading}
                className={classes}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';
