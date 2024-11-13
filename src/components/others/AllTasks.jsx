import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTasks() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      <div
        id="assigned-tasks"
        className="bg-neutral-900 mb-2 py-2 px-4 flex justify-between items-center rounded font-bold text-base sm:text-lg"
      >
        <h2 className="w-1/6 text-center">Employee Name</h2>
        <h2 className="w-1/6 text-center">Role</h2>
        <h3 className="w-1/6 text-center">New Task</h3>
        <h5 className="w-1/6 text-center">Active Task</h5>
        <h5 className="w-1/6 sm:w-1/5 text-center">Completed</h5>
        <h5 className="w-1/6 sm:w-1/5 text-center">Failed</h5>
      </div>

      <div className="h-[80%] sm:h-[80%] md:h-[80%] lg:h-[80%] xl:h-[80%] overflow-auto scrollbar-hide font-medium">
        {userData.map((ele, index) => {
          return (
            <div
              key={index}
              id="assigned-tasks"
              className="bg-neutral-800 mb-2 py-2 px-4 flex justify-between items-center rounded font-medium text-sm sm:text-base"
            >
              <h2 className="w-1/6 text-center">
                {ele.firstName} {ele.lastName}
              </h2>
              <h3 className="w-1/6 text-teal-400 text-center">{ele.role}</h3>
              <h3 className="w-1/6 text-blue-400 text-center">{ele.taskCount.new}</h3>
              <h5 className="w-1/6 text-yellow-400 text-center">{ele.taskCount.active}</h5>
              <h5 className="w-1/6 sm:w-1/5 text-green-600 text-center">{ele.taskCount.completed}</h5>
              <h5 className="w-1/6 sm:w-1/5 text-red-500 text-center">{ele.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;