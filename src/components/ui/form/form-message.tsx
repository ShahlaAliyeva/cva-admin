import { useFormField } from "./form";

export function FormMessage() {
  const { error, id } = useFormField();

  if (!error) return null;

  return (
    <p
      id={`${id}-error`}
      className="text-sm text-red-500"
    >
      {error}
    </p>
  );
}