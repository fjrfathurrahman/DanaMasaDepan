import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useLoginAdmin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = axiosInstance.post("/login", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return (await response).data;
    },
    onSuccess: (data) => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem("adminId", JSON.stringify(data.data.id));
      
      router.push("/dashboard");
      toast.success("Login berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}
