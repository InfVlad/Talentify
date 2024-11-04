import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full rounded-2xl border border-solid px-4 py-3.5 text-sm font-normal focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "focus:text-gray-darkFont flex border-gray-500 text-gray-700 focus:border-violet-600",
        error: "border-red-500 text-gray-500 ring-red-500",
        checkbox:
          "h-5 w-5 accent-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2",
      },
      sizes: {
        small: "h-10",
        large: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
