import type { LabelHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { labelVariants } from "./Label.styles";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  isError?: boolean;
}
