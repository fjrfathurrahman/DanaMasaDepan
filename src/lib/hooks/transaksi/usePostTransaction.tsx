import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostTransaction() {

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.post("/transactions", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return response;
    },
    onSuccess: () => {
      toast.success("Aksi berhasil dilakukan");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}