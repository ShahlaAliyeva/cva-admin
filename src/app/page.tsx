"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button/button";
import { Input } from "@/src/components/ui/input/input";

import { FormField } from "@/src/components/ui/form/form";
import { FormLabel } from "@/src/components/ui/form/form-label";
import { FormControl } from "@/src/components/ui/form/form-control";
import { FormMessage } from "@/src/components/ui/form/form-message";

export default function Page() {
  const [value, setValue] = useState("");

  const error =
    value.length > 0 && value.length < 3
      ? "Name must be at least 3 characters."
      : undefined;

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card border border-border/30 shadow-md rounded-lg p-8 w-96 space-y-6">
        
        <FormField error={error}>
          <FormLabel htmlFor="name">Name</FormLabel>

          <FormControl>
            <Input
              id="name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormMessage />
        </FormField>

        <Button disabled={!!error}>Submit</Button>
      </div>
    </main>
  );
}