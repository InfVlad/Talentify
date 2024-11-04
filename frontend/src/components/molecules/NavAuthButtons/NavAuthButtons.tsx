import Link from "next/link";
import { Button } from "@/components/atoms/Button/Button";

export function NavAuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button asChild variant="secondary">
        <Link href={"/login"}>Iniciar Sesión</Link>
      </Button>
      <Button asChild variant="outlined" className="py-2">
        <Link href={"/register"}>Crear cuenta</Link>
      </Button>
    </div>
  );
}
