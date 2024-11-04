"use client";

import Link from "next/link";
import { useUserStore } from "@/store/auth.store";
import { useUserMenuStore } from "@/store/userMenu.store";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Button } from "../../atoms/Button/Button";
import { NavAuthButtons } from "../../molecules/NavAuthButtons/NavAuthButtons";
import { UserMenu } from "../UserMenu/UserMenu";

interface NavUserSectionProps {
  isRecruiter: boolean;
}

export function NavUserSection({ isRecruiter }: NavUserSectionProps) {
  const showMenu = useUserMenuStore((state) => state.showMenu);
  const toggleMenu = useUserMenuStore((state) => state.toggleShowMenu);
  const user = useUserStore((state) => state.user);
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-4">
          {isRecruiter && (
            <Button
              variant="outlined"
              className="border-none text-purple-900 hover:text-purple-700"
              asChild
            >
              <Link href={"/home/recruiters/publish-offer"}>
                Publicar empleo
              </Link>
            </Button>
          )}
          <div className="relative">
            <Button variant="default" className="p-0" onClick={toggleMenu}>
              <Avatar
                size="medium"
                src="https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
              />
            </Button>
            {showMenu && <UserMenu />}
          </div>
        </div>
      ) : (
        <NavAuthButtons />
      )}
    </div>
  );
}
