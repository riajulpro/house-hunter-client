import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProperty = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["propertyData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://server-task-1.vercel.app/properties"
        );
        return response.data.data;
      } catch (error) {
        throw new Error("Error fetching property data");
      }
    },
  });

  return { isPending, error, data, refetch };
};

export default useProperty;
