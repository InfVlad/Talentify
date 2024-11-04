import { cn } from "@/utils/cn";
import { textVariants } from "./Text.styles";
import type { TagElementTypes, TextProps } from "./Text.types";

const createText = (variant: TextProps["variant"]): TagElementTypes => {
  switch (variant) {
    case "Headline-1/40":
      return "h1";
    case "Headline-1/32":
      return "h1";
    case "Headline-2/24":
      return "h2";
    case "Headline-3/20":
      return "h3";
    case "link":
      return "span";
    default:
      return "p";
    // throw new Error('Text Variant not supported');
  }
};

/**
 * @example
 * <Text variant='Headline-1/40' className="mb-12">
 *    lorem ipsum
 * </Text>
 *
 */
export const Text = (props: TextProps) => {
  const { variant, className, element, ...HtmlTextProps } = props;
  const TextElement = element ? element : createText(variant);

  return (
    <TextElement
      className={cn(textVariants({ variant, className }))}
      {...HtmlTextProps}
    />
  );
};
