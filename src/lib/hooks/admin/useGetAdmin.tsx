import { axiosInstance } from "@/lib/service/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetAdmin() {

  const { data: response, status } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const response = await axiosInstance.get("/admin");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(response);

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