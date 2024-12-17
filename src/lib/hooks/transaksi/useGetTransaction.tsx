import { axiosInstance } from "@/lib/service/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetTransaction(id? : string) {
  const endpoint = id ? `/transactions/${id}` : `/transactions`

  const { data: response, status } = useQuery({
    queryKey: id ? ["transactions", id] : ["transactions"],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(response)

      return response;
    },
  })

  return {
    status,
    result: response,
    response: response?.data,
    data: response?.data.data
  }
}