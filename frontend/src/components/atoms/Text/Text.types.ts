import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "./Text.styles";

export type TagElementTypes =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "legend";

export interface TextProps
  extends HTMLAttributes<
      HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
    >,
    VariantProps<typeof textVariants> {
  element?: TagElementTypes;
}
