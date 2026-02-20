"use client";

import { Button } from "../components/ui/button/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>

      --------

      <Button onClick={() => alert("click")}>Click</Button>

      <Button className="w-40">Custom width</Button>

      <Button variant="outline" size="sm">Small</Button>

      <Button variant="ghost" disabled>Disabled</Button>

    </main>
  );
}
