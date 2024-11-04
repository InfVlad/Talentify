import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { textAreaVariants } from "./TextArea.styles";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  isError?: boolean;
}
