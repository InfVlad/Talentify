"use client";

import { useUserStore } from "@/store/auth.store";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageLogo } from "../../atoms/PageLogo/PageLogo";
import { NavUserSection } from "../NavUserSection/NavUserSection";
import { NavbarMenuButton } from "../NavbarMenuButton/NavbarMenuButton";

export function Navbar() {
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();
  const isRecruiter = user?.role === "RECRUITER";

  const isDashboard = pathname.includes("/home");
  const homePathByRole = isRecruiter ? "/home/recruiters" : "/home/users";

  return (
    <header
      className={cn(
        "flex w-full items-center border-b border-grey-400 bg-white",
        isRecruiter && "bg-violet-900"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full justify-between pr-5 pl-2 py-4",
          !isDashboard && "w-[95%] max-w-7xl"
        )}
      >
        <div className="flex items-center gap-2">
          {user && <NavbarMenuButton isRecruiter={isRecruiter} />}
          <Link
            href={user ? homePathByRole : "/"}
            className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
          >
            <PageLogo isRecruiter={isRecruiter} />
          </Link>
        </div>
        <NavUserSection isRecruiter={isRecruiter} />
      </div>
    </header>
  );
}
