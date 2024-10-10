import type { LoginDto, RegisterDto } from "@/types/auth.types";
import { apiClient } from "../api-client";

export async function login(credentials: LoginDto) {
  return apiClient.post("/auth/sign-in/email", credentials);
}

export async function signUp(credentials: RegisterDto) {
  return apiClient.post("/auth/sign-up", credentials);
}

export async function signOut() {
  return await apiClient.get("/auth/sign-out");
}
