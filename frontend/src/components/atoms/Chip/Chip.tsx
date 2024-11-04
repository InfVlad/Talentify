import type { VariantProps } from "class-variance-authority";
import { MapPin } from "lucide-react";
import { cn } from "@/utils/cn";
import { chipVariants } from "./Chip.styles";

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  location?: boolean;
}

function Chip({ className, variant, location, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant }), className)} {...props}>
      {location && <MapPin className="mr-1 py-1" />}
      {props.children}
    </div>
  );
}

export { Chip };
