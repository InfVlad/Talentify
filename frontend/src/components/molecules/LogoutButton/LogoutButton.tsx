"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { useLogout } from "@/services/mutations/auth-mutations";
import { useUserMenuStore } from "@/store/userMenu.store";

export const LogoutButton = () => {
  const logOut = useLogout();
  const closeMenu = useUserMenuStore((state) => state.closeMenu);
  return (
    <div className="flex w-full flex-col items-center border-t border-gray-500">
      <Button
        variant="textWithIcon"
        size="medium"
        className="mt-4 flex w-full justify-start pr-4"
        onClick={() => {
          logOut();
          closeMenu();
        }}
      >
        <LogOut className="mx-2" />
        Cerrar sesión
      </Button>
    </div>
  );
};
