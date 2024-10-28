import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostNasabah() {

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = axiosInstance.post("/customers", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return response;
    },
    onSuccess: () => {
      toast.success("Data berhasil ditambahkan");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })

}