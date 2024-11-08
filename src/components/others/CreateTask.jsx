import React from "react";

function CreateTask() {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex w-full items-start justify-between flex-wrap">
          <div className="w-1/2">
            <div>
              <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-lg text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-gray-300 border-gray-400 mb-4 "
                type="date"
              />
            </div>
            <div>
              <h3 className="text-lg text-gray-300 mb-0.5">Assign To</h3>
              <input
                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-lg text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="text"
                placeholder="Design, Development, etc..."
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-lg text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-lg py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              cols="30"
              rows="10"
              placeholder="Detailed description of task (Max. 500 words)"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-lg text-lg mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
