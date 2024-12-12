import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostTransaction(reset: () => void) {

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.post("/transactions", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(response);

      return response;
    },
    onSuccess: () => {
      reset();
      toast.success("Aksi berhasil dilakukan");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}