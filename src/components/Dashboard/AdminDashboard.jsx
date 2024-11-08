import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

function AdminDashboard({changeUser}) {

  return (
    <div className="h-screen w-full p-12">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
}

export default AdminDashboard;
