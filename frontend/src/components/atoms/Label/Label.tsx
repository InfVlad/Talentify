import type { FC } from "react";
import { cn } from "@/utils/cn";
import { labelVariants } from "./Label.styles";
import { type LabelProps } from "./Label.types";

export const Label: FC<LabelProps> = ({
  htmlFor,
  isError = false,
  variant,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        labelVariants({ variant, className }),
        isError && "text-red-alert"
      )}
      {...props}
    />
  );
};
