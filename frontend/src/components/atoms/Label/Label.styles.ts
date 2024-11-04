import { cva } from "class-variance-authority";

export const labelVariants = cva("block w-full text-xs leading-[normal]", {
  variants: {
    variant: {
      default: "text-base font-normal text-grey-darkFont",
      primary: "text-violet-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
