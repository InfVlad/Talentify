"use client";

import type { InputHTMLAttributes } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import { Text } from "../../atoms/Text/Text";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  children?: React.ReactNode;
}

export function CheckInputField<T extends FieldValues>({
  name,
  register,
  errors,
  children,
  ...props
}: InputProps<T>) {
  const isError = !!errors?.[name];
  const errorMessage = String(errors?.[name]?.message);

  return (
    <fieldset className="relative mx-4 mb-9 mt-2 w-full">
      <Label className="flex cursor-pointer items-center gap-3 px-1">
        <Input
          id={name}
          {...register(name)}
          type="checkbox"
          variant="checkbox"
          isError={isError}
          aria-invalid={isError}
          aria-describedby={`${name}-error`}
          {...props}
        />
        <Text variant="Paragraph-1/16" className="select-none">
          {children}
        </Text>
      </Label>
      {isError && (
        <p id={`${name}-error`} className="pl-4 pt-2 text-xs text-red-alert">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
