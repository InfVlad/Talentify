import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserStore } from "@/store/auth.store";
import { login, signUp } from "../auth";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      toast.success("Registro exitoso");
      router.push("/login");
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
export const useLogin = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  return useMutation({
    mutationFn: login,
    onSuccess: async ({ data }) => {
      setUser(data.user);
      setToken(data.accessToken);
      toast.success("Inicio de sesión exitoso");
      if (data.user.role === "RECRUITER") {
        router.push("/home/recruiters");
      }
      if (data.user.role === "USER") {
        router.push("/home/users");
      }
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useLogout = () => {
  const router = useRouter();

  return () => {
    useUserStore.getState().clearUser();
    router.push("/login");
  };
};
