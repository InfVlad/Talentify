import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createJobPost } from "../jobposts";

export const useCreateJobPost = () => {
  return useMutation({
    mutationFn: createJobPost,
    onSuccess: async (res) => {
      console.log(res);
      toast.success("Publicación creada exitosamente");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Ha ocurrido un error");
    },
  });
};
