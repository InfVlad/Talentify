import { cva } from "class-variance-authority";

export const chipVariants = cva(
  "inline-flex h-7 items-center rounded-md px-3 py-1",
  {
    variants: {
      variant: {
        default:
          "border-grey-100 border-transparent bg-grey-50 text-sm text-grey-darkFont",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
