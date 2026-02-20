"use client";

import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { inputVariants } from "./input.variants";
import { cn } from "@/src/lib/cn";

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size"
    >,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";