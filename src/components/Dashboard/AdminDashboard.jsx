import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";
import CreateUser from "../others/CreateUser";

function AdminDashboard({ changeUser, data }) {
  const [option, setOption] = useState("CreateTask");
  const handleOption = (option) => {
    setOption(option);
  };
  return (
    <div className="h-screen w-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <Header changeUser={changeUser} data={data} />
      <div className="mb-4 flex justify-center space-x-4">
        <button onClick={() => handleOption("CreateTask")} className={`py-2 px-4 rounded-lg text-lg ${
            option === "CreateTask" ? "bg-emerald-500" : "bg-gray-500"
          } text-white`}>
          Create Task
        </button>
        <button onClick={() => handleOption("AddEmployee")} className={`py-2 px-4 rounded-lg text-lg ${
            option === "AddEmployee" ? "bg-emerald-500" : "bg-gray-500"
          } text-white`}>
          Add Employee
        </button>
      </div>
      {option == "CreateTask" && <CreateTask />}
      {option == "AddEmployee" && <CreateUser />}
      <AllTasks />
    </div>
  );
}

export default AdminDashboard;
