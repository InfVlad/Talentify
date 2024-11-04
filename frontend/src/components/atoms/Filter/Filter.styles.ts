import { cva } from "class-variance-authority";

export const filterVariants = cva("inline-flex items-center", {
  variants: {
    variant: {
      default:
        "bg-grey-light rounded-2xl border-[1px] border-grey-500 px-4 py-3 text-base font-medium text-grey-darkFont hover:cursor-pointer hover:bg-gray-50 active:bg-grey-100",
      selected:
        "rounded-2xl border-[1px] border-violet-700 bg-violet-50 px-4 py-3 text-base font-medium text-violet-700 hover:cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
