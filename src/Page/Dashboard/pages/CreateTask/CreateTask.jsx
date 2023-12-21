const CreateTask = () => {
  return (
    <div className="mt-5 space-y-5">
      <h1 className="text-5xl font-bold text-center">Create Your Task</h1>
      <form className=" max-w-2xl mx-auto space-y-5">
        <div className="space-y-2">
          <h5 className="font-bold">Task Name</h5>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <h5 className="font-bold">Task Description</h5>
          <textarea
            className="textarea textarea-bordered w-full h-28"
            placeholder="Your task description"
          ></textarea>
        </div>

        <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <div className="space-y-2 w-full">
            <h5 className="font-bold">Task Deadline Date</h5>
            <input type="date" className="input input-bordered w-full" />
          </div>
          <div className="space-y-2 w-full">
            <h5 className="font-bold">Task Deadline Time</h5>
            <input type="time" className="input input-bordered w-full" />
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="font-bold">Task Priority</h5>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled defaultValue={'Select'}>
              Select
            </option>
            <option>Low</option>
            <option>Mid</option>
            <option>High</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
