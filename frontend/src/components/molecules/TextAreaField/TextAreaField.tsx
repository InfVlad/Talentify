"use client";

import type { TextareaHTMLAttributes } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "@/utils/cn";
import { Label } from "../../atoms/Label/Label";
import { TextArea } from "../../atoms/TextArea/TextArea";

interface TextAreaProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: Path<T>;
  fieldStyles?: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

export function TextAreaField<T extends FieldValues>({
  name,
  register,
  errors,
  label,
  fieldStyles,
  ...props
}: TextAreaProps<T>) {
  const isError = !!errors?.[name];
  const errorMessage = String(errors?.[name]?.message);

  return (
    <fieldset className={cn("relative mx-4 mb-4 w-full", fieldStyles)}>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <div className="relative flex items-center">
        <TextArea
          id={name}
          {...register(name)}
          variant="primary"
          isError={isError}
          aria-invalid={isError}
          aria-describedby={`${name}-error`}
          {...props}
        />
      </div>
      {isError && (
        <p id={`${name}-error`} className="pl-4 pt-2 text-xs text-red-alert">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
