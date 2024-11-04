import { cva } from "class-variance-authority";

export const textVariants = cva("leading-[normal] text-grey-darkFont", {
  variants: {
    variant: {
      default: "text-base",
      "Headline-1/40": "text-[2.5rem] font-bold",
      "Headline-1/32": "text-[2rem] font-bold",
      "Headline-2/24": "text-2xl font-bold",
      "Headline-3/20": "text-xl font-bold",
      "Subheadline-1/24": "text-2xl font-medium",
      "Subheadline-2/20": "text-xl font-medium",
      "Subheadline-3/18": "text-lg font-medium",
      "Subheadline-4/16": "text-base font-medium",
      "Subheadline-5/14": "text-sm font-medium",
      "Paragraph-1/16": "text-base font-normal",
      "Paragraph-2/14": "text-sm font-normal",
      "Paragraph-3/12": "text-xs font-normal",
      link: "text-sm text-violet-600 underline decoration-solid",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
