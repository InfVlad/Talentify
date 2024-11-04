"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Button } from "@/components/atoms/Button/Button";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { Text } from "@/components/atoms/Text/Text";
import { InputField } from "@/components/molecules/InputField/InputField";
import { useLogin } from "@/services/mutations/auth-mutations";
import { loginSchema } from "@/validations/auth.schema";

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });
  const login = useLogin();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[438px] flex-col items-center px-4"
    >
      <div className="w-full max-w-[25.375rem]">
        <Text variant="Headline-2/24" className="mb-4" element="legend">
          Iniciar sesión
        </Text>
        <Text variant="Paragraph-2/14" className="mb-4">
          Libera tu potencial profesional: Conecta, Colabora y Prospera con
          Talentify.
        </Text>
      </div>

      <InputField
        name="email"
        placeholder="Correo electrónico"
        register={register}
        errors={errors}
      >
        <Mail />
      </InputField>

      <InputField
        name="password"
        type={"password"}
        placeholder="Contraseña"
        register={register}
        errors={errors}
      >
        <Lock className="mr-2" />
      </InputField>

      <div className="mb-4 w-full text-left">
        <Link href="#">
          <Text variant="link">¿Olvidaste tu contraseña?</Text>
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        className="mt-4 h-12"
      >
        {login.isPending ? <Spinner className="h-7 w-7" /> : "Iniciar Sesión"}
      </Button>

      <div className="my-10 w-full max-w-[406px] border-b border-solid border-grey-500"></div>

      <Link href={"/register"}>
        <Text variant="link" className="mb-10 text-center">
          ¿Aún no tienes cuenta? Crear una ahora
        </Text>
      </Link>
    </form>
  );
}
