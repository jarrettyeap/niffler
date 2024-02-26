"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEventHandler } from "react";

interface FileInputProps {
  label: string;
  id?: string;
  accept?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function FileInput({
  label,
  id = label,
  accept,
  onChange,
}: FileInputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="file" accept={accept} onChange={onChange} />
    </div>
  );
}
