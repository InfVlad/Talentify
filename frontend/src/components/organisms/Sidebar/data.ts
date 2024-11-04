import { Bookmark, FileText, Home, Search, User } from "lucide-react";
import { SidebarButtonProps } from "../../molecules/SidebarButton/SidebarButton";

type SidebarButton = Omit<SidebarButtonProps, "showText">;

export const userButtonsList: SidebarButton[] = [
  {
    href: "/home/users",
    Icon: Home,
    title: "Home",
  },
  {
    href: "/home/users",
    Icon: Search,
    title: "Buscar empleos",
  },
  {
    href: "/home/users",
    Icon: User,
    title: "Mi perfil",
  },
  {
    href: "/home/users",
    Icon: FileText,
    title: "Mis postulaciones",
  },
  {
    href: "/home/users",
    Icon: Bookmark,
    title: "Empleos guardados",
  },
];
export const recruitersButtonsList: SidebarButton[] = [
  {
    href: "/home/recruiters",
    Icon: Home,
    title: "Home",
  },
  {
    href: "/home/recruiters",
    Icon: User,
    title: "Mi perfil",
  },
  {
    href: "/home/recruiters",
    Icon: FileText,
    title: "Gestionar empleos",
  },
  // {
  //   href: "/home/recruiters",
  //   Icon: Users,
  //   title: "Candidatos guardados",
  // },
];
