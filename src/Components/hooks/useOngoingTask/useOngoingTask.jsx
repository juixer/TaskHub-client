import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../useAuth/useAuth";

const useOngoingTask = () => {
    const {user} = useAuth()
    const { isPending : ongoingPending, error : ongoingErr, data: ongoingTasks = [] } = useQuery({
        queryKey: ['ongoing'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user.email}`)
            return res.data
        }
      })
      return {ongoingPending, ongoingErr, ongoingTasks}
};

export default useOngoingTask;