import type { VariantProps } from "class-variance-authority";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { filterVariants } from "./Filter.styles";

export interface FilterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof filterVariants> {
  filterMenu?: boolean;
  selected?: boolean;
}

function Filter({
  className,
  variant,
  filterMenu,
  selected,
  ...props
}: FilterProps) {
  return (
    <div className={cn(filterVariants({ variant }), className)} {...props}>
      {props.children}
      {selected && <X className="ml-3" />}
      {filterMenu && <ChevronDown className="ml-3" />}
    </div>
  );
}

export { Filter };
