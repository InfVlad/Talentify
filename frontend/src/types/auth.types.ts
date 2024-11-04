import type { z } from "zod";
import type { loginSchema, registerSchema } from "@/validations/auth.schema";

export type LoginDto = z.infer<typeof loginSchema>;

export type RegisterDto = Omit<
  z.infer<typeof registerSchema>,
  "passwordConfirmation" | "isRecruiter"
> & { role: Roles };

type Roles = "USER" | "RECRUITER" | "ADMIN";
export interface UserDataDto {
  id: number;
  email: string;
  fullName: string;
  password: string;
  role: Roles;
  companyId: number | null;
}

export interface LoginResponseDto {
  accessToken: string;
  user: UserDataDto;
}
