"use client";

import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { useRedirectToHomeByRole } from "@/hooks/useRedirectToHomeByRole";

function Home() {
  useRedirectToHomeByRole();
  return (
    <div className="flex min-h-[calc(100vh-4.75rem)] w-full items-center justify-center">
      <Spinner className="h-14 w-14" />
    </div>
  );
}

export default Home;
