"use client";

import { useUserStore } from "@/store/auth.store";
import { Text } from "../../atoms/Text/Text";

export function WelcomeMessage() {
  const user = useUserStore((state) => state.user);
  return (
    <Text variant="Headline-1/32">
      Bienvenido {user ? user.fullName.split(" ") : "Usuario"}!
    </Text>
  );
}
