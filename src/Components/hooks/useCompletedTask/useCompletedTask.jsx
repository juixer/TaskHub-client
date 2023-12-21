import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";

const useCompletedTask = () => {
  const { user } = useAuth();
  const {
    isPending: completedPending,
    error: completedErr,
    refetch : completedRefetch,
    data: completedTasks = [],
  } = useQuery({
    queryKey: ["completedTasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/completedTasks/${user.email}`);
      return res.data;
    },
  });
  return { completedPending, completedErr, completedTasks, completedRefetch };
};

export default useCompletedTask;
