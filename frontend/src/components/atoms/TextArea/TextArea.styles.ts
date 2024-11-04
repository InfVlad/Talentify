import { cva } from "class-variance-authority";

export const textAreaVariants = cva(
  "w-full rounded-2xl border border-solid px-4 py-3.5 text-sm font-normal focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "focus:text-gray-darkFont flex h-[16rem] border-gray-500 text-gray-700 focus:border-violet-600",
        error: "h-[16rem] border-red-500 text-gray-500 ring-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
