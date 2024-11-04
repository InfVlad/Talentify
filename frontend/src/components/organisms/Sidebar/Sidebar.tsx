"use client";

import { useUserStore } from "@/store/auth.store";
import { useSidebarMenuStore } from "@/store/sidebarMenu.store";
import { cn } from "@/utils/cn";
import { SidebarButton } from "../../molecules/SidebarButton/SidebarButton";
import { recruitersButtonsList, userButtonsList } from "./data";

export function Sidebar() {
  const userRole = useUserStore((state) => state.user?.role);
  const showMenu = useSidebarMenuStore((state) => state.showMenu);
  const buttonsList =
    userRole === "RECRUITER" ? recruitersButtonsList : userButtonsList;
  return (
    <aside
      className={cn(
        "flex h-[inherit] max-w-[37.5rem] flex-col gap-2 overflow-hidden border-r border-grey-500 px-4 py-12 transition-all duration-300 ease-in-out",
        showMenu ? "w-[17.5rem]" : "w-20"
      )}
    >
      {buttonsList.map((item, index) => (
        <SidebarButton key={item.title + index} {...item} showText={showMenu} />
      ))}
    </aside>
  );
}
