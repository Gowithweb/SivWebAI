import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-xl hover:bg-primary/90 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 hover:shadow-xl hover:scale-[1.02]",
        outline:
          "border-2 border-primary bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-white hover:shadow-lg transition-all",
        secondary:
          "bg-secondary text-white shadow-lg hover:bg-secondary/90 hover:shadow-xl hover:scale-[1.02]",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        premium: "bg-primary text-white shadow-2xl hover:bg-primary/90 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5",
        hero: "bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-primary/90 hover:shadow-xl hover:scale-[1.04] hover:-translate-y-1",
        accent: "bg-accent text-white shadow-xl hover:bg-accent/90 hover:shadow-lg hover:scale-[1.02]",
        success: "bg-success text-white shadow-lg hover:bg-success/90 hover:shadow-xl hover:scale-[1.02]",
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
