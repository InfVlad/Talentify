import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "@/store/auth.store";

export function useRedirectToHomeByRole() {
  const router = useRouter();
  const userRole = useUserStore((state) => state.user?.role);

  useEffect(() => {
    if (!userRole) {
      return;
    }
    if (
      userRole === "RECRUITER" &&
      (window?.location?.pathname === "/home" ||
        window?.location?.pathname.startsWith("/home/users"))
    ) {
      router.push("/home/recruiters");
    }
    if (
      userRole === "USER" &&
      (window?.location?.pathname === "/home" ||
        window?.location?.pathname.startsWith("/home/recruiters"))
    ) {
      router.push("/home/users");
    }
  }, [userRole]);
}
