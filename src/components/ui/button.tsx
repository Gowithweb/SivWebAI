import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:shadow-primary hover:scale-105 hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground hover:shadow-accent hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-md",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        premium: "bg-gradient-to-r from-primary via-secondary to-accent-bright text-white hover:shadow-glow hover:scale-105 hover:-translate-y-1 relative overflow-hidden",
        hero: "bg-gradient-to-r from-primary via-secondary to-accent-bright text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow hover:scale-105 hover:-translate-y-1 relative overflow-hidden",
        accent: "bg-gradient-to-r from-accent-bright to-primary text-white hover:shadow-accent hover:scale-105",
        success: "bg-gradient-to-r from-success to-success-glow text-success-foreground hover:shadow-lg hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
