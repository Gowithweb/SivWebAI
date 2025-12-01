import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary via-primary-glow to-secondary text-primary-foreground shadow-md hover:shadow-primary hover:scale-[1.02] hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-lg hover:scale-[1.02]",
        outline:
          "border-2 border-primary/30 bg-background text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md transition-all",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground shadow-md hover:shadow-accent hover:scale-[1.02]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        premium: "bg-gradient-to-r from-primary via-secondary to-accent-bright text-white shadow-lg hover:shadow-glow hover:scale-[1.03] hover:-translate-y-0.5 relative overflow-hidden",
        hero: "bg-gradient-to-r from-primary via-secondary to-accent-bright text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-1 relative overflow-hidden",
        accent: "bg-gradient-to-r from-accent-bright to-secondary text-white shadow-md hover:shadow-accent hover:scale-[1.02]",
        success: "bg-gradient-to-r from-success to-success-glow text-success-foreground shadow-md hover:shadow-lg hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-10 text-base",
        icon: "h-11 w-11",
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
