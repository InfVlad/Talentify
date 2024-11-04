"use client";

import { useSidebarMenuStore } from "@/store/sidebarMenu.store";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
import { Button } from "../../atoms/Button/Button";

interface NavbarMenuButtonProps {
  isRecruiter: boolean;
}

export function NavbarMenuButton({ isRecruiter }: NavbarMenuButtonProps) {
  const toggleMenu = useSidebarMenuStore((state) => state.toggleShowMenu);
  return (
    <Button
      variant="default"
      onClick={toggleMenu}
      title="Abrir menu lateral"
    >
      <Menu
        size={24}
        className={cn("h-6 w-6 text-grey-900", isRecruiter && "text-white")}
      />
    </Button>
  );
}
