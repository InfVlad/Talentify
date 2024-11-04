import type { LucideIcon } from "lucide-react";
import { Text } from "../../atoms/Text/Text";

export type StatCardProps = {
  quantity: number;
  title: string;
  Icon: LucideIcon;
  iconStyles: string;
};

export function StatCard({ Icon, quantity, title, iconStyles }: StatCardProps) {
  return (
    <article className="w-fit rounded-2xl bg-violet-50 p-4">
      <Text variant="Headline-1/40" element="p" className="mb-0.5">
        {quantity}
      </Text>
      <div className="flex gap-2">
        <Icon className={iconStyles} />
        <Text variant="Subheadline-4/16">{title}</Text>
      </div>
    </article>
  );
}
