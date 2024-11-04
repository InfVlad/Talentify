"use client";

import Link from "next/link";
import { useCallback } from "react";
import { X } from "lucide-react";
import { InfoUser } from "@/components/molecules/InfoUser/InfoUser";
import { LogoutButton } from "@/components/molecules/LogoutButton/LogoutButton";
import { MenuUserButtons } from "@/components/molecules/MenuUserButtons/MenuUserButtons";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useUserStore } from "@/store/auth.store";
import { useUserMenuStore } from "@/store/userMenu.store";

export const UserMenu = () => {
  const closeMenu = useUserMenuStore((state) => state.closeMenu);
  const isUser = useUserStore((state) => state.user?.role === "USER");

  const handleClickOutsideOrEscape = useCallback(() => {
    closeMenu();
  }, []);

  const ref = useClickOutside<HTMLDivElement>(handleClickOutsideOrEscape);

  return (
    <div
      ref={ref}
      className="absolute -right-3 top-14 z-10 flex w-full flex-col items-start justify-between rounded-3xl bg-white p-4 md:w-[21.25rem] md:border md:border-solid md:border-gray-500"
    >
      <Link className="self-end text-gray-900 md:hidden" href="/">
        <X />
      </Link>
      <InfoUser />
      {isUser && <MenuUserButtons />}
      <LogoutButton />
    </div>
  );
};
