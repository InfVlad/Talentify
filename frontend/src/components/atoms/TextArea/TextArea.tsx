import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { textAreaVariants } from "./TextArea.styles";
import { type TextAreaProps } from "./TextArea.types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, className, isError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          textAreaVariants({
            variant: isError ? "error" : variant,

            className,
          })
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
export { TextArea };
