import { axiosInstance } from "@/lib/service/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = axiosInstance.delete("/admin/" + id);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      toast.success("Data berhasil dihapus");
    },
    onError: () => {
      toast.error("Terjadi kesalahan, silahkan coba lagi");
    },
  });
}
