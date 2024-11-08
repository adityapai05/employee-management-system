import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

function AdminDashboard({ changeUser, data }) {
  return (
    <div className="h-screen w-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
}

export default AdminDashboard;