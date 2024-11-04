import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center rounded-2xl text-base font-medium leading-5 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "bg-violet-600 text-white hover:bg-violet-400 active:bg-violet-700",
        secondary:
          "bg-grey-900 text-white hover:bg-grey-600 active:bg-grey-800",
        disabled: "pointer-events-none border-solid bg-grey-200",
        outlinedDisabled:
          "pointer-events-none border-2 border-solid border-grey-500 text-grey-500",
        outlined:
          "border-2 border-solid border-grey-500 bg-white py-1 text-grey-darkFont hover:bg-grey-100 active:bg-grey-500 active:text-white",
        textWithIcon:
          "border-none bg-white text-base font-medium text-grey-darkFont hover:bg-violet-50 hover:text-violet-900 active:bg-violet-200",
        textWithIconDisabled: "bg-white text-grey-500",
        textOnly:
          "text-sm text-violet-600 underline opacity-70 hover:text-violet-700 disabled:border-grey-400 disabled:text-gray-400",
      },

      size: {
        default: "",
        small: "px-4 py-2.5",
        medium: "px-4 py-3",
        large: "w-full py-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);
