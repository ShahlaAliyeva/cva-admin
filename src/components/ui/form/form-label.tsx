import * as React from "react";
import { cn } from "@/src/lib/cn";
import { useFormField } from "./form";

export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export function FormLabel({ className, ...props }: FormLabelProps) {
  const { error } = useFormField();

  return (
    <label
      className={cn(
        "text-sm font-medium",
        error ? "text-red-500" : "text-foreground",
        className
      )}
      {...props}
    />
  );
}