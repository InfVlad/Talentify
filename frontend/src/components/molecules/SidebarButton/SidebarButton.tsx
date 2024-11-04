import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "../../atoms/Button/Button";

export interface SidebarButtonProps {
  Icon: LucideIcon;
  title: string;
  href: string;
  showText: boolean;
}

export function SidebarButton({
  Icon,
  href,
  title,
  showText,
}: SidebarButtonProps) {
  return (
    <Button
      variant="textWithIcon"
      asChild
      className="flex w-full min-w-max justify-start gap-2 px-4 py-3"
    >
      <Link href={href}>
        <Icon size={24} />
        {showText ? title : ""}
      </Link>
    </Button>
  );
}
