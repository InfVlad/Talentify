import { cva } from "class-variance-authority";

export const avatarVariants = cva("overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-gray-200",
    },
    size: {
      xsmall: "h-9 w-9",
      small: "h-10 w-10",
      medium: "h-[42px] w-[42px]",
      large: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "large",
  },
});
