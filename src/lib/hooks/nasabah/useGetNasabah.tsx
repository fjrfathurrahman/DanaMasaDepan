import { axiosInstance } from "@/lib/service/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetNasabah(id?: string) {
  const endpoint = id ? `/customers/${id}` : `/customers`

  const { data: response, status } = useQuery({
    queryKey: id ? ["customers", id] : ["customers"],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return response;
    }

  })

  return {
    status,
    result: response,
    response: response?.data,
    data: response?.data.data
  }

}