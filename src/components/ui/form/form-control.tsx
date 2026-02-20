/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useFormField } from "./form";

export function FormControl({
  children,
}: {
  children: React.ReactElement<any>;
}) {
  const { error, id } = useFormField();

  return React.cloneElement(children as React.ReactElement<any>, {
    id,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    variant: error ? "error" : "default",
  });
}