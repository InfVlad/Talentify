import Link from "next/link";
import { Bookmark, FileText, User } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";

export const MenuUserButtons = () => {
  return (
    <div className="h-full w-full border-t border-gray-500 pt-4">
      <Button
        variant="textWithIcon"
        size="medium"
        className="mb-2 flex w-full justify-start pr-4"
      >
        <User className="mx-2" />
        <Link href={"/profile"}>Mi perfil</Link>
      </Button>
      <Button
        variant="textWithIcon"
        size="medium"
        className="mb-2 flex w-full justify-start pr-4"
      >
        <FileText className="mx-2" />
        <Link href={"/applied-offers"}>Mis postulaciones</Link>
      </Button>
      <Button
        variant="textWithIcon"
        size="medium"
        className="mb-2 flex w-full justify-start pr-4"
      >
        <Bookmark className="mx-2" />
        <Link href={"/saved-offers"}> Empleos guardados</Link>
      </Button>
    </div>
  );
};
