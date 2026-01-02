import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20",
            outline: "border border-primary text-primary hover:bg-primary/5",
            ghost: "hover:bg-primary/5 text-primary",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-2.5 text-base",
            lg: "px-8 py-3 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
