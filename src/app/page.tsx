"use client";

import { Input } from "@/src/components/ui/input/input";
import { Label } from "@/src/components/ui/label/label";
import { Button } from "@/src/components/ui/button/button";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  const isError = value.length > 0 && value.length < 3;

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-8 rounded-lg shadow-sm w-96 space-y-6 border border-border/20">
        <h2 className="text-lg font-semibold">Create Account</h2>
        <p className="text-sm text-muted-foreground">
          Enter your details below
        </p>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={isError ? "error" : "default"}
          />
          {isError && (
            <p className="text-sm text-red-500 mt-1.5 space-y-3">
              Name must be at least 3 characters.
            </p>
          )}
        </div>

        <Button disabled={isError}>Submit</Button>

      </div>
    </main>
  );
}