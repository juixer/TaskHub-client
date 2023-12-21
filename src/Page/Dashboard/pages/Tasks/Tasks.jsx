const Tasks = () => {
    
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Your Tasks</h1>

      <div className="flex  gap-5 flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/2 border-2 rounded-xl shadow-xl shadow-yellow-300 p-5">
          <h1 className="text-3xl font-bold text-center mb-2">Ongoing Tasks</h1>
          <hr className="mx-3"/>
           
        </div>
        <div className="w-full md:w-1/2 border-2 rounded-xl shadow-xl shadow-lime-300 p-5">
          <h1 className="text-3xl font-bold text-center mb-2">Completed Tasks</h1>
          <hr className="mx-3"/>

        </div>
      </div>
    </div>
  );
};

export default Tasks;
