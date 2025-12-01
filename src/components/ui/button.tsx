import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary via-secondary to-accent-bright text-white shadow-xl hover:shadow-rainbow hover:scale-[1.05] hover:-translate-y-1",
        destructive:
          "bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground shadow-lg hover:shadow-xl hover:scale-[1.03]",
        outline:
          "border-3 border-primary/40 bg-background/50 backdrop-blur-sm text-primary hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:shadow-primary transition-all",
        secondary:
          "bg-gradient-to-r from-accent-bright to-secondary text-white shadow-lg hover:shadow-accent hover:scale-[1.04]",
        ghost: "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline hover:text-secondary",
        premium: "bg-gradient-to-r from-primary via-secondary via-accent-bright to-accent-lime text-white shadow-2xl hover:shadow-rainbow hover:scale-[1.05] hover:-translate-y-1 relative overflow-hidden",
        hero: "bg-gradient-to-r from-primary via-secondary via-accent-bright to-accent-cyan text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-rainbow hover:scale-[1.06] hover:-translate-y-2 relative overflow-hidden animate-gradient-x",
        accent: "bg-gradient-to-r from-accent-cyan to-accent-lime text-white shadow-xl hover:shadow-glow hover:scale-[1.04]",
        success: "bg-gradient-to-r from-success to-accent-lime text-white shadow-lg hover:shadow-xl hover:scale-[1.03]",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-lg px-5 text-xs",
        lg: "h-14 rounded-2xl px-12 text-lg",
        icon: "h-12 w-12",
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
