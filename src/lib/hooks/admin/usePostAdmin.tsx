import { axiosInstance } from "@/lib/service/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * Fungsi ini digunakan untuk melakukan login dengan menggunakan metode POST.
 * 
 * @returns {UseMutationResult} Object yang berisi properti `mutate` dan `data`.
 * `mutate` adalah fungsi yang digunakan untuk melakukan POST request ke endpoint `/login`.
 * `data` adalah hasil dari response yang diterima dari endpoint `/login`.
 */
export default function usePostAdmin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = axiosInstance.post("/login", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return response;
    },
    onSuccess: () => {
      router.push("/dashboard");
      toast.success("Login berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}
