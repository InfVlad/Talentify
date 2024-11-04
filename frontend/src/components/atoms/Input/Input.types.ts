import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./Input.styles";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  isError?: boolean;
}
