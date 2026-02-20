import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full rounded-md border bg-background px-3 py-2 text-sm transition-colors focus:outline-none ffocus:ring-2 focus:ring-primary/30 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border",
        error: "border-red-400 focus:ring-red-400/30",
      },
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);