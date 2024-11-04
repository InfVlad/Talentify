import type {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
} from "@/types/auth.types";
import { apiClient } from "../api-client";

export async function login(credentials: LoginDto) {
  return apiClient.post<LoginResponseDto>("/auth/login", credentials);
}

export async function signUp(credentials: RegisterDto) {
  return apiClient.post("/auth/signup", credentials);
}

export async function signOut() {
  return await apiClient.get("/auth/sign-out");
}
