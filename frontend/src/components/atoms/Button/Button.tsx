import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./Button.styles";
import { type ButtonProps } from "./Button.types";

export function Button({
  variant,
  className,
  asChild = false,
  size,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
