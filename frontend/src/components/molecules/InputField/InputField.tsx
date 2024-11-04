"use client";

import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "@/utils/cn";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
  fieldStyles?: string;
  arrayErrorMessage?: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  children?: React.ReactNode;
}

export function InputField<T extends FieldValues>({
  name,
  register,
  errors,
  label,
  type = "text",
  fieldStyles,
  arrayErrorMessage,
  children,
  ...props
}: InputProps<T>) {
  const isError = !!arrayErrorMessage || !!errors?.[name];
  const errorMessage = arrayErrorMessage ?? String(errors?.[name]?.message);
  const [showPassword, setShowPassword] = useState(false);
  const showText = showPassword ? "text" : "password";

  return (
    <fieldset className={cn("relative mx-4 mb-4 w-full", fieldStyles)}>
      {label && (
        <Label htmlFor={name} className="mb-2">
          {label}
        </Label>
      )}
      <div className="relative flex items-center">
        {children && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {children}
          </div>
        )}
        <Input
          id={name}
          type={type === "password" ? showText : type}
          {...register(name)}
          variant="primary"
          className={!!children ? "px-10" : ""} //with icon
          sizes="large"
          isError={isError}
          aria-invalid={isError}
          aria-describedby={`${name}-error`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {isError && (
        <p id={`${name}-error`} className="pl-4 pt-2 text-xs text-red-alert">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
