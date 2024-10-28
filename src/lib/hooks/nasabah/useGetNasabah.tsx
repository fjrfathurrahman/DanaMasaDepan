import { axiosInstance } from "@/lib/service/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetNasabah(id?: string) {
  
  const endpoint = id ? `/customers/${id}` : `/customers`

  const { data: response } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return response;
    }

  })

  return {
    response,
    data: response?.data
  }

}