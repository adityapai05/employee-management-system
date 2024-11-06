import React from "react";

function TaskList() {
  return (
    <div
      id="task-list"
      className="flex items-center justify-start gap-5 h-[60%] w-full mt-10 rounded-xl py-5 flex-nowrap overflow-x-auto"
    >
      <div className="h-full w-[20.5rem] bg-red-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between  items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">High</h3>
          <h4>20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Go to the Gym</h2>
        <p className="text-sm mt-5 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga qui voluptates architecto dignissimos ad at adipisci esse repellat, aspernatur distinctio totam repudiandae alias eligendi minima similique quibusdam ipsum iste?</p>
      </div>
      <div className="h-full w-[20.5rem] bg-green-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between  items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">High</h3>
          <h4>20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Go to the Gym</h2>
        <p className="text-sm mt-5 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga qui voluptates architecto dignissimos ad at adipisci esse repellat, aspernatur distinctio totam repudiandae alias eligendi minima similique quibusdam ipsum iste?</p>
      </div>
      <div className="h-full w-[20.5rem] bg-blue-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between  items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">High</h3>
          <h4>20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Go to the Gym</h2>
        <p className="text-sm mt-5 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga qui voluptates architecto dignissimos ad at adipisci esse repellat, aspernatur distinctio totam repudiandae alias eligendi minima similique quibusdam ipsum iste?</p>
      </div>
      <div className="h-full w-[20.5rem] bg-yellow-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between  items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">High</h3>
          <h4>20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Go to the Gym</h2>
        <p className="text-sm mt-5 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga qui voluptates architecto dignissimos ad at adipisci esse repellat, aspernatur distinctio totam repudiandae alias eligendi minima similique quibusdam ipsum iste?</p>
      </div>
      <div className="h-full w-[20.5rem] bg-red-400 rounded-xl flex-shrink-0 p-5">
        <div className="flex justify-between  items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">High</h3>
          <h4>20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Go to the Gym</h2>
        <p className="text-sm mt-5 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga qui voluptates architecto dignissimos ad at adipisci esse repellat, aspernatur distinctio totam repudiandae alias eligendi minima similique quibusdam ipsum iste?</p>
      </div>
    </div>
  );
}

export default TaskList;
