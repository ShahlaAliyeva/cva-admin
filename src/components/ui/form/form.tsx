"use client";

import * as React from "react";

interface FormFieldContextValue {
  error?: string;
  id: string;
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

export function useFormField() {
  return React.useContext(FormFieldContext);
}

interface FormFieldProps {
  error?: string;
  children: React.ReactNode;
}

export function FormField({ error, children }: FormFieldProps) {
  const id = React.useId();

  return (
    <FormFieldContext.Provider value={{ error, id }}>
      <div className="space-y-2">{children}</div>
    </FormFieldContext.Provider>
  );
}