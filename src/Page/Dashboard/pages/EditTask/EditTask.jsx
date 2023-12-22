import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { axiosPublic } from "../../../../Components/hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import UseHelmet from "../../../../Components/hooks/useHelmet/UseHelmet";
import { motion } from "framer-motion";
const EditTask = () => {
  const taskDetails = useLoaderData();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formattedTime = new Date(`1970-01-01T${data.task_deadline_time}`);
    const formattedTimeString = formattedTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const taskInfo = {
      task_name: data.task_name,
      task_details: data.task_details,
      task_deadline_date: data.task_deadline_date,
      task_priority: data.task_priority,
      task_deadline_time: formattedTimeString,
    };
    axiosPublic.put(`/editTask/${taskDetails._id}`, taskInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        navigate("/dashboard/tasks");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="mt-5 space-y-5"
    >
      <UseHelmet title={"Edit Task"} />
      <h1 className="text-5xl font-bold text-center">Update Your Task</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-2xl mx-auto space-y-5"
      >
        <div className="space-y-2">
          <h5 className="font-bold">Task Name</h5>
          <input
            type="text"
            {...register("task_name")}
            defaultValue={taskDetails.task_name}
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <h5 className="font-bold">Task Description</h5>
          <textarea
            {...register("task_details")}
            defaultValue={taskDetails.task_details}
            required
            className="textarea textarea-bordered w-full h-28"
            placeholder="Your task description"
          ></textarea>
        </div>

        <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <div className="space-y-2 w-full">
            <h5 className="font-bold">Task Deadline Date</h5>
            <input
              {...register("task_deadline_date")}
              defaultValue={taskDetails.task_deadline_date}
              required
              type="date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="space-y-2 w-full">
            <h5 className="font-bold">Task Deadline Time</h5>
            <input
              {...register("task_deadline_time")}
              required
              type="time"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="font-bold">Task Priority</h5>
          <select
            defaultValue={taskDetails.task_priority}
            {...register("task_priority")}
            required
            className="select select-bordered w-full "
          >
            <option disabled>Select</option>
            <option>Low</option>
            <option>Mid</option>
            <option>High</option>
          </select>
        </div>

        <button className="btn glass bg-cyan-600 hover:bg-cyan-800 text-xl font-bold w-full text-white">
          Create
        </button>
      </form>
    </motion.div>
  );
};

export default EditTask;
