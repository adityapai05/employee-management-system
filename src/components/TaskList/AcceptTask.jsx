import React from "react";

const AcceptTask = ({ ele }) => {
  console.log("task title: ", ele.title);
  return (
    <div className="h-full w-[20.5rem] bg-red-400 rounded-xl flex-shrink-0 p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">{ele.category}</h3>
          <h4>{ele.date}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">{ele.title}</h2>
        <p className="text-base mt-5 font-medium">{ele.description}</p>
      </div>
      <div className="flex justify-between items-end gap-3 mt-auto">
        <button className="bg-green-500 hover:bg-green-600 py-1 px-2 text-base rounded-lg border-2 border-green-700">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 py-1 px-2 text-base rounded-lg border-2 border-red-700">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
