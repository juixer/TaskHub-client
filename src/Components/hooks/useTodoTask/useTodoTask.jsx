import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";

const useTodoTask = () => {
    const {user} = useAuth()
    const { isPending : todoPending, error : todoErr, refetch : todoRefetch, data: todoTasks = [] } = useQuery({
        queryKey: ['todoTask'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todoTasks/${user.email}`)
            return res.data
        }
      })
      return {todoPending, todoErr,todoTasks, todoRefetch}
};

export default useTodoTask;