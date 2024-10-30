import { axiosInstance } from "@/lib/service/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetTransaction() {
  const { data: response, status } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await axiosInstance.get("/transactions");

      await new Promise((resolve) => setTimeout(resolve, 3000));
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