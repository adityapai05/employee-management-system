import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ ele }) => {
  return (
    <div className="h-full w-[20.5rem] bg-green-400 rounded-xl flex-shrink-0 p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">{ele.category}</h3>
          <h4>{ele.date}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">{ele.title}</h2>
        <p className="text-base mt-5 font-medium">
          {ele.description}
        </p>
      </div>
      <div className="mt-auto">
        <button className="bg-blue-500 border-2 border-blue-700 hover:bg-blue-600 rounded font-medium py-3 px-2 text-base w-full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
