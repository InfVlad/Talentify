"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, User } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Button } from "@/components/atoms/Button/Button";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { Text } from "@/components/atoms/Text/Text";
import { CheckInputField } from "@/components/molecules/CheckInputField/CheckInputField";
import { InputField } from "@/components/molecules/InputField/InputField";
import { useSignUp } from "@/services/mutations/auth-mutations";
import { registerSchema } from "@/validations/auth.schema";

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });
  const signUp = useSignUp();

  const onSubmit: SubmitHandler<RegisterFormValues> = ({
    passwordConfirmation: _,
    isRecruiter,
    ...data
  }) => {
    signUp.mutate({ ...data, role: isRecruiter ? "RECRUITER" : "USER" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[27.375rem] flex-col items-center px-4 pb-10"
    >
      <div className="w-full max-w-[25.375rem]">
        <Text variant="Headline-2/24" className="mb-4" element="legend">
          Crear cuenta
        </Text>
        <Text variant="Paragraph-2/14" className="mb-4">
          Completa tu perfil y accede a las mejores vacantes del mercado
          laboral, todo en un solo lugar.
        </Text>
      </div>
      <CheckInputField name="isRecruiter" register={register} errors={errors}>
        Quiero crear una cuenta como{" "}
        <span className="text-violet-600">reclutador</span>
      </CheckInputField>
      <InputField
        name="email"
        placeholder="Correo electrónico"
        register={register}
        errors={errors}
      >
        <Mail />
      </InputField>

      <InputField
        name="fullName"
        placeholder="Nombre y Apellido"
        register={register}
        errors={errors}
      >
        <User />
      </InputField>

      <InputField
        name="password"
        placeholder="Contraseña"
        type="password"
        register={register}
        errors={errors}
      >
        <Lock />
      </InputField>

      <InputField
        name="passwordConfirmation"
        placeholder="Confirme su contraseña"
        type="password"
        register={register}
        errors={errors}
      >
        <Lock />
      </InputField>

      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={signUp.isPending}
        className="h-12"
      >
        {signUp.isPending ? <Spinner className="h-7 w-7" /> : "Crear cuenta"}
      </Button>
      <div className="my-6 w-full max-w-[406px] border-b border-solid border-grey-500"></div>
      <Link href={"/login"} className="mb-6 text-center">
        <Text variant="link">¿Ya tienes una cuenta? Inicia sesión</Text>
      </Link>
      <div className="text-center">
        <Text variant="Paragraph-3/12">
          Al continuar, confirmas tu conformidad con nuestras 
          <span className="text-violet-600 underline decoration-solid">
            Condiciones de Uso
          </span>{" "}
          y que leíste nuestra 
          <span className="text-violet-600 underline decoration-solid">
            Declaración de Privacidad y Cookies.
          </span>
        </Text>
      </div>
    </form>
  );
}
