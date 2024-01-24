import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProperty = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["propertyData"],
    queryFn: async () => {
      const data = await axios.get("");
      return data.data.data;
    },
  });

  return { isPending, error, data, refetch };
};

export default useProperty;
