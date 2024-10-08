import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        p: 'leading-7 [&:not(:first-child)]:mt-6',
        lead: 'text-xl text-muted-foreground',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-muted-foreground'
      }
    },
    defaultVariants: {
      variant: "p"
    }
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

type Typography = typeof Typography
Typography.displayName = 'Typography'

export { Typography, typographyVariants }