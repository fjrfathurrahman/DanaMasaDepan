import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateNasabah() {
  return useMutation({
    mutationFn: async ({ id, formData }: { id: string; formData: FormData }) => {
      const response = await axiosInstance.post(`/customers/${id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(response);
      return response;
    },
    onSuccess: () => {
      toast.success("Data berhasil diupdate");
    },
    onError: () => {
      toast.error("Terjadi kesalahan, silahkan coba lagi");
    },
  })
}