import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { inputVariants } from "./Input.styles";
import { type InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ sizes, variant, className, isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({
            variant: isError ? "error" : variant,
            sizes,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
